import React from "react"
import Cards from "./Cards"
import Layout from "../../components/layout/Layout"
import DataCollection from "./DataCollection"
import NavHeader from "../../components/layout/NavHeader"
import { useNavigate } from "react-router-dom"
import DashboardNav from "./DashboardNav"
import Admin from "./Admin"
import SeniorAdmin from "./SeniorAdmin"
import Supervisor from "./Supervisor"
import Field from "./Field"

export default function Dashboard() {

	const navigate = useNavigate();

    const handleNavigateToAddData = () => {
		navigate('/data-collection'); 
		
    };

	return (
		<Layout>
			{/* <NavHeader    /> */}
			<DashboardNav />
			<Cards />
			<SeniorAdmin />
			<Admin />
			<Supervisor />
			<Field />
			<DataCollection />
		</Layout>
	)
}
