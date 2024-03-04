import DataCollection from "../pages/DataCollection/DataCollection";
import DependentInformation from "../pages/DataCollection/DependentInformation";
import EducationalInfo from "../pages/DataCollection/EducationalInfo";
import EmploymentInfo from "../pages/DataCollection/EmploymentInfo";
import MedicalInformation from "../pages/DataCollection/MedicalInformation";
import UploadDataPage from "../pages/DataCollection/UploadData";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import NotificationPage from "../pages/settings/Notification";
import ProfilePage from "../pages/settings/Profile";
import SettingsPage from "../pages/settings/Settings";
import TaskboardPage from "../pages/task/Taskboard";
import TasksPage from "../pages/task/Tasks";
import TeamPage from "../pages/team/Team";
import { createBrowserRouter } from "react-router-dom";
import AddUser from "../pages/user/AddUser";
import UserList from "../pages/user/UserList";
import HouseList from "../pages/house/HouseList";
import AddHouse from "../pages/house/AddHouse";
import HouseDetails from "../pages/house/HouseDetails";
import SanitationList from "../pages/house/SanitationList";
import AddSanitation from "../pages/house/AddSanitation";
import ViewSanitation from "../pages/house/ViewSanitation";
import PersonDetails from "../pages/house/PersonDetails";
import MoreDetails from "../pages/house/MoreDetails";
import Update from "../pages/house/Update";
import SubUnit from "../pages/subunit/SubUnit";
import AddSubUnit from "../pages/subunit/AddSubUnit";
import ViewTeam from "../pages/team/ViewTeam.";
import UpdateSubUnit from "../pages/subunit/UpdateSubUnit";
export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/data-collection",
    element: <DataCollection />,
  },
  {
    path: "/employment-info",
    element: <EmploymentInfo />,
  },
  {
    path: "/educational-info",
    element: <EducationalInfo />,
  },
  {
    path: "/dependent-info",
    element: <DependentInformation />,
  },
  {
    path: "/medical-info",
    element: <MedicalInformation />,
  },
  {
    path: "/upload-data",
    element: <UploadDataPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/task",
    element: <TasksPage />,
  },
  {
    path: "/my-task",
    element: <TaskboardPage />,
  },
  {
    path: "/adduser",
    element: <AddUser />,
  },
  {
    path: "/userlist",
    element: <UserList />,
  },

  {
    path: "/houselist",
    element: <HouseList />,
  },

  {
    path: "/addhouse",
    element: <AddHouse />,
  },

  {
    path: "/housedetails",
    element: <HouseDetails />,
  },

  {
    path: "/sanitationlist",
    element: <SanitationList />,
  },
  {
    path: "/addsanitation",
    element: <AddSanitation />,
  },

  {
    path: "/viewsanitation",
    element: <ViewSanitation />,
  },
  {
    path: "/persondetails",
    element: <PersonDetails />,
  },
  {
    path: "/more",
    element: <MoreDetails />,
  },

  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/subunit",
    element: <SubUnit />,
  },
  {
    path: "/addsubunit",
    element: <AddSubUnit />,
  },
  {
    path: "/updatesubunit",
    element: <UpdateSubUnit />,
  },
  {
    path: "/viewteam",
    element: <ViewTeam />,
  },
]);
