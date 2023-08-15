    import React, { useContext, useEffect, useState } from 'react'
    import { useNavigate, useParams } from 'react-router-dom'
    import { BaseUrl } from '../../BaseUrl/BaseUrl';
    import axios from 'axios';
    import Slider from 'react-slick';
    import { DataContext } from '../../Context/ContextData';
    import { toast } from 'react-toastify';
    import {Helmet} from "react-helmet";
    import style from "./Style.module.css"

    export default function Products_details() {
    let Navigatee=useNavigate()
    let msg=(x)=>toast.success(x)
    let Navigate=useNavigate()
    let toastfav=(x)=>toast.success(x)

    let {addToCart,getfavourite,facount,setfacount,favourite,fav,setfav,loading1,setloading1,Getusercart}=useContext(DataContext)

    async function getpostfavourite(productId){
      let token=localStorage.getItem("token");
      
      let response=await favourite(token,productId)
      //data.data.length
      setfacount(facount)
      setfav(true)
      Navigatee("/Favourite")
      console.log(response);
      toastfav(response.data.message)
    }
    async function AddProductTocart(productId){
      

      let token=localStorage.getItem('token');
      if(token){
        Getusercart(token)
        let response=await addToCart(token,productId)
        setloading1(true)

      if(response.status==200){
        setloading1(false)

    msg("product added successfuly")
    Navigate("/Cart")
      }
        console.log(response);
      }
      else{
      
      setloading1(false)


      alert("You are not login , please login or create account")
      setloading1(true)

      }
      
    }

    let[detal,setdetal] = useState({})
    let[img,setimg] = useState([])
    let [loading,setloading]=useState(true)
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let {id}=useParams()
    const Details=async ()=>{
    let {data}=await axios.get(`${BaseUrl}products/${id}`)
    console.log(data);
    setdetal(data.data)
    setimg(data.data.images)
    setloading(false)
    }
    useEffect(()=>{
    Details()
    },[])
    return (
      <>
      <div className={`${style.bgimg} py-5`}>
      {loading? <>
      <div className="d-flex align-items-center justify-content-center w-100 vh-100">
        <div className="loading">
        <i className='fas fa-spin fa-spinner text-light fs-1'></i>
        </div>
      </div>
      
      </> :
        <div className="container">
        <div className="row">
        <div className="col-md-4  text-center    col-sm-12 mt-5" >
          <Slider {...settings}>
            {
              img.map((x)=>{
                return <div key={x} className="">
                  
                  <img src={x} className='w-100' alt=""  />
                </div>
              })
            }
          </Slider>
                  

          </div>
          <div className="col-md-8    col-sm-12 mt-5" >
          <div className="d-flex justify-contect-center align-items-center vh-100 w-100">
            <div className="detail1 text-light text-center mx-2">
            <h4 className='fw-bolder'>{detal.title}</h4>
            <p className='fw-bold text-center'>{detal.description}</p>
            <div className="price d-flex justify-content-between">
              <p className='fw-bold text-light'>{detal.price} EGP</p>
              <i className='fas fa-star text-light'>{detal.ratingsAverage}</i>
            </div>
            <button onClick={()=>AddProductTocart(detal.id)} className='btn btn-success w-100'> {!loading1?"+ add To Cart":<i className='fas fa-spin fa-spinner fs-3 text-light'></i>}</button>
            <br/>
            <button onClick={()=>{getpostfavourite(detal.id)}} className="btn btn-danger  my-3 w-100 ">{fav?'+ add to favourite':<i className='fas fa-spin fa-spinner fs-3 text-light'></i>} </button>

            </div>
          </div>
          
          </div>

        </div>
      </div>
      }
      </div>

      <Helmet>
      <title>Product_Details</title>
      </Helmet>
      </>
    )
    }
