import Layout from "../../components/layout/Layout"
import ContentContainer from "../../components/misc/ContentContainer"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function DependentInformation() {
	const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1); // Navigates back one step in the history
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
							<h1 className="text-2xl font-bold text-blue">Dependant Information</h1>
						</div>
					</head>

					<section className="">
						<form action="" className="" onSubmit={handleSubmit}>
							<div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
                            <div className="">
									<label className="mb-3 block">Relationship to Dependant*</label>
									<select required className="p-3 rounded bg-slate-300 block w-full">
										<optgroup>
											<option value={"father"}>Father </option>
											<option value={"mother"}>Mother</option>

											<option value={"brother"}>Brother</option>

											<option value={"sister"}>Sister</option>

											<option value={"spouse"}>Spouse</option>
										</optgroup>
									</select>
								</div>

								<div className="">
									<label className="mb-3 block">Dependent Fullname*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full"  placeholder="Enter Dependant Full Name"/>
								</div>
                                <div className="">
									<label className="mb-3 block">Date of Birth*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="date" />
								</div>

								<div className="">
									<label className="mb-3 block">Email Address*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="email" placeholder="example@example.com" />
								</div>

								

								<div className="">
									<label className="mb-3 block">Gender*</label>
									<select required className="p-3 rounded bg-slate-300 block w-full">
										<optgroup>
											<option value={"male"}>Male</option>
											<option value={"female"}>Female</option>
										</optgroup>
									</select>
								</div>

								

								<div className="">
									<label className="mb-3 block">Dependant Occupation*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="text" placeholder="Enter Dependant occupation"/>
								</div>
                                <div className="">
									<label className="mb-3 block">Phone Number*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="tel" />
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
