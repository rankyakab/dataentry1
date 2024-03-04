import React from 'react'
import Layout from "../../components/layout/Layout"
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../components/layout/NavHeader';


const UserList = () => {

    const navigate = useNavigate();

    const handleNavigateToAddUser = () => {
      navigate('/adduser'); // Replace '/adduser' with the actual path to your Add User page
    };


    return (
        <Layout>
        <NavHeader isAddUser navigateToAddUser={handleNavigateToAddUser} />
        

            
    <div className="p-3 my-8 overflow-hidden">
    <h2 className="font-bold text-2xl">User List</h2>
    <p className="text-slate-500 font-normal">Here is a list of users</p>
          <div className="overflow-x-auto">
          <table className="min-w-full text-center text-sm font-light mt-8 overflow-x-auto table-auto">
        <thead className="font-medium bg-blue text-slate-100 ">
            <tr>
                <th scope="col" className="px-6 py-4">
                    #
                </th>
                <th scope="col" className="px-6 py-4">
                    Fullname
                </th>
                <th scope="col" className="px-6 py-4">
                    Email
                </th>
                <th scope="col" className="px-6 py-4">
                    Phone Number
                      </th>
                      
                      <th scope="col" className="px-6 py-4">
                    Designation
                      </th>
                      
                      <th scope="col" className="px-6 py-4">
                    State
                </th>

                <th scope="col" className="px-6 py-4">
                    LGA
                      </th>
                      
                      <th scope="col" className="px-6 py-4">
                    Ward
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Mark Edwards</td>
                <td className="whitespace-nowrap px-6 py-4">Otto@gmail.com</td>
                          <td className="whitespace-nowrap px-6 py-4">0928380023</td>
                          <td className="whitespace-nowrap px-6 py-4">Super Admin</td>
                          <td className="whitespace-nowrap px-6 py-4">Enugu</td>
                          <td className="whitespace-nowrap px-6 py-4">Nsukka</td>
                          <td className="whitespace-nowrap px-6 py-4">Ward 7</td>
                      </tr>
                      

           <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4">Tayo Mayowa</td>
                <td className="whitespace-nowrap px-6 py-4">wvcto@gmail.com</td>
                          <td className="whitespace-nowrap px-6 py-4">0828380023</td>
                          <td className="whitespace-nowrap px-6 py-4">Senior Admin</td>
                          <td className="whitespace-nowrap px-6 py-4">Kogi</td>
                          <td className="whitespace-nowrap px-6 py-4">Kogi South</td>
                          <td className="whitespace-nowrap px-6 py-4">Ward 7</td>
            </tr>
            <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td className="whitespace-nowrap px-6 py-4">Nasiru Adamu</td>
                <td className="whitespace-nowrap px-6 py-4">adamu@gmail.com</td>
                          <td className="whitespace-nowrap px-6 py-4">09200003</td>
                          <td className="whitespace-nowrap px-6 py-4">Admin</td>
                          <td className="whitespace-nowrap px-6 py-4">FCT</td>
                          <td className="whitespace-nowrap px-6 py-4">Lugbe</td>
                          <td className="whitespace-nowrap px-6 py-4">Wuse 2</td>
            </tr>
            <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                <td className="whitespace-nowrap px-6 py-4">Frank Joseph</td>
                <td className="whitespace-nowrap px-6 py-4">frankjoe@gmail.com</td>
                          <td className="whitespace-nowrap px-6 py-4">23</td>
                          <td className="whitespace-nowrap px-6 py-4">Supervisor</td>
                          <td className="whitespace-nowrap px-6 py-4">Port Harcout</td>
                          <td className="whitespace-nowrap px-6 py-4">Chuba</td>
                          <td className="whitespace-nowrap px-6 py-4">Rumokor 1</td>
            </tr>

   
        </tbody>
    </table>       
</div>

            </div>
            </Layout>
  )
}

export default UserList
