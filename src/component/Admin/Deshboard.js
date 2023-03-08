import React from 'react'
import './Deshboard.css'
import rightArrow from "../../assite/images/right-arrow3.png";
import { Link } from 'react-router-dom';


const Deshboard = () => {
  return (
    <div className='deshboard-main'>
        <h1>Deshboard</h1>
        <div className='policy-main-card-box'>
        <div className='policy-main-card'>
					<p>Add New Policy</p>
					<button >
                        
                    <Link to={'/addpolicy'}>Ok</Link>
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>
                <div className='policy-main-card'>
					<p>Update Policy</p>
					<button >
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>
                <div className='policy-main-card'>
					<p>Delete Policy</p>
					<button >
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>
                {/* add new user */}
                <div className='policy-main-card'>
					<p>Add New User</p>
					<button >
                    <Link to={'/sighup'}>Ok</Link>
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>
                <div className='policy-main-card'>
					<p>Update User</p>
					<button >
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>
                <div className='policy-main-card'>
					<p>Delete User</p>
					<button >
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>
                </div>
    </div>
  )
}

export default Deshboard