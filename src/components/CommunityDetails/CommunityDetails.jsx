import { useParams, Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as postService from "../../services/postService";
import CommentForm from "../CommentForm/CommentForm";

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
    <main>
      <section>
        <header>
          <h1>{post.title}</h1>
          <p>
            {`${post.author.username} posted on
            ${new Date(post.createdAt).toLocaleDateString()}`}
          </p>
          {/* Add the following */}
          {post.author._id === user._id && (
            <>
              <Link to={`/posts/${postId}/edit`}>Edit</Link>
              <button onClick={() => props.handleDeletePost(postId)}>
                Delete Post
              </button>
            </>
          )}
        </header>
        <p>{post.text}</p>
      </section>
      <section>
        <h2>Comments</h2>
        <CommentForm handleAddComment={handleAddComment} />

        {!post.comments.length && <p>There are no comments.</p>}

        {post.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {`${comment.author.username} posted on
        ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
              {post.author._id === user._id && (
                <>
                  <button onClick={() => handleDeleteComment(comment._id)}>
                    Delete
                  </button>
                </>
              )}
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CommunityDetails;
