import Layout from "../../components/layout/Layout";
import ContentContainer from "../../components/misc/ContentContainer";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewTeam = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1); // Navigates back one step in the history
    };


    return (
        <Layout>
        <ContentContainer>
          <section className="my-5 grid grid-cols-1 gap-4">
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

              <div className="col-span-2">
                <h1 className="text-2xl font-bold text-blue">
                  Team Information
                </h1>
              </div>
                    </head>

                    <div className="mx-12 grid">
                        <h1 className="text-xl font-semibold text-blue">Team name:  Galaxy</h1>
                        <h1 className="text-xl font-semibold text-blue">Ward:  3</h1>
                        <h1 className="text-xl font-semibold text-blue">State:  Enugu</h1>
                        <h1 className="text-xl font-semibold text-blue">LGA:  Nsukka</h1>

                    
                    </div>

                    <div className="overflow-x-auto">
          <table className="min-w-full text-center text-sm font-light mt-8 overflow-x-auto table-auto">
            <thead className="font-medium bg-blue text-slate-100 ">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
           
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">John Oseni</td>
               
              </tr>

              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                    <td className="whitespace-nowrap px-6 py-4">Malik Segun</td>
                                    
               
              </tr>

              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td className="whitespace-nowrap px-6 py-4">Ali James</td>
                                    
               
                                </tr>
                                <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                    <td className="whitespace-nowrap px-6 py-4">Dayo Ola</td>
                                    
               
              </tr>
             
            </tbody>
          </table>
        </div>
                </section>
            </ContentContainer>
            </Layout>
    )
}

export default ViewTeam