import React from "react";
import Layout from "../../components/layout/Layout";
import NavHeader from "../../components/layout/NavHeader";
import { useNavigate, Link } from "react-router-dom";

const HouseList = () => {
  const navigate = useNavigate();

  const handleNavigateToAddHouse = () => {
    navigate("/addhouse");
  };

  return (
    <Layout>
      <NavHeader navigateToAddHouse={handleNavigateToAddHouse} />
      <div className="p-3 my-8 overflow-hidden">
        <h2 className="font-bold text-2xl">House List</h2>
        <p className="text-slate-500 font-normal">Here is a list of house</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center text-sm font-light mt-8 overflow-x-auto table-auto">
            <thead className="font-medium bg-blue text-slate-100 ">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  State
                </th>
                <th scope="col" className="px-6 py-4">
                  LGA
                </th>
                <th scope="col" className="px-6 py-4">
                  Ward
                </th>
                <th scope="col" className="px-6 py-4">
                  Sub-Ward
                </th>
                <th scope="col" className="px-6 py-4">
                  Street
                </th>

                <th scope="col" className="px-6 py-4">
                  House No.
                </th>
                <th scope="col" className="px-6 py-4">
                 Occupants
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Abuja</td>
                <td className="whitespace-nowrap px-6 py-4">galadimawa</td>
                <td className="whitespace-nowrap px-6 py-4">7</td>
                <td className="whitespace-nowrap px-6 py-4">13</td>
                <td className="whitespace-nowrap px-6 py-4">ladipo streetbb</td>
                 <td className="whitespace-nowrap px-6 py-4">12</td>
                 <td className="whitespace-nowrap px-6 py-4">4</td>
                 <td className="whitespace-nowrap px-6 py-4">
      <Link to="/housedetails">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">View Details</button>
      </Link>
    </td>     
              </tr>

              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4"> Ekiti</td>
                <td className="whitespace-nowrap px-6 py-4">mitaima</td>
                <td className="whitespace-nowrap px-6 py-4">12</td>
                <td className="whitespace-nowrap px-6 py-4">2</td>
                <td className="whitespace-nowrap px-6 py-4">
                  wole soyinka drive
                </td>
                <td className="whitespace-nowrap px-6 py-4">8</td>
                <td className="whitespace-nowrap px-6 py-4">6</td>
                <td className="whitespace-nowrap px-6 py-4">
      <Link to="/housedetails">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">View Details</button>
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

export default HouseList;
