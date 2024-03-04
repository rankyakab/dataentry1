// import Layout from "../../components/layout/Layout"
import Layout from '../../components/layout/Layout'
import ContentContainer from "../../components/misc/ContentContainer"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import React, { useState,ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function MedicalInformation() {
	const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1); // Navigates back one step in the history
      };
	  const [selectedState, setSelectedState] = useState('');
	  const [selectedLGA, setSelectedLGA] = useState('');
	
	  const nigeriaStates = [
		'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
		'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Federal Capital Territory)', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
		'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
		'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
	  ];
	
	  const handleStateChange = (event) => {
		const newState = event.target.value;
		setSelectedState(newState);
		setSelectedLGA(''); // Reset selected LGA when the state changes
	  };
	
	  const handleSubmit = (e) => {
		e?.preventDefault();
		navigate("/upload-data");
	  };
	return (
		<Layout>
			<ContentContainer>
				<section className="my-5 grid grid-cols-1 gap-4">
					<head className="grid lg:grid-cols-3 gap-4 mb-5">
						<div className="">
                        <button onClick={handleGoBack} className="flex gap-2 text-slate-800">
        <ArrowLeftIcon className="0" width={24} height={24} /> <span>Back</span>
      </button>
						</div>

						<div className="col-span-2">
							<h1 className="text-2xl font-bold text-blue">Medical Information</h1>
						</div>
					</head>

					<section className="">
						<form action="" className="" onSubmit={handleSubmit}>
						<div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4">


                                

								<div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										Any Medical Condition? *
									</label>
									<select required className="p-3 rounded bg-slate-200 block w-full">
										<optgroup>
											<option value={"yes"}>Yes</option>
											<option value={"no"}>No</option>
										</optgroup>
									</select>
								</div>
                                <div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										If Medical Condition *
									</label>
									<input required className="p-3 rounded bg-slate-200 block w-full" placeholder="Enter Condition Name"  />
								</div>

								<div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										Any Disability? *
									</label>
									<select required className="p-3 rounded bg-slate-200 block w-full">
										<optgroup>
											<option value={"yes"}>Yes</option>
											<option value={"no"}>No</option>
										</optgroup>
									</select>
								</div>
                                <div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										If yes, select the Disability option *
									</label>
									<select required className="p-3 rounded bg-slate-200 block w-full">
										<optgroup>

											<option value={""}>Select Option</option>
											<option value={"stroke"}>Stroke</option>
											<option value={"fatal"}>Fatal</option>

											<option value={"inbreed"}>Inbreed</option>
										</optgroup>
									</select>
								</div>
                                <div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										Select Source of Treatment *
									</label>
									<select required className="p-3 rounded bg-slate-200 block w-full">
										<optgroup>
											<option value={"hospitall"}>Hospital</option>
											<option value={"religious"}>Religious</option>
											<option value={"Native"}>Native</option>
										</optgroup>
									</select>
								</div>
                                <div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										Surgical History
									</label>
									<select required className="p-3 rounded bg-slate-200 block w-full">
										<optgroup>
											<option value={""}>Select</option>
											<option value={"none"}>No</option>
											<option value={"yes"}>Yes</option>
										</optgroup>
									</select>
								</div>
                                <div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
                                    If yes, Select type of Surgery *
									</label>
									<select required className="p-3 rounded bg-slate-200 block w-full">
										<optgroup>
											<option value={""}>Select</option>
											<option value={"major"}>Major Surgery</option>
											<option value={"mino"}>Minor</option>
										</optgroup>
									</select>
								</div>
                                <div className="">
									<label className="mb-3 block">Date of Sugery*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="date" />
								</div>

                               

								
                            </div>

							<div className="my-4 flex items-center justify-end">
								<button className="p-3 rounded bg-blue text-slate-100 text-center">Save & Continue</button>
							</div>
						</form>
					</section>
				</section>
			</ContentContainer>
		</Layout>
	)
}
