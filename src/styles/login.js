import { flex } from "./styles";

const loginStyles = {
	login__left__section: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		height: "100vh",
		display: "flex",
		...flex("center", "center"),
	},
	login__right__section: {
		backgroundColor: "#F3F5F9",
		width: "100%",
		height: "100vh",

		...flex("center", "center", "column"),
	},
	half__circle: {
		width: 200,
		height: 200,
		backgroundColor: "#6440BB",
		clipPath: "circle(50% at 50% 0)",
	},
	top__half__circle: {
		backgroundColor: "#6440BB",
		transform: "rotate(180deg)",
	},
	forgotPassword: {
		fontSize: "12px",
		color: "#6440BB",
		fontWeight: "bold",
		"&:hover": {
			cursor: "pointer",
			textDecoration: "underline",
		},
	},

	login__cta: {
		width: "100%",
		height: "40px",
		marginBottom: "20px",
		textTransform: "none",
		fontWeight: "bold",
	},
};

export default loginStyles;
