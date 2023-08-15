  import { useFormik } from 'formik'
  import React, { useContext, useState } from 'react'
  import * as yup from "yup"
  import { BaseUrl } from '../../BaseUrl/BaseUrl'
  import axios from 'axios'
  import { toast } from 'react-toastify'
  import {Helmet} from "react-helmet";
  import { DataContext } from '../../Context/ContextData'
  import { Link, useNavigate } from 'react-router-dom'
  import style from "./ChangePass.module.css"
  export default function ChangePass() {
  let Nav=useNavigate()
  let token=localStorage.getItem("token")
  let success=(x)=>toast.success(x)
  let Error=(x)=>toast.error(x)
  let [loading,setloading]=useState(false)

  let validationYup=yup.object({

    currentPassword:yup.string().required(),
  password:yup.string().required(),
  rePassword:yup.string().required(),
  })
    let registerFormik=useFormik({
        initialValues:{
        
        currentPassword:'',
        password:'',
        rePassword:'',
        } ,
      validationSchema:validationYup,
        onSubmit:(values)=>{
        setloading(true)
        axios.put(`${BaseUrl}users/changeMyPassword`,values,{headers:{token}}).then(
          (data)=>{
            setloading(false)
            
          
            if(data.status===200){
              console.log(data);
              success("the password has been changed",{them:'success'})
              
              Nav("/")
              
            }
            
            
          }
        ).catch((error)=>{
          setloading(false)
          
            Error("Error Password or password and repassword not matche",{them:"danger"})
            
          
          
        })
  // console.log(values);
  //send to api
        }
    })
    
    // console.log(registerFormik.errors);
    // console.log(registerFormik);
  return (
    <>
    <div className={`${style.bg} `}>
      <div className={`content`}>
      <div className="w-50 m-auto my-3 py-5">
        <form onSubmit={registerFormik.handleSubmit} className='py-5'>
          
              
            <label htmlFor="currentPassword" className='fw-bolder'>currentPassword :  </label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.currentPassword} onChange={registerFormik.handleChange} type="password" className='form-control my-3' id='currentPassword' name='currentPassword' />
            {registerFormik.errors.currentPassword && registerFormik.touched.currentPassword?<div className='alert alert-danger'>
            {registerFormik.errors.currentPassword}
            </div>:''}
            <label htmlFor="password" className='fw-bolder'>password :  </label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.password} onChange={registerFormik.handleChange} type="password" className='form-control my-3' id='password' name='password' />
            {registerFormik.errors.password  && registerFormik.touched.password?<div className='alert alert-danger'>
            {registerFormik.errors.password}
            </div>:''}
            <label htmlFor="rePassword" className='fw-bolder'>rePassword :  </label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.rePassword} onChange={registerFormik.handleChange} type="password" className='form-control my-3' id='rePassword' name='rePassword' />
            {registerFormik.errors.rePassword  && registerFormik.touched.rePassword?<div className='alert alert-danger'>
            {registerFormik.errors.rePassword}
            </div>:''}
        <button disabled={!(registerFormik.isValid && registerFormik.dirty)} type="submit" className='btn bg-main text-light w-100'>
          {!loading?'Confirm':<i className='fas fa-spinner fa-spin fs-4 text-light'></i>}
          </button>
          
          
        </form>
    </div>
      </div>

    </div>
    
    
    <Helmet>
      <title>Change Password</title>
    </Helmet>

    
    
    </>
  )
  }
