import React, { useState } from "react"
import createAxiosInstance from '../../helpers/connection/createAxiosInstance';

import "./Login.css"
import { AdjustmentsHorizontalIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
// import Img from "../assets/img/img1.jpg"
import Img from '../../assets/img/img1.jpg'
import { Link, useNavigate } from "react-router-dom"
import  Axios  from "axios"

// interface LoginResponse {
// 	token: string;
//   }
  const axiosInstance = createAxiosInstance();

export default function Login() {
	const [visibility, setVisibility] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
  
	const passwordToggle = () => setVisibility((prevVisibility) => !prevVisibility);

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		setLoading(true);
		setError(null);
	  
		try {
			
			
			const response = await axiosInstance.post('/login', {
				email,
				password,
			  });
	  
			const token = response.data.token;
			localStorage.setItem("token", token);
	  
			navigate("/dashboard");
		  } catch (error) {
			console.log(error)
			setError("Invalid email or password");
		  } finally {
			setLoading(false);
		  }
		};
	  
		return (
			<section className="w-full grid relative md:p-20 xs:p-5 text-white">
			  <div className="grid gap-4  m-auto md:grid-cols-2 xs:grid-cols-1">
				<div className="">
				  <form onSubmit={handleSubmit} className="bg-blue min-h-[50vh] md:p-10 xs:p-7 md:rounded-[2.5rem] xs:rounded-[1.5rem]">
					<div className="">
					  <h3 className="flex flex-row items-center text-slate-500">
						<AdjustmentsHorizontalIcon width={24} height={24} className="mr-1" /> Template
					  </h3>
		
					  <h1 className="mt-8 text-3xl text-slate-300">Login</h1>
					  <p className="text-slate-500 mt-4">Welcome back! Please enter your details.</p>
					</div>
		
					<div className="oti_input-group my-10 text text-white">
					  <label htmlFor="email">Phone number or Email address*</label>
					  <input
						type="text"
						className="rounded-md h-[50px] bg-slate-300 p-3 block w-full my-3 text-slate-900"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					  />
					</div>
		
					<div className="oti_input-group my-10 relative text-white">
					  <label htmlFor="password">Password*</label>
					  <div className="relative">
						<input
						  type={visibility ? "text" : "password"}
						  className="rounded-md h-[50px] bg-slate-300 p-3 block w-full my-3 text-slate-900"
						  value={password}
						  onChange={(e) => setPassword(e.target.value)}
						/>
						{visibility ? (
						  <EyeSlashIcon onClick={passwordToggle} width={24} height={24} className="absolute text-slate-900 top-3 right-5 cursor-pointer" />
						) : (
						  <EyeIcon onClick={passwordToggle} width={24} height={24} className="absolute text-slate-900 top-3 right-5 cursor-pointer" />
						)}
					  </div>
					</div>
		
					<div className="oti_input-group my-10">
					  <div className="flex gap-8 md:flex-row xs:flex-col xs:justify-center xs:items-center md:justify-between md:items-start">
						<div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
						  <input
							className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
							type="checkbox"
							value=""
							id="checkboxDefault"
						  />
						  <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="checkboxDefault">
							Remember me
						  </label>
						</div>
						<div className="">
						  <Link to={"#forgot-password"} className="text-slate-400">
							Forgot Password?
						  </Link>
						</div>
					  </div>
					</div>
		
					<div className="oti_input-group my-10">
					  <button
						className="rounded-md border-2 border-slate-400 w-full text-center text-md"
						type="submit"
						disabled={loading}
					  >
						{loading ? "Logging in..." : "Login"}
					  </button>
					</div>
		
					{error && <p className="text-red-500">{error}</p>}
				  </form>
				</div>
				<div className="md:block xs:hidden">
				  <img src={Img} alt="Logo" className="rounded-lg block m-auto " />
				</div>
			  </div>
			</section>
		  );
}
