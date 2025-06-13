import { useParams, Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as postService from "../../services/postService";
import CommentForm from "../CommentForm/CommentForm";
import TopNavBar from "../TopNavBar/TopNavBar";
import NavBar from "../NavBar/NavBar";
import NavTabs from "../NavTabs/NavTabs";
import "./CommunityDetails.css";

const CommunityDetails = (props) => {
  const { postId } = useParams();
  const { user } = useContext(UserContext);
  const [post, setPost] = useState(null);

  const handleAddComment = async (commentFormData) => {
    const newComment = await postService.createComment(postId, commentFormData);
    setPost({ ...post, comments: [...post.comments, newComment] });
  };

  const handleDeleteComment = async (commentId) => {
    await postService.deleteComment(postId, commentId);
    setPost({
      ...post,
      comments: post.comments.filter((c) => c._id !== commentId),
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await postService.show(postId);
      setPost(postData);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <main>Loading...</main>;

  return (
    <>
      <TopNavBar />
      <main className="community-page">
        <NavTabs />
        <section className="post">
          <header className="post-header">
            <img
              className="avatar"
              src={`/images/avatars/${post.author.avatar}`}
              alt={`${post.author.username}'s avatar`}
            />
            <div className="author-info">
              <p className="author-name">{`${post.author.firstname} ${post.author.lastname}`}</p>
              <p className="author-title">Aspiring Nurse</p>
            </div>
          </header>

          <h1 className="post-title">{post.title}</h1>

          <p className="post-text">{post.text}</p>

          <p className="post-date">
            {`${post.author.username} posted on ${new Date(
              post.createdAt
            ).toLocaleDateString()}`}
          </p>

          {post.author._id === user._id && (
            <div className="post-controls">
              <Link to={`/posts/${postId}/edit`} className="edit-button">
                Edit
              </Link>
              <button
                className="delete-button"
                onClick={() => props.handleDeletePost(postId)}
              >
                Delete Post
              </button>
            </div>
          )}
        </section>

        <section className="post comments-section">
          <h2 className="post-title">Comments</h2>
          <CommentForm handleAddComment={handleAddComment} />

          {!post.comments.length && (
            <p className="post-text">There are no comments.</p>
          )}

          {post.comments.map((comment) => (
            <article key={comment._id} className="post">
              <header className="post-header">
                <img
                  className="avatar"
                  src={`/images/avatars/${comment.author.avatar}`}
                  alt={`${comment.author.username}'s avatar`}
                />
                <div className="author-info">
                  <p className="author-name">
                    {`${comment.author.firstname} ${comment.author.lastname}`}
                  </p>
                  <p className="author-title">Nurse</p>
                </div>
              </header>
              <p className="post-date">
                {`${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
              <p className="post-text">{comment.text}</p>
              {post.author._id === user._id && (
                <div className="post-controls">
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteComment(comment._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </article>
          ))}
        </section>
      </main>
      <NavBar />
    </>
  );
};

export default CommunityDetails;
