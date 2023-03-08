/** @format */

import React from "react";
import "./Rightsidebar.css";
import pic from "../../assite/images/city-4.jpg";
import chart1 from "../../Images/chart1.png";
import chart2 from "../../Images/chart2.png";
import chart3 from "../../Images/chart3.png";
import chart4 from "../../Images/chart4.png";
import chart5 from "../../Images/chart5.png";
import chart6 from "../../Images/chart6.png";

const Rightsidebar = () => {
	return (
		<div className='Rightsidebar-main'>
			<div className='Rightsidebar-group-box'>
				<div className='Rightsidebar-charts'>
					<div className='Rightsidebar-chart-box-title'>
						<p>Total Sell</p>
						<span>$281.90</span>
					</div>
					<div className='Rightsidebar-chart-box-chart'>
						<img src={chart1} alt='chart' />
						<img src={chart2} alt='chart' className='chart1-line' />
					</div>
				</div>
				<div className='Rightsidebar-title'>
					<div className='Rightsidebar-chart-box-title'>
						<p>6 Total order</p>
					</div>
					<div className='Rightsidebar-chart-box-chart'>
						<p>viewreport</p>
					</div>
				</div>
			</div>

			{/* @nd charts */}
			<div className='Rightsidebar-group-box'>
				<div className='Rightsidebar-charts'>
					<div className='Rightsidebar-chart-box-title'>
						<p>Total sessions</p>
						<span>456</span>
					</div>
					<div className='Rightsidebar-chart-box-chart'>
						<img src={chart3} alt='chart' />
						<img src={chart4} alt='chart' className='chart1-line' />
					</div>
				</div>
				<div className='Rightsidebar-title2'>
					<div className='Rightsidebar-chart-box-title2'>
						<p>Live</p>
					</div>
					<div className='Rightsidebar-chart-box-title2'>
						<p>visiter</p>
					</div>
					<div className='Rightsidebar-chart-box-title2'>
						<p>see live view</p>
					</div>
				</div>
			</div>

			{/* 3Rd chart */}
			<div className='Rightsidebar-group-box'>
				<div className='Rightsidebar-charts'>
					<div className='Rightsidebar-chart-box-title'>
						<p>Total Sell</p>
						<span>4.43%</span>
					</div>
					<div className='Rightsidebar-chart-box-chart'>
						<img src={chart5} alt='chart5' />
						<img src={chart6} alt='chart6' className='chart2-line' />
					</div>
				</div>
				<div className='Rightsidebar-title'>
					<div className='Rightsidebar-chart-box-title'>
						<p>6 Total order</p>
					</div>
					<div className='Rightsidebar-chart-box-chart'>
						<p>viewreport</p>
					</div>
				</div>
			</div>
			{/* 4 action order */}
			<div className='Rightsidebar-group-box'>
				<div className='Rightsidebar-action-order-nav'>
					<div className='Rightsidebar-action-order-nav-menu'>Action</div>
					<div className='Rightsidebar-action-order-nav-menu'>Order</div>
					<div className='Rightsidebar-action-order-nav-menu'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-three-dots-vertical'
							viewBox='0 0 16 16'>
							<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
						</svg>
					</div>
				</div>
				<div className='Rightsidebar-action-order-table'>
					<div className='Rightsidebar-action-order-index1'>
						<p>11:30</p>
					</div>
					<div className='Rightsidebar-action-order-index2'>
						<p>new catagery added</p> <p>Moble phone</p>
					</div>
				</div>

				<div className='Rightsidebar-action-order-table'>
					<div className='Rightsidebar-action-order-index1'>
						<p>11:30</p>
					</div>
					<div className='Rightsidebar-action-order-index2'>
						<p>new catagery added</p> <p>Moble phone</p>
					</div>
				</div>

				<div className='Rightsidebar-action-order-table'>
					<div className='Rightsidebar-action-order-index1'>
						<p>11:30</p>
					</div>
					<div className='Rightsidebar-action-order-index2'>
						<p>new catagery added</p> <p>Moble phone</p>
					</div>
				</div>

				<div className='Rightsidebar-action-order-table'>
					<div className='Rightsidebar-action-order-index1'>
						<p>11:30</p>
					</div>
					<div className='Rightsidebar-action-order-index2'>
						<p>new catagery added</p> <p>Moble phone</p>
					</div>
				</div>

				<div className='Rightsidebar-action-order-table'>
					<div className='Rightsidebar-action-order-index1'>
						<p>11:30</p>
					</div>
					<div className='Rightsidebar-action-order-index2'>
						<p>new catagery added</p> <p>Moble phone</p>
					</div>
				</div>

				<div className='Rightsidebar-action-order-table'>
					<div className='Rightsidebar-action-order-index1'>
						<p>11:30</p>
					</div>
					<div className='Rightsidebar-action-order-index2'>
						<p>new catagery added</p> <p>Moble phone</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rightsidebar;
