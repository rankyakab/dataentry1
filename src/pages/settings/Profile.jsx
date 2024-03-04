import Layout from "../../components/layout/Layout"
import PageContainer from "../../components/misc/PageContainer"
import React from "react"

export default function ProfilePage() {
	return (
		<Layout>
			<PageContainer goBackUrl="/dashboard">
				<section className="grid grid-cols-1 gap-4">
					<section className="">
						<header className="my-8">
							<h1 className="lg:text-2xl xs:text-lg font-bold text-sky-800 text-center">Personal Information</h1>
						</header>

						<div className="grid grid-cols-1 gap-8">
							<div className="bg-white shadow-lg  p-3">
								<p className="text-2xl flex gap-2 text-sky-700 mb-4">
									<span className="font-bold">Full Name:</span> <span className="">Obi Pascal</span>
								</p>
								<div className="flex lg:flex-row xs:flex-col gap-4">
									<p className="text-md flex gap-2">
										<span className="font-bold">Date of Birth:</span> <span className="">14th, Aug</span>
									</p>

									<p className="text-md flex gap-2">
										<span className="font-bold">Gender:</span> <span className="">Male</span>
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="">
						<header className="my-8">
							<h1 className="lg:text-2xl xs:text-lg font-bold text-sky-800 text-center">Employment Information</h1>
						</header>

						<div className="grid grid-cols-1 gap-8">
							<div className="bg-white shadow-lg  p-3">
								<p className="text-2xl flex gap-2 text-sky-700 mb-4">
									<span className="font-bold">Full Name:</span> <span className="">Obi Pascal</span>
								</p>
								<div className="flex lg:flex-row xs:flex-col gap-4">
									<p className="text-md flex gap-2">
										<span className="font-bold">Date of Birth:</span> <span className="">14th, Aug</span>
									</p>

									<p className="text-md flex gap-2">
										<span className="font-bold">Gender:</span> <span className="">Male</span>
									</p>
								</div>
							</div>
						</div>
					</section>
				</section>

				<div className="my-4 flex items-center lg:justify-end xs:justify-center gap-4 p-3">
					<button className="p-3 rounded bg-white shadow text-sky-700 text-center">Save Data</button>
					<button className="p-3 rounded bg-blue text-slate-100 text-center shadow">Upload Data</button>
				</div>
			</PageContainer>
		</Layout>
	)
}
