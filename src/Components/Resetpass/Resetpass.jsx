
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
    import style from "./Resetpass.module.css"
    export default function Resetpass() {
    let Nav=useNavigate()
    let success=(x)=>toast.success(x)
    let Error=(x)=>toast.error(x)
    let [loading,setloading]=useState(false)

    let validationYup=yup.object({
    email:yup.string().email().required(),
    newPassword:yup.string().required(),
    })
      let registerFormik=useFormik({
          initialValues:{
          
          email:'',
          newPassword:'',
          
          } ,
        validationSchema:validationYup,
          onSubmit:(values)=>{
          setloading(true)
          axios.put(`${BaseUrl}auth/resetPassword`,values).then(
            (data)=>{
              setloading(false)
              
            
              if(data.status===200){
                console.log(data);
                success("Success",{them:'success'})
                
                Nav("/Login")
                
              }
              
              
            }
          ).catch((error)=>{
            setloading(false)
            if(error.response.status==401){
              Error("Error",{them:"danger"})
              
            }
            
          })

          }
      })

    return (
      <>
      <div className={`${style.bg}`}>
        <div className={`${style.bg}`}>
        <div className="w-50 m-auto my-3 py-5">
          <form onSubmit={registerFormik.handleSubmit} className='py-5'>
            
                
              <label htmlFor="email" className='fw-bolder'>Email :  </label>
              <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.email} onChange={registerFormik.handleChange} type="text" className='form-control my-3' id='email' name='email' />
              {registerFormik.errors.email && registerFormik.touched.email?<div className='alert alert-danger'>
              {registerFormik.errors.email}
              </div>:''}
              <label htmlFor="newPassword" className='fw-bolder'>newPassword :  </label>
              <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.newPassword} onChange={registerFormik.handleChange} type="password" className='form-control my-3' id='newPassword' name='newPassword' />
              {registerFormik.errors.newPassword  && registerFormik.touched.newPassword?<div className='alert alert-danger'>
              {registerFormik.errors.newPassword}
              </div>:''}
              
          <button disabled={!(registerFormik.isValid && registerFormik.dirty)} type="submit" className='btn bg-main text-light w-100'>
            {!loading?'Confirm':<i className='fas fa-spinner fa-spin fs-4 text-light'></i>}
            </button>
            
            
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
