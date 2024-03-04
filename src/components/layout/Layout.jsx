import React from "react"
// import "./Layout.scss"

import Sidebar from "./Sidebar"
import NavHeader from "./NavHeader"

export default function Layout({ children, navigateToAddUser }) {
	return (
		<section className="oti_dash-wrapper fixed w-full top-0 bottom-0 right-0 left-0 bg-blue pt-3 scroll-smooth overflow-auto">
			<div className="grid grid-cols-5 w-full h-screen">
				{/* First col */}
				<Sidebar />

				{/* Last col */}
				<div className="oti_content-container  right-0 left-auto bg-slate-100 p-3 h-full w-full  text-slate-900 md:fixed md:w-[80%] mx-auto items-start overflow-y-auto justify-center md:rounded-tl-[1.5rem] md:col-span-4 xs:col-span-5">
					{/* Nav header */}
					{/* <NavHeader navigateToAddUser={ navigateToAddUser} /> */}

					{/* Layout contents */}
					{children}
				</div>
			</div>
		</section>
	)
}
