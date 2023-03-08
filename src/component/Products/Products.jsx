/** @format */

import React from "react";
import "./Products.css";
import Shoes from "../../Images/product001.png";
import Design from "../../Images/Design.png";
import shadow from "../../Images/shadow.png";
import Mask from "../../Images/Mask group.png";

import product001 from "../../Images/product001.png";
import product014 from "../../Images/product014.png";
import product015 from "../../Images/product015.png";
import product016 from "../../Images/product016.png";
import Ellipse from "../../Images/Ellipse-10.png";
import Vector from "../../Images/Vector.png";

const Products = () => {
	return (
		<div className='products-details-main'>
			<div className='products-details-top'>
				<div className='products-details-top-left'>
					<h1>PURCHASE YOUR SHOES NOW</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi
						velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor
						ac.
					</p>
					<button className=''>Shop now</button>
					<img src={Mask} alt='img' />
					<div className='products-details-top-left-rating-box'>
						<div className='products-details-top-left-rating'>
							<span>
								4.3
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>
							</span>
						</div>
						<div className='rating-div'>
							<span>(11.6k total Review)</span>
						</div>
					</div>
				</div>
				<div className='products-details-top-right-box'>
					<div className='products-details-top-right'>
						<div className='products-details-top-right-img1'>
							<img src={Shoes} alt='img' className='img1' />
						</div>
						<div className='products-details-top-right-img2'>
							<img src={Design} alt='img' />
						</div>
						<div className='products-details-top-right-img3'>
							<img src={shadow} alt='img' />
						</div>
					</div>
					<div className='offer-div'>
						<p>Get upto 30% off</p>
						<span>You can get 30% off this Product</span>
						<br />
						<span>if you are buying now</span>
					</div>
				</div>
			</div>
			<div className='popular-products-main-box'>
				<h1>POPULAR PRODUCTS</h1>
				<div className='popular-products-main-card'>
					<div className='popular-products-main-card-item'>
						<div className='popular-products-main-card-item-img'>
							<img src={product001} alt='alt' />
						</div>
						<div className='check-box-item'>
							<img src={Ellipse} alt='alt' />
							<img src={Vector} alt='alt' style={{ margin: -25 }} />
						</div>
						<div className='popular-products-main-card-detail'>
							<p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>{" "}
								1.1k Review
							</p>
							<p>Nike Running Shoes</p>
							<div className='popular-products-main-card-item-price'>
								<p>$100</p>
								<p className='sold-out'>$200 Sold out</p>
								<p>
									<button>Buy Now</button>
								</p>
							</div>
						</div>
					</div>

					<div className='popular-products-main-card-item'>
						<div className='popular-products-main-card-item-img'>
							<img src={product014} alt='alt' />
						</div>
						<div className='check-box-item'>
							<img src={Ellipse} alt='alt' />
							<img src={Vector} alt='alt' style={{ margin: -25 }} />
						</div>
						<div className='popular-products-main-card-detail'>
							<p>
								{" "}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>
								(11.6k Reviews)
							</p>
							<p>Nike Running Shoes</p>
							<div className='popular-products-main-card-item-price'>
								<p>$100</p>
								<p className='sold-out'>$200 Sold out</p>{" "}
								<p>
									<button>Buy Now</button>
								</p>
							</div>
						</div>
					</div>

					<div className='popular-products-main-card-item'>
						<div className='popular-products-main-card-item-img'>
							<img src={product015} alt='alt' />
						</div>
						<div className='check-box-item'>
							<img src={Ellipse} alt='alt' />
							<img src={Vector} alt='alt' style={{ margin: -25 }} />
						</div>
						<div className='popular-products-main-card-detail'>
							<p>
								{" "}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>
								(11.6k Reviews)
							</p>
							<p>Nike Running Shoes</p>
							<div className='popular-products-main-card-item-price'>
								<p>$100</p>
								<p className='sold-out'>$200 Sold out</p>{" "}
								<p>
									<button>Buy Now</button>
								</p>
							</div>
						</div>
					</div>

					<div className='popular-products-main-card-item'>
						<div className='popular-products-main-card-item-img'>
							<img src={product016} alt='alt' />
						</div>
						<div className='check-box-item'>
							<img src={Ellipse} alt='alt' />
							<img src={Vector} alt='alt' style={{ margin: -25 }} />
						</div>
						<div className='popular-products-main-card-detail'>
							<p>
								{" "}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-star-fill'
									viewBox='0 0 16 16'>
									<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
								</svg>
								(11.6k Reviews)
							</p>
							<p>Nike Running Shoes</p>
							<div className='popular-products-main-card-item-price'>
								<p>$100</p>
								<p>$200 Sold out</p>{" "}
								<p>
									<button>Buy Now</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
