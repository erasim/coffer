/** @format */

import React from "react";
import chart2 from "./chart2";
import chartList from "./chartList";

const Rightbar = () => {
	return (
		<div style={{ textAlign: "center", marginTop: 20 }}>
			<h1>Rightbar</h1>
			<div>
				<chartList />
			</div>
		</div>
	);
};

export default Rightbar;
