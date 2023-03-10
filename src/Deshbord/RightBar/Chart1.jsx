/** @format */

import React, { useEffect } from "react";
import "./Chart1.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchAllcofferData } from "../../component/state/questions";

const Chart1 = () => {
	const dataList = useSelector((state) => state?.cofferReducer?.data ?? []);
	console.log("Action =>", dataList);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
		dispatch(fetchAllcofferData());
	}, []);
	return (
		<div className='policy-detais-rigth-box'>
			{dataList.map((e) => (
				// <ul className='policy-main-card' key={e.id}>
				// 	<li>{e.sector}</li>
				// 	<li>{e.country}</li>
				// </ul>
				<table className='table'>
					<tr key={e.id} className='sub-table'>
						<td>{e.added}</td>
						<td>{e.pestle}</td>
						<td>{e.country}</td>
					</tr>
				</table>
			))}
		</div>
	);
};

export default Chart1;
