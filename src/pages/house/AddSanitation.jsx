import React from "react";
import Layout from "../../components/layout/Layout";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const AddSanitation = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigates back one step in the history
  };
  const handleSubmit = (e) => {
    e?.preventDefault();
    navigate("/sanitationlist");
  };

  return (
    <div>
      <Layout>
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
              <h1 className="text-2xl font-bold text-blue">Add Sanitation</h1>
            </div>
          </head>

          <form>
            <div className="grid lg:grid-cols-1 xs:grid-cols-1 gap-4 mx-auto justify-center w-[80%]">
              <div class="mb-4 flex items-center justify-between ">
                <label class="block text-blue text-2xl font-bold mr-2">
                  General Environment
                </label>
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} class="flex items-center mr-3  ">
                    <input
                      type="radio"
                      id={`livingRoomRating${index + 1}`}
                      name="livingRoomRating"
                      value={index + 1}
                      class="mr-1"
                    />
                    <label
                      for={`livingRoomRating${index + 1}`}
                      class="text-blue text-sm"
                    >
                      {index + 1}
                    </label>
                  </div>
                ))}
              </div>

              {/* Repeat the above structure for other items */}


              <div class="mb-4 flex items-center justify-between">
                <label class="block text-blue text-2xl font-bold mr-2">
                  Drainage
                </label>
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} class="flex items-center mr-2">
                    <input
                      type="radio"
                      id={`drainageRating${index + 1}`}
                      name="drainageRating"
                      value={index + 1}
                      class="mr-1"
                    />
                    <label
                      for={`drainageRating${index + 1}`}
                      class="text-blue text-sm"
                    >
                      {index + 1}
                    </label>
                  </div>
                ))}
              </div>

              <div class="mb-4 flex items-center justify-between">
                <label class="block text-blue text-2xl font-bold mr-2">
                  Waste Disposal
                </label>
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} class="flex items-center mr-2">
                    <input
                      type="radio"
                      id={`wasteRating${index + 1}`}
                      name="wasteRating"
                      value={index + 1}
                      class="mr-1"
                    />
                    <label
                      for={`wasteRating${index + 1}`}
                      class="text-blue text-sm"
                    >
                      {index + 1}
                    </label>
                  </div>
                ))}
              </div>
              {/* Add similar sections for other items like toilets, drainage, waste disposal, etc. */}

              <div className="my-4 flex items-center justify-end">
                {/*
							<button className="p-3 rounded bg-blue text-slate-100 text-center">
                  Save & Continue
                </button>
								*/}
                <button
                  onClick={handleSubmit}
                  className="p-3 rounded bg-blue text-slate-100 text-center min-w-[25%]"
                >
                  Add Sanitation
                </button>
              </div>
            </div>
          </form>
        </section>
      </Layout>
    </div>
  );
};

export default AddSanitation;
