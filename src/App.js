import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js/Login";
import Homepage from "./pages/Homepage";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</div>
	);
}

export default App;
