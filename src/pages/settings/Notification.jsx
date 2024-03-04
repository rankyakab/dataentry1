import PageContainer from "../../components/misc/PageContainer"
import React from "react"
import UserIcon from "../../assets/img/user.png"

export default function NotificationPage() {
	return (
		<PageContainer goBackUrl="/dashboard">
			<section className="">
				<header className="my-5">
					<h1 className="font-bold text-lg my-2">Notification</h1>
					<p className="text-slate-500 font-medium text-md">This is the notification page</p>
				</header>

				<section className="grid grid-cols-1 gap-8">
					<div className="p-3 flex flex-row items-center gap-2">
						<div className="relative col-span-1">
							<img src={UserIcon} alt="" className="rounded-full w-[60px] h-[60px]" />
						</div>
						<div className="col-span-3">
							<h1 className="font-semibold text-sm">
								Ibrahim Ahmed <span className="font-normal text-slate-400 pl-3">3 hours ago</span>
							</h1>
							<p className="text-slate-600">
								You were assigned a new task <span className="font-semibold">Bilichi</span>
							</p>
							<p className="text-slate-600">Some task caption</p>
						</div>
					</div>

					<div className="p-3 flex flex-row items-center gap-2">
						<div className="relative col-span-1">
							<img src={UserIcon} alt="" className="rounded-full w-[60px] h-[60px]" />
						</div>
						<div className="col-span-3">
							<h1 className="font-semibold text-sm">
								Ibrahim Ahmed <span className="font-normal text-slate-400 pl-3">3 hours ago</span>
							</h1>
							<p className="text-slate-600">
								You were assigned a new task <span className="font-semibold">Bilichi</span>
							</p>
							<p className="text-slate-600">Some task caption</p>
						</div>
					</div>

					<div className="p-3 flex flex-row items-center gap-2">
						<div className="relative col-span-1">
							<img src={UserIcon} alt="" className="rounded-full w-[60px] h-[60px]" />
						</div>
						<div className="col-span-3">
							<h1 className="font-semibold text-sm">
								Ibrahim Ahmed <span className="font-normal text-slate-400 pl-3">3 hours ago</span>
							</h1>
							<p className="text-slate-600">
								You were assigned a new task <span className="font-semibold">Bilichi</span>
							</p>
							<p className="text-slate-600">Some task caption</p>
						</div>
					</div>

					<div className="p-3 flex flex-row items-center gap-2">
						<div className="relative col-span-1">
							<img src={UserIcon} alt="" className="rounded-full w-[60px] h-[60px]" />
						</div>
						<div className="col-span-3">
							<h1 className="font-semibold text-sm">
								Ibrahim Ahmed <span className="font-normal text-slate-400 pl-3">3 hours ago</span>
							</h1>
							<p className="text-slate-600">
								You were assigned a new task <span className="font-semibold">Bilichi</span>
							</p>
							<p className="text-slate-600">Some task caption</p>
						</div>
					</div>

					<div className="p-3 flex flex-row items-center gap-2">
						<div className="relative col-span-1">
							<img src={UserIcon} alt="" className="rounded-full w-[60px] h-[60px]" />
						</div>
						<div className="col-span-3">
							<h1 className="font-semibold text-sm">
								Ibrahim Ahmed <span className="font-normal text-slate-400 pl-3">3 hours ago</span>
							</h1>
							<p className="text-slate-600">
								You were assigned a new task <span className="font-semibold">Bilichi</span>
							</p>
							<p className="text-slate-600">Some task caption</p>
						</div>
					</div>
				</section>
			</section>
		</PageContainer>
	)
}
