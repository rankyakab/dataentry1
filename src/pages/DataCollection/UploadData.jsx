import Layout from "../../components/layout/Layout";
import ContentContainer from "../../components/misc/ContentContainer";
import { ArrowLeftIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function UploadDataPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigates back one step in the history
  };
  const fileRef = useRef(null);

  const handleUpload = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    navigate("/housedetails");
  };

  return (
    <Layout>
      <ContentContainer>
        <section className="my-5 grid grid-cols-1 gap-4">
          <head className="grid grid-cols-1 gap-4 mb-5">
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
              <div className="mb-3">
                <UserCircleIcon
                  width={100}
                  height={100}
                  className="p-3 bg-slate-400/50 rounded-full m-auto block"
                />
              </div>
              <h1 className="text-2xl font-bold text-blue text-center">
                Upload Data
              </h1>
              <p className="text-lg text-slate-500 my-5 text-center">
                Please click the "Upload" button to proceed.
              </p>
            </div>
          </head>

          <section className="">
            <form action="" className="" onSubmit={handleSubmit}>
              <div className="my-4 flex items-center justify-center">
                <input
                  type="file"
                  name="file"
                  className="hidden"
                  ref={fileRef}
                />
                {/*
							<button onClick={handleUpload} className="p-3 rounded bg-blue text-slate-100 text-center min-w-[25%]">
									Upload
								</button>
								*/}
                <button
                  onClick={handleSubmit}
                  className="p-3 rounded bg-blue text-slate-100 text-center min-w-[25%]"
                >
                  Upload
                </button>
              </div>
              <div className="my-2 flex items-center justify-center p-3">
                <Link to={"/dashboard"} className="flex gap-2 text-slate-800">
                  <ArrowLeftIcon className="0" width={24} height={24} />{" "}
                  <span>Cancel</span>
                </Link>
              </div>
            </form>
          </section>
        </section>
      </ContentContainer>
    </Layout>
  );
}
