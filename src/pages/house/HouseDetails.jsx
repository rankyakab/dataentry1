
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../components/layout/Layout'


const HouseDetails = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1); // Navigates back one step in the history
    };
    return (
      <Layout>
            
    <div className="my-5 grid grid-cols-1 gap-4">
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
                <h1 className="text-2xl font-bold text-blue  ">
                  House Details
                </h1>
              </div>
                </head>
                
                <div className="flex justify-center gap-x-[130px] w-[85%]  ">
                <Link to="/data-collection">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Add Person</button>
                    </Link>
                    
                    <Link to="/sanitationlist">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Sanitation</button>
      </Link>
                </div>

                <section className="mt-12">
                <div className="overflow-x-auto">
                <table className="min-w-full text-center text-sm font-light mt-8 overflow-x-auto table-auto">
              <thead className="font-medium bg-blue text-slate-100 ">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Firstname
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Lastname
                  </th>
                  <th scope="col" className="px-6 py-4">
                    DOB
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Gender
                  </th>

                  <th scope="col" className="px-6 py-4">
                    phone
                  </th>
                  <th scope="col" className="px-6 py-4">
                    email
                  </th>

                  <th scope="col" className="px-6 py-4">
                    Marital Status
                  </th>

                  <th scope="col" className="px-6 py-4">
                    Nationality
                  </th>

                  <th scope="col" className="px-6 py-4">
                    current Adress
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
                    Sub Ward
                  </th>

                  <th scope="col" className="px-6 py-4">
                  Action
                    </th>
                    <th scope="col" className="px-6 py-4">
                  Update
                </th>
                  {/* <
                th scope="col" className="px-6 py-4">
                  Street
                </th>

                <th scope="col" className="px-6 py-4">
                  Number
                </th>
                 */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Essien </td>
                  <td className="whitespace-nowrap px-6 py-4">Mike</td>
                  <td className="whitespace-nowrap px-6 py-4">2/4/1964</td>
                  <td className="whitespace-nowrap px-6 py-4">Male</td>
                  <td className="whitespace-nowrap px-6 py-4">070993764</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    mike@gmail.com
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Married</td>
                  <td className="whitespace-nowrap px-6 py-4">Nigerian</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    3a pikassa rd lugbe
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">FCT</td>
                  <td className="whitespace-nowrap px-6 py-4">Kuje</td>
                  <td className="whitespace-nowrap px-6 py-4">7</td>
                    <td className="whitespace-nowrap px-6 py-4">1</td>
                    <td className="whitespace-nowrap px-6 py-4">
                  <Link to="/more">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">See More</button>
      </Link>
    </td>

    <td className="whitespace-nowrap px-6 py-4">
                  <Link to="/update">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Update</button>
      </Link>
    </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Ade </td>
                  <td className="whitespace-nowrap px-6 py-4">Balogun</td>
                  <td className="whitespace-nowrap px-6 py-4">2/4/1981</td>
                  <td className="whitespace-nowrap px-6 py-4">Female</td>
                  <td className="whitespace-nowrap px-6 py-4">0703393843</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    mike@gmail.com
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Married</td>
                  <td className="whitespace-nowrap px-6 py-4">Nigerian</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    3a pikassa rd lugbe
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">FCT</td>
                  <td className="whitespace-nowrap px-6 py-4">Kuje</td>
                  <td className="whitespace-nowrap px-6 py-4">7</td>
                    <td className="whitespace-nowrap px-6 py-4">1</td>
                    <td className="whitespace-nowrap px-6 py-4">
                  <Link to="/more">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">See More</button>
      </Link>
    </td>
    <td className="whitespace-nowrap px-6 py-4">
                  <Link to="/update">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Update</button>
      </Link>
    </td>
                </tr>
              </tbody>
            </table>
        </div>

                </section>
    </div>
    </Layout>

            )
}

export default HouseDetails





