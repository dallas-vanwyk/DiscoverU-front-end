import { useNavigate } from "react-router";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";

const Community = (props) => {
  return (
    <>
      <main>
        {/* <TopNavBar /> */}
        <div>
          <ul>
            <li>
              <Link to="/community">Posts</Link>
            </li>
            <li>
              <Link to="/network">My Network</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
          </ul>
        </div>
        <Link to="/community/new">Join Discussion</Link>
        <div>
          {props.posts.map((post) => (
            <Link key={post._id} to={`/posts/${post._id}`}>
              <article>
                <header>
                  <h2>{post.title}</h2>
                  <p>
                    {`${post.author.username} posted on
                ${new Date(post.createdAt).toLocaleDateString()}`}
                  </p>
                </header>
                <p>{post.text}</p>
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
