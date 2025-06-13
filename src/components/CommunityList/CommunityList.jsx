import { Link } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";
import NavTabs from "../NavTabs/NavTabs.jsx";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./CommunityList.css";

const Community = (props) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <TopNavBar />

      <main className="community-page">
        <NavTabs />

        <Link to="/community/new" className="join-discussion">
          Join Discussion
        </Link>

        <div className="posts-container">
          {props.posts.map((post) => (
            <Link
              key={post._id}
              to={`/posts/${post._id}`}
              className="post-link"
            >
              <article className="post">
                <div className="post-header">
                  <img
                    className="avatar"
                    src={`/images/avatars/${user.avatar}`}
                    alt="User Avatar"
                  />
                  <div className="author-info">
                    <p className="author-name">{`${post.author.firstname} ${post.author.lastname}`}</p>
                    <p className="author-title">Aspiring Nurse</p>
                  </div>
                </div>

                <h2 className="post-title">{post.title}</h2>

                <p className="post-text">{post.text}</p>

                <div className="post-stats">
                  <span>5 likes</span>
                  <span>3 comments</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <NavBar />
      </main>
    </>
  );
};

export default Community;
