import React, { useContext, useEffect, useState } from 'react'
import Mainslider from "../Mainslider/Mainslider"
import CategorySlider from '../CategorySlider/CategorySlider'
import Products from '../Products/Products'
import style from "./Home.module.css"
import { DataContext } from '../../Context/ContextData'
import { Helmet } from 'react-helmet'
export default function HomePage() {
  let {Getusercart,getfavourite} = useContext(DataContext)
async function getdata(){
  let token=localStorage.getItem("token")
  return await Getusercart(token)
}
async function getfavouritee(){
  let token=localStorage.getItem("token")
  return await getfavourite(token)
}
useEffect(()=>{
  getdata()
  getfavouritee()
},[])
  return (
    <>
      <div className={`${style.bgimg}`}>
    <Mainslider/>
    <CategorySlider/>
    <Products/>
</div>
<Helmet>
  <title>
    HomePage
  </title>
</Helmet>
    </>
  )
}
