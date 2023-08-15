    import React, { useEffect, useState } from 'react'
    import { BaseUrl } from '../../BaseUrl/BaseUrl'
    import axios from 'axios'
    import Slider from 'react-slick'
    export default function CategorySlider() {
    let [category,setcategory]=useState([])
    async function GetAllCategories(){
    let {data}=await axios.get(`${BaseUrl}categories`);

    setcategory(data.data)


    }

    useEffect(()=>{
      GetAllCategories()
    },[])
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <>
      <div className="my-5 container">
        <h3 className='text-light fw-bold'>Shop popular Categories</h3>
      <Slider {...settings}>
      {category.map((x)=>{
        return <div key={x._id} className="">
          <img src={x.image} alt=""  className='w-100' height={200}/>
          <h6 className='text-center text-light fw-bold'>{x.name}</h6>
        </div>
      })}
      </Slider>
      </div>

      </>
    )
    }
