import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";
import "./ComingSoon.css";

const ComingSoon = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="comingsoon-container">
			<TopNavBar/>
			{user?.avatar && (
				<img
					src={`/images/avatars/${user.avatar}`}
					alt={`${user.username} avatar`}
					className="comingsoon-avatar"
				/>
			)}
			<h2 className="comingsoon-message">This page is still under construction 🚧</h2>
			<p className="comingsoon-message">
				Hey {user?.username}, we're still working on this page. Thanks for your patience!
			</p>
			<NavBar />
		</div>
	);
};

export default ComingSoon;