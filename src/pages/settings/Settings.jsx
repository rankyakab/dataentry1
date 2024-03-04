import Layout from "../../components/layout/Layout"
import PageContainer from "../../components/misc/PageContainer"
import { CameraIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import React from "react"
import { Link } from "react-router-dom"
import UserIcon from "../../assets/img/user.png"

export default function SettingsPage() {
	return (
		<Layout>
			<PageContainer goBackUrl="/dashboard">
				<header className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4 my-8">
					<div className="flex lg:flex-row xs:flex-col items-center gap-4">
						<Link className="font-bold text-lg text-slate-800" to={"#"}>
							Profile
						</Link>
						<Link className="font-bold text-lg text-slate-800" to={"#"}>
							Password
						</Link>
						<Link className="font-bold text-lg text-slate-800" to={"/notification"}>
							Notification
						</Link>
					</div>
					<div className="">
						<form action="" className="rounded border-2 border-slate-400 shadow-sm flex gap-2 items-center rounded-lg bg-white px-2">
							<MagnifyingGlassIcon width={34} height={34} /> <input type="search" className="p-3 rounded-lg outline-none bg-white w-full" placeholder="Search" />
						</form>
					</div>
				</header>

				<section>
					<header className="h-[9rem] bg-gradient-to-r from-blue to-fuchsia-500 relative mb-[8rem]">
						<img src={UserIcon} alt="" className="rounded-full w-[150px] h-[150px] absolute bottom-[-4.5rem] lg:left-[2.3rem] xs:left-[5.9rem] bg-white p-1" />
						<CameraIcon width={40} height={40} className="rounded-full absolute z-10 bottom-[-50px] lg:left-[15%] xs:left-[55%] p-1 bg-white" />
					</header>

					<form action="" className="">
						<div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
							<div className="">
								<label className="mb-3 block">Full Name</label>
								<input required className="p-3 rounded bg-slate-200 block w-full" />
							</div>

							<div className="">
								<label className="mb-3 block">Email Address</label>
								<input required className="p-3 rounded bg-slate-200 block w-full" type="email" />
							</div>

							<div className="">
								<label className="mb-3 block">Phone Number</label>
								<input required className="p-3 rounded bg-slate-200 block w-full" type="tel" />
							</div>

							<div className="">
								<label className="mb-3 block">Team Category</label>
								<input required className="p-3 rounded bg-slate-200 block w-full" type="text" />
							</div>
						</div>

						<div className="my-4 flex items-center justify-end">
							<button className="p-3 rounded bg-blue text-slate-100 text-center">Save Profile</button>
						</div>
					</form>
				</section>
			</PageContainer>
		</Layout>
	)
}
