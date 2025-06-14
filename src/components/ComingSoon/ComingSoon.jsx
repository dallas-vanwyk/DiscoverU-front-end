// ComingSoon.jsx

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import NavBar from "../NavBar/NavBar.jsx";

const ComingSoon = () => {
	const { user } = useContext(UserContext);

	return (
		<div style={styles.container}>
			{user?.avatar && (
				<img
					src={`/images/avatars/${user.avatar}`}
					alt={`${user.username} avatar`}
					style={styles.avatar}
				/>
			)}
			<h2 style={styles.message}>This page is still under construction 🚧</h2>
			<p style={styles.message}>
				Hey {user?.username}, we're still working on this page. Thanks for your
				patience!
			</p>
			<NavBar />
		</div>
	);
};

const styles = {
	container: {
		textAlign: "center",
		margin: 0,
		color: "#fff",
		background: "var(--pbg-grad)",
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		background: "var(--pbg-grad)",
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: "50%",
		objectFit: "cover",
		marginBottom: "1rem",
		border: "3px solid #007bff",
	},
	message: {
		fontSize: "1.8rem",
		marginBottom: "0.5rem",
	},
};

export default ComingSoon;
