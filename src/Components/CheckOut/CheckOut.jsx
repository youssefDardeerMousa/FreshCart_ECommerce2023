        import { useFormik } from 'formik'
        import { useContext, useEffect, useState } from 'react'
        import * as yup from 'yup'
        import { DataContext } from '../../Context/ContextData'
        import { Helmet } from 'react-helmet'
        import style from "./Checkout.module.css"
        export default function CheckOut() {
        let {onlinePayment,loadingcheck,cartid,Getusercart}=useContext(DataContext)
        let [mytoken,setmytoken]=useState()
        async function payment(values){
        let token =localStorage.getItem("token")
        setmytoken(token)
        let response=await onlinePayment(cartid,values,token)
        if(response.data.status=='success'){
            console.log(response);
            console.log(response.data.session.url);
            console.log(cartid);
            
            window.location.href=response.data.session.url
        }

        }
        let validationYub=yup.object({
            details:yup.string().min(20).matches(/^[\w\s\d.,!@#$%^&*()_+{}\[\]:;"'<>/\\?|-]+$/,"Inviled Details").required(),
            phone:yup.string().matches(/^\+?[0-9]*[ ]?[0-9]+[- ]?[0-9]+[- ]?[0-9]+$/,"Inviled Phone").required(),
            city:yup.string().min(3).matches(/^[\w\s\d.,!@#$%^&*()_+{}\[\]:;"'<>/\\?|-]+$/,"Inviled City").required()
        })
        let payFormik=useFormik({
            initialValues:{
                details:'',
                phone:'',
                city:''
            },
            validationSchema:validationYub,
            onSubmit:payment 
        })
        useEffect(()=>{
        Getusercart(mytoken)
        },[])
        return (
        <>
        <div className={style.bg}>
        <div className=" d-flex justify-content-center align-item-center vh-100 w-100  pt-4">
        <div className="w-50 m-auto">
            <form onSubmit={payFormik.handleSubmit}>
            <label htmlFor="details">details</label>
        <input onBlur={payFormik.handleBlur} value={payFormik.values.details} onChange={payFormik.handleChange}  type="text" className='form-control my-3' id='details' name='details' />
        {(payFormik.errors.details&& payFormik.touched.details )?    <div className="alert alert-danger">{payFormik.errors.details}</div>
        :''}
        <label htmlFor="phone">phone</label>
        <input onBlur={payFormik.handleBlur}  onChange={payFormik.handleChange} value={payFormik.values.phone} type="text" className='form-control my-3' id='phone' name='phone' />
        {(payFormik.errors.phone&& payFormik.touched.phone)?    <div className="alert alert-danger">{payFormik.errors.phone}</div>
        :''}
        <label htmlFor="city">city</label>
        <input onBlur={payFormik.handleBlur} onChange={payFormik.handleChange} value={payFormik.values.city} type="text" className='form-control my-3' id='city' name='city' />
        {(payFormik.errors.city&& payFormik.touched.city)?<div className="alert alert-danger">{payFormik.errors.city}</div>
        :''}
        <button disabled={!(payFormik.dirty && payFormik.isValid)} type='submit' className="btn bg-main text-light w-100">{loadingcheck?'Pay Now':<i className='fas fa-spin fa-spinner fs-2 text-light'></i>}</button>
            </form>
            
        </div>
        </div>

        </div>


        <Helmet>
        <title>CheckOut</title>
        </Helmet>

        </>
        )
        }
