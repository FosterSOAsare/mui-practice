import React from "react";
import styles from "../../styles/styles";
import FormField from "./FormField";
import { Box, Grid, Typography, Checkbox, FormControlLabel, Button } from "@mui/material";
import { useState } from "react";
import { flex } from "../../styles/styles";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
	const [formData, setFormData] = useState({});

	function handleChange(e) {
		setFormData((prev) => {
			return { ...prev, [e.target.id]: e.target.value };
		});
	}
	return (
		<Box sx={{ ...styles.container }}>
			<Grid container sx={{ alignSelf: "center", width: "100%", height: "100%" }}>
				<Grid item xs={6} sx={styles.login__left__section}>
					<Box
						sx={{
							width: "60%",
							marginInline: "auto",
						}}>
						<Typography variant="p" component="h3" sx={{ marginBottom: "10px", fontSize: "22px" }}>
							Welcome back
						</Typography>
						<Typography variant="p" component="p" sx={{ display: "block", marginBottom: "20px", opacity: "0.8", fontSize: "14px" }}>
							Welcome back! Please enter your details
						</Typography>
						<FormField type="text" data={formData?.email || ""} handleChange={handleChange} label="Email" placeholder="Enter your email" id="email" />
						<FormField type="password" data={formData?.password || ""} handleChange={handleChange} label="Password" placeholder="........" id="password" />

						<Box sx={{ ...flex("space-between", "center"), marginBottom: "10px", marginTop: "-10px" }}>
							<FormControlLabel
								control={
									<Checkbox
										size="small"
										sx={{
											"&.Mui-checked": {
												color: "#6440BB",
											},
										}}
									/>
								}
								label="Remember me for 30 days"
								componentsProps={{
									typography: {
										style: { fontSize: "12px" },
									},
								}}
							/>
							<Typography variant="p" sx={styles.forgotPassword}>
								Forgot password?
							</Typography>
						</Box>
						<Button
							variant="contained"
							sx={{
								...styles.login__cta,
								backgroundColor: "#6440bb",
								"&:hover": {
									backgroundColor: "#6440bb",
								},
							}}>
							Sign in
						</Button>
						<Button variant="outlined" startIcon={<GoogleIcon />} sx={{ ...styles.login__cta, borderColor: "#A0A4AD", color: "#A0A4AD" }}>
							Sign in with Google
						</Button>

						<Typography variant="p" sx={{ fontSize: "13px", textAlign: "center" }} component="p">
							Don't have an account?
							<Typography variant="span" sx={{ color: "#6440BB", marginLeft: "4px", fontWeight: "bold" }} component="span">
								Sign up
							</Typography>
						</Typography>
					</Box>
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
