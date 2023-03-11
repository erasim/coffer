/** @format */
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { BarChart } from "./barchat";
import { useSelector, useDispatch } from "react-redux";
import "./Rightbar.css";
import { fetchAllcofferData } from "../../component/state/questions";

const chartList = () => {
	const dataList = useSelector((state) => state?.cofferReducer?.data ?? []);
	const data = [];
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllcofferData());
	}, []);

	dataList.forEach((el) => {
		if (el.country) {
			const findindex = data.findIndex((el1) => el1.country === el.country);
			if (findindex === -1) {
				data.push({ country: el.country, frequency: 1 });
			} else {
				const oldData = data[findindex];
				data[findindex] = { ...oldData, frequency: oldData.frequency + 1 };
			}
		}
	});
	return (
		<div className='Rightbar-main'>
			<Navbar />
			<h1>barchart</h1>
			<div>
				<Barchat data={data} />
			</div>
		</div>
	);
};

export default chartList;
