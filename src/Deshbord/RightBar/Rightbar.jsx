/** @format */

import React from "react";
import Navbar from "../Navbar/Navbar";
import Chart1 from "./Chart1";
import "./Rightbar.css";

const Rightbar = () => {
	return (
		<div className='Rightbar-main'>
			<Navbar />
			<h1>this right bar</h1>
			<div>
				<Chart1 />
			</div>
		</div>
	);
};

export default Rightbar;
