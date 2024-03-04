import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// import UserImg from "../assets/img/user.png"
import UserImg from "../../assets/img/user.png";

export default function Sidebar() {
  return (
    <div className="oti_sidebar h-full relative col-span-1 md:block xs:hidden  ">
      <h3 className="flex flex-row items-center font-bold text-slate-200 text-lg p-3">
        <AdjustmentsHorizontalIcon
          width={24}
          height={24}
          className="mr-3 text-slate-400"
        />{" "}
        Data Collection
      </h3>

      <div className="mt-10 pl-3 flex flex-col justify-between h-full overflow-y-auto relative">
        <ul className="flex flex-col gap-4">
          <li className="">
            <Link
              to={"/dashboard"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <ChartBarSquareIcon width={24} height={24} className="mr-2" />{" "}
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/task"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <ClipboardDocumentCheckIcon
                width={24}
                height={24}
                className="mr-2"
              />{" "}
              <span>Task</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/team"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <UsersIcon width={24} height={24} className="mr-2" />{" "}
              <span>My Team</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/userlist"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <UsersIcon width={24} height={24} className="mr-2" />{" "}
              <span>User Management</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/houselist"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <UsersIcon width={24} height={24} className="mr-2" />{" "}
              <span>House Management</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/subward"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <UsersIcon width={24} height={24} className="mr-2" />{" "}
              <span>Sub-Ward Management</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/unit"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <UsersIcon width={24} height={24} className="mr-2" />{" "}
              <span>Unit Management</span>
            </Link>
          </li>


          <li className="">
            <Link
              to={"/subunit"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-blue hover:bg-slate-100 active:text-blue active:bg-slate-100"
            >
              <UsersIcon width={24} height={24} className="mr-2" />{" "}
              <span>Shedule Management</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className="">
            <Link
              to={"/settings"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-slate-200"
            >
              <Cog8ToothIcon width={24} height={24} className="mr-2" />{" "}
              <span>Settings</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/notification"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex items-center hover:text-slate-200"
            >
              <BellAlertIcon width={24} height={24} className="mr-2" />{" "}
              <span>Notification</span>
            </Link>
          </li>

          <li className="">
            <Link
              to={"/profile"}
              className="text-slate-300 p-2 py-4 rounded-s-3xl w-full flex gap-2 items-center hover:text-slate-200"
            >
              <img
                src={UserImg}
                alt="User"
                className="w-[40px] h-[40px] rounded-full"
              />{" "}
              <span>Obi Pascal Banjuare</span>{" "}
              <ArrowRightOnRectangleIcon
                width={24}
                height={24}
                className="mr-2"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
