import React from "react";
import Layout from "../../components/layout/Layout";
import NavHeader from "../../components/layout/NavHeader";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import HouseNav from "./HouseNav";
import { Bars3Icon, CloudArrowDownIcon, MapPinIcon, PlusIcon } from "@heroicons/react/24/solid"

const SanitationList = () => {
  const navigate = useNavigate();

  const handleNavigateToAddHouse = () => {
    navigate("/addhouse");
  };
    const NavigateSanitation = () => {
      navigate('/addsanitation')
  }
  const handleGoBack = () => {
    navigate(-1); // Navigates back one step in the history
  };

  return (
      <Layout>
        	<div className="flex gap-8 w-full md:justify-between md:items-center md:flex-row xs:flex-col">
			<div className="flex items-center gap-8">
				<Bars3Icon width={34} height={34} className="cursor-pointer md:hidden xs:inline" />
				<h1 className="text-2xl font-bold p-3 text-blue">Welcome back! Aisha</h1>
			</div>
			<div className="flex items-center gap-3 text-blue">
				<MapPinIcon width={24} height={24} /> <span className="underline">Kubwa, Abuja</span>
			</div>

			<div className="flex gap-4 justify-between xs:flex-col md:flex-row ">
				<button className="rounded-1xl text-sm border-2 border-gray-300 flex items-center gap-3 text-slate-400 focus:outline-none" type="button">
					<CloudArrowDownIcon width={24} height={24} /> Export Report
				</button>

			    <button
        className="rounded-1xl text-sm bg-blue text-slate-200 focus:outline-none"
        type="button"
      
      >
        <Link to='/addsanitation'  className="flex items-center gap-3 text-slate-100 hover:text-slate-100">
       
          <PlusIcon width={24} height={24} /> Add Sanitaion
        </Link>
      </button>
    
    			  
       


			</div>
		</div>
      <div className="p-3 my-8 overflow-hidden">
        <head className="grid lg:grid-cols-3 gap-4 mb-5">
          <div className="">
            <button
              onClick={handleGoBack}
              className="flex gap-2 text-slate-800"
            >
              <ArrowLeftIcon className="0" width={24} height={24} />{" "}
              <span>Back</span>
            </button>
          </div>

          <div className="col-span-2 justify-center ">
            <h1 className="text-2xl font-bold text-blue  ">Sanitation Details</h1>
          </div>

                  
        </head>
        <h2 className="font-bold text-2xl">Sanitation List</h2>
        <p className="text-slate-500 font-normal">
          Here is a list of sanitation
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center text-sm font-light mt-8 overflow-x-auto table-auto">
            <thead className="font-medium bg-blue text-slate-100 ">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  Week
                </th>
                <th scope="col" className="px-6 py-4">
                  Month
                </th>
                <th scope="col" className="px-6 py-4">
                  Year
                </th>
                <th scope="col" className="px-6 py-4">
                Aggregate
                </th>

                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">first</td>
                <td className="whitespace-nowrap px-6 py-4">january</td>
                <td className="whitespace-nowrap px-6 py-4">2024</td>
                <td className="whitespace-nowrap px-6 py-4">B</td>

                <td className="whitespace-nowrap px-6 py-4">
                  <Link to="/viewsanitation">
                    <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">
                      View sanitation
                    </button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4"> second</td>

                <td className="whitespace-nowrap px-6 py-4">
                  febuary
                </td>
                <td className="whitespace-nowrap px-6 py-4">8</td>
                <td className="whitespace-nowrap px-6 py-4">A</td>

                <td className="whitespace-nowrap px-6 py-4">
                  <Link to="/viewsanitation">
                    <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">
                      View sanitation
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default SanitationList;
