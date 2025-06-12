import { useNavigate } from "react-router";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";
import NavTabs from "../NavTabs/NavTabs.jsx";

const Community = (props) => {
  return (
    <>
      <TopNavBar />
      
      <main className="mainpage">
        <NavTabs />

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
