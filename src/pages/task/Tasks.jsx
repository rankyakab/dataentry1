import Layout from "../../components/layout/Layout"
import PageContainer from "../../components/misc/PageContainer"
import React from "react"
import UserIcon from "../../assets/img/user.png"
import { CalendarIcon } from "@heroicons/react/24/solid"

export default function TasksPage() {
	return (
		<Layout>
			<PageContainer goBackUrl="/dashboard">
				<section className="my-8 grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
					<div className="">
						<h1 className="text-lg font-bold mb-2">Task Description</h1>
						<p className="text-md text-slate-500">Some text caption</p>
					</div>
				</section>

				<section className="">
					<h2 className="text-md font-bold flex gap-2 items-center mb-4">
						Assigned Task <span className="bg-white p-2 px-4 text-center rounded-full">1</span>
					</h2>

					<h1 className="text-2xl font-bold mb-8">Task Title</h1>
					<span className="p-3 rounded-full bg-[#EEE1D9]">High Priority</span>

					<div className="my-8">
						<p className="text-md font-medium text-slate-800">Some paragraph</p>
					</div>

					<div className="my-8 relative flex gap-2">
						<img src={UserIcon} alt="" className="w-[50px] h-[50px] rounded-full p-1 bg-white relative" />
						<img src={UserIcon} alt="" className="w-[50px] h-[50px] rounded-full p-1 bg-white relative left-[-1.5rem]" />
						<img src={UserIcon} alt="" className="w-[50px] h-[50px] rounded-full p-1 bg-white relative left-[-3rem]" />
						<img src={UserIcon} alt="" className="w-[50px] h-[50px] rounded-full p-1 bg-white relative left-[-4.5rem]" />
					</div>

					<div className="flex lg:flex-row xs:flex-col gap-8">
						<p className="text-sky-500 flex items-center gap-2">
							<CalendarIcon width={24} height={24} /> Start Date: August 3rd, 2024
						</p>

						<p className="text-sky-500 flex items-center gap-2">
							<CalendarIcon width={24} height={24} /> Due Date: August 3rd, 2024
						</p>
					</div>

					<div className="my-4 flex items-center justify-start py-3">
						<button className="p-3 rounded bg-sky-600 text-slate-100 text-center">Collate Date</button>
					</div>
				</section>
			</PageContainer>
		</Layout>
	)
}
