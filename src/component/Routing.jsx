/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPolicy from "./Admin/AddPolicy";

import Sighup from "./Admin/Sighup";

import Shop from "./home/Shop";
import SignIn from "./login/SignIn";
import Products from "./Products/Products";


const Routing = () => {
	return (
		
		
		<Routes>
			<Route path='/sighup' element={<Sighup/>} />
			<Route path='/addpolicy' element={<AddPolicy/>} />
			<Route path='/*' element={<Shop/>} />
			<Route path='/auth' element={<SignIn />} />
			<Route path='/products' element={<Products />} />
			
			<Route path='/login' element={< SignIn/>} />
			<Route path='/login/hr' element={< SignIn/>} />
			<Route path='/login/Recruiter' element={< SignIn/>} />
			<Route path='/login/employee' element={< SignIn/>} />
		
		</Routes>
	
	);
};


export default Routing;
