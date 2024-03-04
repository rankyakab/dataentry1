import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../components/layout/Layout'



// firstname
// lastname
// date_of birth
// gender
// email
// phone Number
// marital
// status
// nationality
// current addresss
// country
// state 
// lga 
// ward 
// select subward 

// employee status
// employee type 
// employee name 
// employee address 

// country🏓
//  nature_of business
//  business sector classification
//  highest educational qualifiocation


const MoreDetails = () => {
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
                  Person Details
                </h1>
              </div>
                </head>
              <div className="bg-white h-auto rounded-xl w-[80%] mx-auto ">
                  
                <div className="text-sm justify-center mt-4 p-4 ">
              <p className="flex  items-center pt-2">
                <strong className="mr-2">Firstname:</strong>
                <span className="mx-2">Frank </span>
              </p>
              <p className="flex items-center my-2">
                <strong className="mr-2">Lastname</strong>
                <span className="mx-2">tobi</span>
                                  </p>
                                  
                                  <p className="flex items-center my-2">
                <strong className="mr-2">Date of birth</strong>
                <span className="mx-2">21/05/94</span>
                                  </p>
                                  
                                  <p className="flex items-center my-2">
                <strong className="mr-2">Gender:</strong>
                                      <span className="mx-2">Male</span>
                                      
              </p>

              <p className="flex items-center my-2">
                <strong className="mr-2">email</strong>
                <span className="mx-2">zai@gmail.com</span>
                                  </p>
                                  <p className="flex items-center my-2">
                <strong className="mr-2">Phone Number</strong>
                <span className="mx-2">98992893</span>
              </p>        

              <p className="flex items-center my-2">
                <strong className="mr-2">Marital</strong>
                <span className="mx-2">Single</span>
                                  </p>
                                  
         
              {/* Add more fields as needed */}
            </div>
            </div>
      
          </div>
          </Layout>
  )
}

export default MoreDetails
