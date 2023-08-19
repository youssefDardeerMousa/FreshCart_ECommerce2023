import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DataContext } from '../../Context/ContextData';
import style from "./Sub.module.css"
import img1 from "./labtops/4.gpj.webp"
import img2 from "./labtops/1.jpg"
import img3 from "./labtops/2.jpg"
import img4 from "./labtops/4.jpg"
import img5 from "./labtops/V8rrieMuHSrvVeivpxvaac.jpg"
import img6 from "./labtops/5.jpg"
// 
import img11 from "./mobiles/3.jpj.jpg"
import img22 from "./mobiles/1.jpg"
import img33 from "./mobiles/2.jpg"
import img44 from "./mobiles/4.jpg"
import img55 from "./mobiles/6.jpg"
import img66 from "./mobiles/5.jpg"
// 
import img111 from "./clears/1.jpg"
import img222 from "./clears/2jpg.jpg"
import img333 from "./clears/3.jpg"
import img444 from "./clears/4.jpg"
import img555 from "./clears/6.jpg"
import img666 from "./clears/5jpg.jpg"
//
import img1111 from "./books/3.jpg"
import img2222 from "./books/1.jpg"
import img3333 from "./books/2.jpg"
import img4444 from "./books/4.jpg"
import img55555 from "./books/6.jpg"
import img6666 from "./books/5.jpg"
//
import img101 from "./Home/3.jpg"
import img102 from "./Home/1.jpg"
import img103 from "./Home/2.jpg"
import img104 from "./Home/4.jpj.jpg"
import img105 from "./Home/6.png"
import img106 from "./Home/5.jpg"
//
import img1001 from "./baby/3.jpg"
import img1002 from "./baby/1.jpg"
import img1003 from "./baby/2.jpg"
import img1004 from "./baby/4.jpg"
import img1005 from "./baby/6.jpg"
import img1006 from "./baby/5.jpg"
//////////
import img1011 from "./fern/3.jpg"
import img1012 from "./fern/1.jpg"
import img1013 from "./fern/2.jpg"
import img1014 from "./fern/4.jpg"
import img1015 from "./fern/6.jpg"
import img1106 from "./fern/5.jpg"
///////
import img0 from "./womensfishon/1.jpg"
import img00 from "./womensfishon/2.jpg"
import img000 from "./womensfishon/3.jpg"
import img0000 from "./womensfishon/4.jpg"
import img00000 from "./womensfishon/6.jpg"
import img000000 from "./womensfishon/5.jpg"
///
import x from "./menfishon/1.jpg"
import xx from "./menfishon/2.jpg"
import xxx from "./menfishon/3.jpg"
import xxxx from "./menfishon/4.jpg"
import xxxxx from "./menfishon/6.jpj.jpg"
import xxxxxx from "./menfishon/5.jpg"
/////
import y from "./music/1.jpg"
import yy from "./music/2.jpg"
import yyy from "./music/3.jpg"
import yyyy from "./music/4.jpg"
import yyyyy from "./music/6.jpg"
import yyyyyy from "./music/5.jpg"
import { Helmet } from 'react-helmet';
export default function Subcategorey() {
    let [data,setdata]=useState(true)
    let [load,setload]=useState(true)
    let {id}=useParams()
    console.log(id);

    let {Subcategorey,Getusercart,getfavourite}=useContext(DataContext)
    async function sub(){
        let response=await Subcategorey(id)
        setload(false)
        setdata(response.data.data)
        console.log(response.data.data);
    }
  
   useEffect(()=>{
    sub()
    getfavourite(localStorage.getItem("token"))
    Getusercart(localStorage.getItem("token"))
   },[])
  return (
    <>
    {load?<>
      <div className="d-flex justify-content-center align-items-center vh-100 w-100">
      <div className="loading">
      <i className='fas fa-spin fa-spinner text-success fs-1'></i>
      </div>
    </div>
    
    </>:   <div className={`${style.bgimg} py-5`}>
    <div className="container mt-4 py-5">
  <div className="row justify-content-center mt-5"> {/* Added 'justify-content-center' class */}
    <div className={`card col-md-4 col-sm-12 ${style.cardbody}`}> {/* Moved 'card' class here */}
      <div className={``}>
        <div className="d-flex justify-content-center"> {/* Center the image and text */}
          <img src={data.image} className={`${style.img}`} alt={data.name} />

          
        </div>
        <ul className="list-unstyled text-center">
            <li className="fw-bolder">Category Name: {data.name}</li>
            {data._id=="6439d61c0049ad0b52b90051"? <li className="fw-bolder">description of products : Precision instrument tuner for musicians, ensuring perfect harmonies every time</li>:''}
            {data._id=="6439d5b90049ad0b52b90048"? <li className="fw-bolder"> description of products : Elevate your style with curated Men's Fashion essentials.</li>:''}
            {data._id=="6439d58a0049ad0b52b9003f"? <li className="fw-bolder"> description of products : Elevate your style with chic and empowering women's fashion trends</li>:''}
            {data._id=="6439d41c67d9aa4ca97064d5"? <li className="fw-bolder"> description of products : Convenient shopping for household essentials and fresh groceries</li>:''}
            {data._id=="6439d40367d9aa4ca97064cc"? <li className="fw-bolder"> description of products : Soft plush toy, a cuddly companion for endless giggles and comfort.</li>:''}
            {data._id=="6439d3e067d9aa4ca97064c3"? <li className="fw-bolder"> description of products : Smart thermostat, effortlessly controlling your home's climate for ultimate comfort.</li>:''}
            {data._id=="6439d3c867d9aa4ca97064ba"? <li className="fw-bolder"> description of products : Bestselling thriller novel, keeping you on the edge of suspense.</li>:''}
            {data._id=="6439d30b67d9aa4ca97064b1"? <li className="fw-bolder"> description of products : Nourishing facial serum, enhancing your natural beauty with a radiant glow</li>:''}
            {data._id=="6439d2f467d9aa4ca97064a8"? <li className="fw-bolder"> description of products : 5G smartphone with stunning display, empowering your on-the-go connectivity.</li>:''}
            {data._id=="6439d2d167d9aa4ca970649f"? <li className="fw-bolder"> description of products : Wireless noise-cancelling headphones, immersing you in pure audio bliss.</li>:''}

          <li>Rate : <i className='fas fa-star text-warning'></i>
          <i className='fas fa-star text-warning'></i>
          <i className='fas fa-star text-warning'></i>
          <i className='fas fa-star text-warning'></i>
          <i className='fas fa-star'></i>
          </li>
          
          
          
          
          </ul>
          
      </div>
    </div>
  </div>
  {data._id=="6439d2d167d9aa4ca970649f"? <div className="row text-center mt-5 py-5 ">
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2d167d9aa4ca970649f"? <img src={img1}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 24000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2d167d9aa4ca970649f"? <img src={img3} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 23000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2d167d9aa4ca970649f"? <img src={img2} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 28000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2d167d9aa4ca970649f"? <img src={img6} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 20000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2d167d9aa4ca970649f"? <img src={img4} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 18000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2d167d9aa4ca970649f"? <img src={img5} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 26000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  
  </div>:''}
 
  {/* 2  6439d2f467d9aa4ca97064a8*/}
  {data._id=="6439d2f467d9aa4ca97064a8"? 
  <div className="row text-center mt-5 py-5 ">
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2f467d9aa4ca97064a8"? <img src={img11}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 14000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2f467d9aa4ca97064a8"? <img src={img33} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 13000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2f467d9aa4ca97064a8"? <img src={img22} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 8000 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2f467d9aa4ca97064a8"? <img src={img66} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 7500 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2f467d9aa4ca97064a8"? <img src={img44} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 1750 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d2f467d9aa4ca97064a8"? <img src={img55} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 1560 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> :''}
 {/* 3 6439d30b67d9aa4ca97064b1 */}
 {data._id=="6439d30b67d9aa4ca97064b1"?<div className="row mt-5 text-center py-5 ">
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d30b67d9aa4ca97064b1"? <img src={img111}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 240 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d30b67d9aa4ca97064b1"? <img src={img333} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 230 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d30b67d9aa4ca97064b1"? <img src={img222} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 160 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d30b67d9aa4ca97064b1"? <img src={img666} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 200 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d30b67d9aa4ca97064b1"? <img src={img444} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d30b67d9aa4ca97064b1"? <img src={img555} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 150 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}
  {/* 4 6439d3c867d9aa4ca97064ba */}
  
   {/* 5 6439d3e067d9aa4ca97064c3 */}
   {data._id=="6439d3c867d9aa4ca97064ba"?<div className="row mt-5 text-center py-5 ">
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3c867d9aa4ca97064ba"? <img src={img1111}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 240 EGP</p>
    </div>
    <div className= {`col-md-4  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3c867d9aa4ca97064ba"? <img src={img3333} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 230 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3c867d9aa4ca97064ba"? <img src={img2222} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 160 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3c867d9aa4ca97064ba"? <img src={img6666} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 200 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3c867d9aa4ca97064ba"? <img src={img4444} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3c867d9aa4ca97064ba"? <img src={img55555} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 150 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}
  {/* 6 6439d3e067d9aa4ca97064c3 */}
  {data._id=="6439d3e067d9aa4ca97064c3"?<div className="row mt-5 text-center py-5 ">
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3e067d9aa4ca97064c3"? <img src={img106}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 240 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3e067d9aa4ca97064c3"? <img src={img105} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 230 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3e067d9aa4ca97064c3"? <img src={img104} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 160 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3e067d9aa4ca97064c3"? <img src={img103} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 200 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3e067d9aa4ca97064c3"? <img src={img102} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d3e067d9aa4ca97064c3"? <img src={img101} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 150 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}
  {/* 7 6439d40367d9aa4ca97064cc */}
  {data._id=="6439d40367d9aa4ca97064cc"?<div className="row mt-5 text-center py-5 ">
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d40367d9aa4ca97064cc"? <img src={img1006}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 340 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d40367d9aa4ca97064cc"? <img src={img1005} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 289 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d40367d9aa4ca97064cc"? <img src={img1004} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 169 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d40367d9aa4ca97064cc"? <img src={img1003} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 300 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d40367d9aa4ca97064cc"? <img src={img1002} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d40367d9aa4ca97064cc"? <img src={img1001} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 180 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}
   {/* 8 6439d40367d9aa4ca97064cc */}
   {data._id=="6439d41c67d9aa4ca97064d5"?<div className="row text-center mt-5 py-5 ">
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d41c67d9aa4ca97064d5"? <img src={img1106}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 340 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d41c67d9aa4ca97064d5"? <img src={img1015} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 289 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d41c67d9aa4ca97064d5"? <img src={img1014} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 169 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d41c67d9aa4ca97064d5"? <img src={img1013} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 300 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d41c67d9aa4ca97064d5"? <img src={img1012} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d41c67d9aa4ca97064d5"? <img src={img1011} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 180 EGP</p>

    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}

  {/* 9 6439d58a0049ad0b52b9003f */}
  {data._id=="6439d58a0049ad0b52b9003f"?<div className="row mt-5 py-5 ">
    <div className= {`col-md-4 text-center col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d58a0049ad0b52b9003f"? <img src={img000000}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 340 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 text-center  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d58a0049ad0b52b9003f"? <img src={img00000} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 289 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 text-center col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d58a0049ad0b52b9003f"? <img src={img0000} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 169 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d58a0049ad0b52b9003f"? <img src={img000} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 300 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d58a0049ad0b52b9003f"? <img src={img00} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
 
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d58a0049ad0b52b9003f"? <img src={img0} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 180 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}
  {/* 10 6439d5b90049ad0b52b90048 */}
  {data._id=="6439d5b90049ad0b52b90048"?<div className="row mt-5 py-5 ">
    <div className= {`col-md-4 text-center col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d5b90049ad0b52b90048"? <img src={xxxxxx}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 340 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4  col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d5b90049ad0b52b90048"? <img src={xxxxx} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 289 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d5b90049ad0b52b90048"? <img src={xxxx} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 169 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d5b90049ad0b52b90048"? <img src={xxx} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 300 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d5b90049ad0b52b90048"? <img src={xx} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d5b90049ad0b52b90048"? <img src={x} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 180 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}
    {/* 11 6439d61c0049ad0b52b90051 */}
    {data._id=="6439d61c0049ad0b52b90051"?<div className="row mt-5 py-5 ">
    <div className= {`col-md-4  text-center col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d61c0049ad0b52b90051"? <img src={yyyyyy}  className={`${style.subimg}`} />:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 340 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 text-center  col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d61c0049ad0b52b90051"? <img src={yyyyy} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 289 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    
    <div className= {`col-md-4 text-center col-sm-12 mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d61c0049ad0b52b90051"? <img src={yyyy} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 169 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d61c0049ad0b52b90051"? <img src={yyy} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 300 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d61c0049ad0b52b90051"? <img src={yy} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-dark'></i>
    <i className='fas fa-star text-dark'></i>
    
    
    </p>
    <p className='text-light' >price : 100 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
    <div className= {`col-md-4 col-sm-12 text-center mb-4 my-3 card px-4 ${style.imghov}`}>
    {data._id=="6439d61c0049ad0b52b90051"? <img src={y} className={`${style.subimg}`}></img>:''}
    <p className='text-light'>Rate : <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    <i className='fas fa-star text-warning'></i>
    
    
    </p>
    <p className='text-light' >price : 180 EGP</p>
    <Link target='_blank' to={"https://registration.gopay.com/merchant/1"}>
    <button className='btn btn-success w-100 text-light'>Buy Now </button>

    </Link>
    </div>
  </div> : ''}

</div>
    </div>
  }
 <Helmet>
  <title>
    SubCategory
  </title>
 </Helmet>

    </>
  )
}
