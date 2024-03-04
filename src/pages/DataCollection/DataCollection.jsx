import Layout from "../../components/layout/Layout"
import ContentContainer from "../../components/misc/ContentContainer"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import React, { useState , ChangeEvent} from "react"
import { Link, useNavigate } from "react-router-dom"

export default function DataCollection() {
	const navigate =  useNavigate();

	const [selectedState, setSelectedState] = useState('');
const [selectedLGA, setSelectedLGA] = useState('');
	const router = useNavigate()
	const handleSubmit = (e) => {
		e?.preventDefault();
		router("/employment-info");
	};
	const handleGoBack = () => {
        navigate(-1); // Navigates back one step in the history
      };

	  const nigeriaStates = [
		'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
		'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Federal Capital Territory)', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
		'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
		'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
	  ];
	    // Replace this with a map of states to their respective LGAs
  // Replace this with a map of states to their respective LGAs
  const nigeriaLGAs = {
	'Lagos': ['Ikeja', 'Eti-Osa', 'Surulere', 'Alimosho', '...'],
	'Abia': ['Aba North', 'Aba South', 'Umuahia', 'Isiala Ngwa North', '...'],
	// Add LGAs for other states
  };
  

  const handleStateChange = (event) => {
	const newState = event.target.value;
	setSelectedState(newState);
	setSelectedLGA(''); // Reset selected LGA when the state changes
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
							<h1 className="text-2xl font-bold text-blue">Personal  Information</h1>
						</div>
					</head>

					<section className="">
						<form onSubmit={handleSubmit} action="/perosnal-info" className="">
							<div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
								<div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										First Name *
									</label>
									
									<input required className="p-3 rounded bg-slate-200 block w-full"  type="text" name="firstname"/>
								</div>
								<div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										Last Name * 
									</label>
									
									<input required className="p-3 rounded bg-slate-200 block w-full"  type="text" name="lastname"/>
								</div>
								<div className="">
									<label className="mb-3 block">Date of Birth*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="date" />
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
									<label className="mb-3 block">Email Address*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="email" />
								</div>
								<div className="">
									<label className="mb-3 block">Phone Number*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="tel" />
								</div>
								<div className="">
									<label className="mb-3 block">Marital Status*</label>
									<select required className="p-3 rounded bg-slate-300 block w-full">
										<optgroup>
											<option value={"single"}>Single</option>
											<option value={"married"}>Married</option>
										</optgroup>
									</select>
								</div>

								<div className="">
									<label className="mb-3 block">Mode Of Entry *</label>
									<select required className="p-3 rounded bg-slate-300 block w-full">
										<optgroup>
											<option value={"birth"}>Birth</option>
											<option value={"adoption"}>Adoption</option>
											<option value={"marriage"}>Marriage</option>
										</optgroup>
									</select>
								</div>
								<div className="">
									<label className="mb-3 block">Nationality*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="text" />
								</div>
								<div className="">
									<label className="mb-3 block">Current Address*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="text" placeholder="Enter the house number and street name" />
								</div>
								<div className="">
									<label className="mb-3 block">Country*</label>
									<select required className="p-3 rounded bg-slate-300 block w-full">
										<optgroup>
											<option value={"Nigeria"}>Nigeria</option>
										</optgroup>
									</select>
								</div>
								
								<div className="">
									<label className="mb-3 block">State*</label>
									<select
									required
									className="p-3 rounded bg-slate-300 block w-full"
									onChange={handleStateChange}
									value={selectedState}
									>
									<option value="" disabled>Select a State</option>
									{nigeriaStates.map((state, index) => (
										<option key={index} value={state}>{state}</option>
									))}
									</select>
								</div>

      <div className="">
        <label className="mb-3 block">LGA*</label>
        <select
          required
          className="p-3 rounded bg-slate-300 block w-full"
          value={selectedLGA}
          onChange={(e) => setSelectedLGA(e.target.value)}
        >
          <option value="" disabled>Select an LGA</option>
          {nigeriaLGAs[selectedState] &&
            nigeriaLGAs[selectedState].map((lga, index) => (
              <option key={index} value={lga}>{lga}</option>
            ))}
        </select>
      </div>
	  <div className="">
									<label className="mb-3 block">Ward*</label>
									<input required className="p-3 rounded bg-slate-300 block w-full" type="text" placeholder="Enter the house number and street name" />
								</div>
								<div className="">
									<label htmlFor="employeeStatus" className="mb-3 block">
										Select Subward*
									</label>
									<select required className="p-3 rounded bg-slate-200 block w-full">
										<optgroup>
											<option value={"wardI"}>Ward 1</option>
											<option value={"ward2"}>Ward 2</option>
											<option value={"ward3"}>Ward 3</option>
										</optgroup>
									</select>
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
