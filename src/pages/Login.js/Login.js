import React from "react";
import styles from "../../styles/styles";
import { Box, Grid } from "@mui/material";

const Login = () => {
	return (
		<Box sx={{ ...styles.container }}>
			<Grid container sx={{ alignSelf: "center", width: "100%", height: "100%" }}>
				<Grid item xs={6} sx={styles.login__left__section}>
					Dead
				</Grid>

				<Grid item xs={6} sx={styles.login__right__section}>
					<Box sx={{ ...styles.half__circle, ...styles.top__half__circle }}></Box>
					<Box sx={{ width: "100%", height: "auto", backgroundColor: "transparent", display: "flex", justifyContent: "center", filter: "blur(10px)" }}>
						<Box sx={{ ...styles.half__circle, ...styles.bottom__half__circle }}></Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Login;
