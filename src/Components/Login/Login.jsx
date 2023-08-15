  import { useFormik } from 'formik'
  import React, { useContext, useState } from 'react'
  // formik ===> errors
  import * as yup from "yup"
  import { BaseUrl } from '../../BaseUrl/BaseUrl'
  import axios from 'axios'
  import { toast } from 'react-toastify'
  import {Helmet} from "react-helmet";
  import { DataContext } from '../../Context/ContextData'
  import { Link, useNavigate } from 'react-router-dom'
  import style from "./login.module.css"
  export default function Login({saveUserData}) {

  let Nav=useNavigate()
  let success=(x)=>toast.success(x)
  let Error=(x)=>toast.error(x)
  let [loading,setloading]=useState(false)

  let validationYup=yup.object({
  email:yup.string().email().required(),
  password:yup.string().required(),
  })
    let registerFormik=useFormik({
        initialValues:{
        
        email:'',
        password:'',
        
        } ,
      validationSchema:validationYup,
        onSubmit:(values)=>{
        setloading(true)
        axios.post(`${BaseUrl}auth/signin`,values).then(
          (data)=>{
            setloading(false)
            
            console.log(data.data.token);
            localStorage.setItem('token',data.data.token)
            if(data.status===200){
              console.log(data);
              success("Success Login",{them:'success'})
              saveUserData()
              Nav("/")
              
            }
            
            
          }
        ).catch((error)=>{
          setloading(false)
          if(error.response.status==401){
            Error(error.response.data.message,{them:"danger"})
            
          }
          
        })
  // console.log(values);
  //send to api
        }
    })
    
    // console.log(registerFormik.errors);
    // console.log(registerFormik);
  return (
    <>
    <div className={`${style.bgContainer}`}>
      <div className={`${style.bg}`}>
      <div className="w-50 m-auto my-3 py-5">
        <form onSubmit={registerFormik.handleSubmit} className='py-5'>
          
              
            <label htmlFor="email" className='fw-bolder'>Email :  </label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.email} onChange={registerFormik.handleChange} type="text" className='form-control my-3' id='email' name='email' />
            {registerFormik.errors.email && registerFormik.touched.email?<div className='alert alert-danger'>
            {registerFormik.errors.email}
            </div>:''}
            <label htmlFor="password" className='fw-bolder'>password :  </label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.password} onChange={registerFormik.handleChange} type="password" className='form-control my-3' id='password' name='password' />
            {registerFormik.errors.password  && registerFormik.touched.password?<div className='alert alert-danger'>
            {registerFormik.errors.password}
            </div>:''}
            
        <button disabled={!(registerFormik.isValid && registerFormik.dirty)} type="submit" className='btn bg-main text-light w-100'>
          {!loading?'Login':<i className='fas fa-spinner fa-spin fs-4 text-light'></i>}
          </button>
          
          <div className=" text-center">
            <Link to={"/ForgetPass"}>
          <button className="text-center btn text-light bg-primary border-0 my-5 fw-bolder">Forget Password?</button>
            </Link>
          </div>
          
        </form>
    </div>
      </div>

    </div>
    
    
    <Helmet>
      <title>Login</title>
    </Helmet>

    
    
    </>
  )
  }
