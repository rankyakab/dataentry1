import React from "react"

import IconChartLineVariant from "../../components/svg/IconChartLineVariant"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid"
import PieChart from "./chart/PieChart"
import LineChart from "./chart/LineChart"

export default function Supervisor() {
	return (
		<div className="mt-10">
			<h1 className="mt-4 mx-auto text-xl font-bold"> Supervisor </h1>
			<section className="oti_cards-container flex gap-3 md:flex-row xs:flex-col">
				<div className="rounded-3xl shadow-md md:p-8 xs:p-5 w-full">
					<h3 className="font-semibold text-md">Completed Task</h3>

					<h1 className="my-5 text-5xl font-bold">20</h1>

					<div className="flex gap-2 justify-between items-center ">
						<div className="">
							<p className="flex items-center gap-1 font-bold text-gray-600">
								<ArrowUpIcon width={16} height={16} className="text-green-600" /> <span className="text-green-600">40%</span> <span>vs last month</span>
							</p>
						</div>

						<div className="">
							<IconChartLineVariant width={100} height={100} className="text-green-300" />
						</div>
					</div>
				</div>

				<div className="rounded-2xl shadow-md md:p-8 xs:p-5 w-full">
					<h3 className="font-semibold text-sm">Incompleted Task</h3>

					<h1 className="my-5 text-5xl font-bold">5</h1>

					<div className="flex gap-2 justify-between items-center">
						<div className="">
							<p className="flex items-center gap-1 font-bold text-gray-600">
								<ArrowDownIcon width={16} height={16} className="text-red-600" /> <span className="text-red-600">10%</span> <span>vs last month</span>
							</p>
						</div>

						<div className="">
							<IconChartLineVariant width={100} height={100} className="text-red-300" />
						</div>
					</div>
				</div>

				<div className="rounded-2xl shadow-md md:p-8 xs:p-5 w-full">
					<h3 className="font-semibold text-sm">Overdue Task</h3>
					<h1 className="my-5 text-5xl font-bold">2316</h1>

					<div className="flex gap-2 justify-between items-center">
						<div className="">
							<p className="flex items-center gap-1 font-bold text-gray-600">
								<ArrowUpIcon width={16} height={16} className="text-green-600" /> <span className="text-green-600">20%</span> <span>vs last month</span>
							</p>
						</div>

						<div className="">
							<IconChartLineVariant width={100} height={100} className="text-green-300" />
						</div>
					</div>
				</div>
			</section>

			<section className="oti_cards-container flex gap-3 md:flex-row xs:flex-col">
				<div className="rounded-3xl shadow-md md:p-8 xs:p-5 w-full">
					<LineChart />
					</div>
					<div className="rounded-3xl shadow-md md:p-8 xs:p-5 w-full">
					<PieChart />
					</div>
					
					</section>
		</div>




	)
}
