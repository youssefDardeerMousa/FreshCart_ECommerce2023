    import React from 'react'
    import Slider from "react-slick";
    import img1 from "../../images/1.png"
    import img2 from "../../images/2.jpeg"
    import img3 from "../../images/3.jpeg"
    import img4 from "../../images/4.jpeg"
    import img5 from "../../images/5.jpeg"
    import img6 from "../../images/6.jpeg"
    import img7 from "../../images/assortment-citrus-fruits.png"
    import img8 from "../../images/banner-4.jpeg"
    import img9 from "../../images/blog-img-1.jpeg"
    import img10 from "../../images/blog-img-2.jpeg"
    import style from "./Main.module.css"


    export default function Mainslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
        };
    return (
    <>
    <div className={`${style.bgimg}`}>
    <div className="my-5 pt-3 myimg">
        
        <Slider {...settings} >
            <img src={img1} alt="" />
            <img src={img2}  alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />


        </Slider>
        </div>
    </div>


    </>
    )
    }
