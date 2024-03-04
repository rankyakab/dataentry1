import React from "react"
import Cards from "./Cards"
import Layout from "../../components/layout/Layout"
import DataCollection from "./DataCollection"
import NavHeader from "../../components/layout/NavHeader"
import { useNavigate } from "react-router-dom"
import DashboardNav from "./DashboardNav"

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

			<DataCollection />
		</Layout>
	)
}
