import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BaseUrl } from '../../BaseUrl/BaseUrl'
import Product from '../Product/Product'
import { DataContext } from '../../Context/ContextData'
import style from "../Product/Product.module.css"
export default function Products() {
    let[products,setproducts]=useState([])
   
    let[loading,setloading]=useState(true)
    const GetAllProducts=async()=>{
        let {data}=await axios.get(`${BaseUrl}products`)
        console.log(data.data);
        setproducts(data.data)
        setloading(false)
       
    }
    useEffect(()=>{
        GetAllProducts()
    },[])
    
  return <>
  <div className={`${style.all} py-5`}>
  <div className={`${style.bgimg} py-5`}>
<div className="container">
   
   <Product products={products} loading={loading} />
   
 </div>
</div>
  </div>

 
  
  </>
}
