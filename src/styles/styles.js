import loginStyles from "./login";
export function flex(justify, align, direction = "row") {
	return {
		display: "flex",
		alignItems: align,
		justifyContent: justify,
		flexDirection: direction,
	};
}

const styles = {
	container: {
		width: "100%",
		minHeight: "auto",
		backgroundColor: "red",
	},
	...loginStyles,
};

export default styles;
