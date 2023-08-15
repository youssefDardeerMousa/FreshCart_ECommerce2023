        import React, { useState } from 'react'
        import { Link } from 'react-router-dom';
        import {Helmet} from "react-helmet";
        import style from "./Product.module.css"
        export default function Product({products,loading}) {


        return <>
        {
        <div>
        <div className="row mt-5" >
            {loading?<div className='d-flex justify-content-center align-items-center vh-100 w-100'>
                <div className="loadin">
                    <i className="fas fa-spinner fa-spin fs-1 text-light"></i>
                    
                </div>
            </div>:
            
                products.map((x)=>{
                return <div key={x._id} className={`col-md-2 my-3 card ${style.card}`}>
                    <div className="product">
                <Link to={`/Products-details/${x._id}`}>
                <img src={x.imageCover} alt="" className='w-100'/>
                <h6 className='text-center mt-2 fw-bolder text-light'>{x.title.split(' ').slice(0,2).join(' ')}</h6>
                <h6 className='text-center fw-bolder text-success'>{x.category.name}</h6>
                <div className=" d-flex justify-content-between  my-4">
                    <div className="price text-light">
                        <h6>{`${x.price} EGY`}</h6>
                    </div>
                    <div className="rate d-flex justify-content-between">
                    <i className='fas fa-star rating-color'></i>
                        <h6 className='text-light'>{x.ratingsAverage}</h6>
                        
                    </div>
                </div>
                <button className="btn bg-main text-light w-100 ">choose</button>
                </Link>
                    </div>
                
                
                </div>
            })
            
            }

            
            </div>
        </div>
            
            
            

        }
        <Helmet>
        <title>Products</title>
        </Helmet>
        </>
        }