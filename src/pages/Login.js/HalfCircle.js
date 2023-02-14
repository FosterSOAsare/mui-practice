import React from "react";
import { Box } from "@mui/material";
import styles from "../../styles/styles";
const HalfCircle = () => {
	return (
		<>
			<Box sx={styles.login__right__circle}></Box>
			<Box sx={{ ...styles.login__circle__cover }}></Box>
		</>
	);
};

export default HalfCircle;
