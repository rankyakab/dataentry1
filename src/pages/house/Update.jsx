
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../components/layout/Layout'
const Update = () => {
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
                  Malik's Details
                </h1>
              </div>
                </head>
                
                <div className="gap-y-6 grid xl:mx-12 xl:flex justify-between gap-x-[50px] w-[85%]  ">
                <Link to="/data-collection">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Personal</button>
                    </Link>
                    
                    <Link to="/employment-info">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Employment</button>
                    </Link>
                    <Link to="/educational-info">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Educational</button>
                    </Link>
                    <Link to="/medical-info">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Medical</button>
      </Link>
                </div>
                
      
            </div>
            </Layout>
  )
}

export default Update
