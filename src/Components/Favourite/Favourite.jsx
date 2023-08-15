        import React, { useContext, useEffect, useState } from 'react'
        import style from "./favourite.module.css"
        import { DataContext } from '../../Context/ContextData'
        import { NavLink } from 'react-router-dom';
        import { toast } from 'react-toastify';
        import { Helmet } from 'react-helmet';
        export default function Favourite() {
        let {setfav,setdataaa,dataaa,ddeletefavourite,setfacount,fav,getfavourite}=useContext(DataContext)
        //deletefavourite
        let deltoast=(x)=>toast.success(x)

        async function get(){
            let token=localStorage.getItem("token");

            let response=await getfavourite(token)
            console.log(response);
            setfav(true)
            
            setdataaa(response?.data?.data)
            console.log(response?.data?.data);
            setfacount(response?.data?.data.length)
            
        }
        useEffect(()=>{
            get()
        },[])
        async function myddeletefavourite(myid){
            try {
                let getid=myid;
                console.log(getid);
                let token=localStorage.getItem("token");
                    let response=await ddeletefavourite(token,getid);

                    console.log(response);
                    get()
                    if(response.status==200){
                    
                    deltoast("The Product deleted from favourite")
                    //  setfacount(response?.data?.data.length)
            
                    }
            } catch (error) {
                console.log(error);
            }

        }
        return (
        <>
        {fav?<div className={`${style.bgimg} py-5`}>
            {dataaa.length==0?<>
            <div className="d-flex justify-content-center align-items-center vh-100 w-100">
                <div className="container">
                <div className="card bg-success text-light">
                    <h3 className='text-center'>your wighlist or favourite is Empty</h3>
                </div>
                </div>
                
            </div>
            </>:<div className="container py-5 ">
                <h3 className='mb-4 text-danger text-center fw-bold'>Your Favourite Products <i className='fas fa-heart text-danger'></i> </h3>
                <div className="row my-3 ">
                {dataaa.map((items,index)=>{
                return<>

                    <div key={index}  className={`col-md-4 col-sm-12 my-2 border ${style.bghover}`} >
                    
                    <img key={index} src={items?.imageCover} className={`${style.img} w-100 py-2`} /> 
                    <div key={index} className="text-center">
                    <p className='fw-bolder text-light'><span className='fw-bold text-main'>Brand Name :</span> {items?.brand?.name}</p>
                    <p className='text-main fw-bolder'>Brand Logo : <img src={`${items?.brand?.image}`} style={{"height":"50px","width":"100px","objectFit":"cover"}} alt="" /></p>
                    <p className='fw-bolder text-light'><span className='fw-bold text-main'>category Name :</span> {items?.category?.name}</p>
                    <p className="text-light fw-bolder"><span className='text-main'>description : </span>{items?.description?.split('').slice(0,20).join('')}</p>
                    <p className="text-light fw-bolder"><span className='text-main'>price : </span>{items?.price} EGP</p>
                    <p className="text-light fw-bolder"><span className='text-main'>priceAfterDiscount : </span>{items?.priceAfterDiscount==null?items?.price:items?.priceAfterDiscount} EGP</p>
                    <p className="text-light fw-bolder"><span className='text-main'>ratingsAverage : </span>{items?.ratingsAverage} <i className='fas fa-star text-warning'></i></p>
                    </div>
                    <button onClick={() => {

        myddeletefavourite(items?._id);
        }} className="btn btn-danger w-100 my-3">{fav?'Delete From Favourite':<i className='fas fa-spin fa-spinner fs-2'></i>}</button>
                </div>
                
                </>
                
                })}
                </div>
            </div>}
            
        </div>: <>
        <div className="d-flex justify-content-center align-items-center vh-100 w-100">
            <div className="loading">
                <i className='fas fa-spin fa-spinner text-main fs-1'></i>
            </div>
        </div>


        </>}
        <Helmet>
            <title>Favourite</title>
        </Helmet>
            
        </>
        )
        }
