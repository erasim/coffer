/** @format */

import React from "react";
import "./Leftsidebar.css";
import khan from "../../assite/images/khan.jpg";
import Ellipse1 from "../../Images/Ellipse1.png";
import icon1 from "../../Images/icon1.png";
import icon2 from "../../Images/icon2.png";
import icon3 from "../../Images/icon3.png";
import icon4 from "../../Images/icon4.svg";
import profile from "../../Images/profile.png";
import icon5 from "../../Images/plus-circle.svg";



const Leftsidebar = () => {
	return (
		<div className='Leftsidebar-main'>
			
			{/* Copmpass */}
			<div className='Leftsidebar-icon-top-box'>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
					<img src={Ellipse1} alt='Ellipse1' />
					<img src={icon1} alt='Ellipse1' className="internal-img"/>
					</div>
				</div>
				<br />
				{/* star  */}
				<div className='Leftsidebar-icon-box'>
				<div className='Leftsidebar-icon-top-circle-top'>
					<img src={Ellipse1} alt='Ellipse1' />
					<img src={icon2} alt='Ellipse1' className="internal-img"/>
					</div>
				</div>
				<br />
				{/* Graphup arrow */}
				<div className='Leftsidebar-icon-box'>
				<div className='Leftsidebar-icon-top-circle-top'>
					<img src={Ellipse1} alt='Ellipse1' />
					<img src={icon3} alt='Ellipse1' className="internal-img"/>
					</div>
				</div>
				<br />
				{/* Globe */}
				<div className='Leftsidebar-icon-box'>
				<div className='Leftsidebar-icon-top-circle-top'>
					<img src={Ellipse1} alt='Ellipse1' />
					<img src={icon4} alt='Ellipse1' className="internal-img"/>
					</div>
				</div>
				<br />
				{/* Building */}
				<div className='Leftsidebar-icon-box'>
				<div className='Leftsidebar-icon-top-circle-top'>
					<img src={Ellipse1} alt='Ellipse1' />
					<img src={icon1} alt='Ellipse1' className="internal-img"/>
					</div>
				</div>
			</div>
			<div className='Leftsidebar-icon-bottom-box'>
			<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
					<img src={Ellipse1} alt='Ellipse1'  style={{margin:-19}}/>

					
					<img src={icon5} alt='Ellipse1' style={{marginTop:-70}} />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
					{/* <img src={Ellipse1} alt='Ellipse1' /> */}
					<img src={profile} alt='Ellipse1' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
						<img src={profile} alt='khan' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
					<img src={profile} alt='khan' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
					<img src={profile} alt='khan' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
					<img src={profile} alt='khan' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Leftsidebar;
