/** @format */

import React from "react";
import "./LeftBar.css";
import Select from "react-select";
import circle from "../img/circle.svg";
import envelop from "../img/envelope-open.svg";
import calender from "../img/calendar2-minus.svg";
import email from "../img/envelope.svg";
import chat from "../img/chat-left-text.svg";

const LeftBar = () => {
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];
	const color = { backgroundColor: "blue" };
	const action = () => {};
	return (
		<div className='LeftBar-top'>
			<div className='left-logo'>
				<div className='logo-leftbar'>
					<svg
						width='34'
						height='24'
						viewBox='0 0 34 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M0.00183571 0.3125V7.59485C0.00183571 7.59485 -0.141502 9.88783 2.10473 11.8288L14.5469 23.6837L21.0172 23.6005L19.9794 10.8126L17.5261 7.93369L9.81536 0.3125H0.00183571Z'
							fill='currentColor'></path>
						<path
							opacity='0.06'
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.17969 17.7762L13.3027 3.75173L17.589 8.02192L8.17969 17.7762Z'
							fill='#161616'></path>
						<path
							opacity='0.06'
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.58203 17.2248L14.8129 5.24231L17.6211 8.05247L8.58203 17.2248Z'
							fill='#161616'></path>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.25781 17.6914L25.1339 0.3125H33.9991V7.62657C33.9991 7.62657 33.8144 10.0645 32.5743 11.3686L21.0179 23.6875H14.5487L8.25781 17.6914Z'
							fill='currentColor'></path>
					</svg>
					<span>Vuexy</span>{" "}
				</div>
				<img src={circle} alt='alt' />
			</div>

			<div className='Leftbar-dropdown-1'>
				<Select options={options} />
			</div>
			<div className='Leftbar-analtics'>
				<button className='Leftbar-analtics-botton' onClick={action}>
					<img src={circle} alt='alt' /> <span>Analytics</span>
				</button>
			</div>
			<div className='Leftbar-analtics'>
				<button className='Leftbar-analtics-botton'>
					<img src={circle} alt='alt' /> <span>eCommerce</span>
				</button>
			</div>
			<div className='Leftbar-analtics'>
				<button className='Leftbar-analtics-botton'>
					<img src={circle} alt='alt' /> <span>CRM</span>
				</button>
			</div>
			<p>Apps and pages</p>
			<div className='Leftbar-email'>
				<img src={email} alt='email' />
				<span>Email</span>
			</div>
			<div className='Leftbar-email'>
				<img src={chat} alt='chat' />
				<span>Chat</span>
			</div>
			<div className='Leftbar-email'>
				<img src={calender} alt='calender' />
				<span>Calender</span>
			</div>
		</div>
	);
};

export default LeftBar;
