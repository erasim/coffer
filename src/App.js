/** @format */

import React from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/login/Navbar";
import Routing from "./component/Routing";
import './component/login/login.css'

export default function App() {
	return (
		<div className="App">
<BrowserRouter>
			<Navbar />
			<Routing />
		</BrowserRouter>
		</div>
		
	);
}
