import React from "react";
import { Typography, TextField } from "@mui/material";

const FormField = ({ label, placeholder, id, handleChange, type, data }) => {
	return (
		<>
			{label && (
				<Typography variant="p" component="p" sx={{ fontSize: "12px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>
					{label}
				</Typography>
			)}
			<TextField
				id={id}
				value={data}
				onChange={(e) => handleChange(e)}
				placeholder={placeholder}
				type={type}
				sx={{
					marginBottom: "20px",
					width: "100%",
				}}
				inputProps={{
					style: {
						height: "40px",
						marginLeft: "-10px",
						padding: "0 20px",
						fontWeight: "bold",
						fontSize: "13px",
						borderRadius: "0px",
					},
				}}
			/>
		</>
	);
};

export default FormField;
