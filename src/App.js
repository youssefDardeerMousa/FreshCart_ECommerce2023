import React, { useContext, useEffect, useState } from 'react'

import { RouterProvider, createBrowserRouter, createHashRouter, useNavigate, useParams } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import HomePage from './Components/HomePage/HomePage'
import Products from './Components/Products/Products'
import Products_details from './Components/Products-details/Products_details'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import { ToastContainer, toast } from 'react-toastify';
import DataContextFunction, { DataContext } from './Context/ContextData'
import Cart from './Components/Cart/Cart'
import CheckOut from './Components/CheckOut/CheckOut'
import Allorders from './Components/Allorders/Allorders'
import NotFound from './Components/NotFound/NotFound'
import Protucted from './Components/Protucted/Protucted'
import Categories from './Components/Categories/Categories'
import jwtDecode from 'jwt-decode'
import Subcategorey from './Components/Subcategorey/Subcategorey'
import Brands from './Components/Brands/Brands'
import Favourite from './Components/Favourite/Favourite'
import ForgetPass from './Components/ForgetPass/ForgetPass'
import ResetCode from './Components/ResetCode/ResetCode'
import Resetpass from './Components/Resetpass/Resetpass'
import ChangePass from './Components/ChangePass/ChangePass'
import FreshCart_ECommerce2023 from './Components/FreshCart_ECommerce-App/FreshCart_ECommerce-App'
export default function App() {
 
  let [userData,setuserData]=useState(null)
  function saveUserData(){
      let enCodedToken=localStorage.getItem("token");
      let decodedToken=jwtDecode(enCodedToken);
      setuserData(decodedToken)
  }
  let router=createHashRouter([
    {
      //ChangePass
      //FreshCart_ECommerce-App
      path:'',element:<LayOut userData={userData} setuserData={setuserData} />,children:[
        {index:true,element:<Protucted><HomePage/></Protucted>},
        {path:'/HomePage',element:<Protucted><HomePage/> </Protucted>},
        {path:"/Products",element: <Protucted><Products/></Protucted>},
        {path:"/CheckOut",element: <Protucted><CheckOut/></Protucted>},
        {path:"/Register",element:<Register/>},
        {path:"/Login",element:<Login saveUserData={saveUserData} />},
        {path:"/FreshCart_ECommerce2023",element:<FreshCart_ECommerce2023/>},

        
        {path:"/Cart",element: <Protucted><Cart/></Protucted>},
        {path:"/Brands",element: <Protucted><Brands/></Protucted>},
        {path:"/Favourite",element: <Protucted><Favourite/></Protucted>},

{path:"/ForgetPass",element:<ForgetPass  />},
{path:"/ChangePass",element:<ChangePass  />},
{path:"/ResetCode",element:<ResetCode  />},
{path:"/Resetpass",element:<Resetpass  />},

        {path:"/Categories",element: <Protucted><Categories/></Protucted>},
        {path:"/allorders/:Allorders",element: <Protucted><Allorders/></Protucted>},
        {path:"*",element:<NotFound/>},
        {path:"/Products-details/:id",element: <Protucted><Products_details/></Protucted>},
        {path:"/Subcategorey/:id",element: <Protucted><Subcategorey/></Protucted>}

      ]
    }
  ])
  useEffect(()=>{

  },[])
  return (
    <>
    <DataContextFunction>
    <RouterProvider router={router}> </RouterProvider>

    </DataContextFunction>
   <ToastContainer theme="colored"/>
    </>
  )
}