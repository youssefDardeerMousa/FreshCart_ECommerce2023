    import { useFormik } from 'formik'
    import React, { useContext, useEffect, useState } from 'react'
    // formik ===> errors
    import * as yup from "yup"
    import { BaseUrl } from '../../BaseUrl/BaseUrl'
    import axios from 'axios'
    import { Link, useNavigate } from 'react-router-dom'
    import 'react-toastify/dist/ReactToastify.css';
    import { toast } from 'react-toastify'
    import { DataContext } from '../../Context/ContextData'
    import { Helmet } from 'react-helmet'
    import style from "./Register.module.css"

    export default function Register() {
    let {Getusercart}=useContext(DataContext)
    let token=localStorage.getItem('token');
    const Error = (x) => toast.error(x)
    const Success = (x) => toast.success(x)
    let [loading,setloading]=useState(false)
    let Navigate=useNavigate()
    //   let checkvalidate=(values)=>{
    //     let errors={};
    //     if(!values.name){
    //       errors.name="name is Required"
    //     }
    //     else if(values.name.length>15){
    // errors.name="must be 15 characters or less"
    //     }
    //     if(!values.email){
    //       errors.email="email is Required"
    //     }
    //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    // errors.email="invalid email"
    //     }
    //     if(!values.password){
    //       errors.password="password is Required"
    //     }
    //     else if (!/^[A-za-z0-9]{5,}$/i.test(values.password)){
    // errors.password="invalid password"
    //     }
    //     if(!values.repassword){
    //       errors.repassword="repassword is Required"
    //     }
    //     else if (values.repassword != values.password){
    // errors.repassword="password and repassword not match"
    //     }
    //     if(!values.phone){
    //       errors.phone="phone is Required"
    //     }
    //     else if (!/^\+?[0-9()-.\s]{11,20}$/i.test(values.phone)){
    // errors.phone="invalid Phone"
    //     }
    //     return errors
    //   }
    let validationYup=yup.object({
    name:yup.string().min(3).max(30).required("Please , Enter Your Name"),
    email:yup.string().email().required(),
    password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,"Minimum fife characters, at least one uppercase letter, one lowercase letter and one number:").required(),
    rePassword:yup.string().oneOf([yup.ref('password')],"password and repassword must match").required(),
    phone:yup.string().matches(/^\+?[0-9()-.\s]{11,20}$/,"Phone field must be numbers").required()
    })
    let registerFormik=useFormik({
        initialValues:{
        name:'',
        email:'',
        password:'',
        rePassword:'',
        phone:''
        } ,
      validationSchema:validationYup,
        onSubmit:(values)=>{
        setloading(true)
        axios.post(`${BaseUrl}auth/signup`,values).then(
          (data)=>{
            setloading(false)
            if(data.status==201){
              console.log(data);
              Success("Success",{them:'success'})
              Navigate("/Login")
            }
            
            
          }
        ).catch((error)=>{
          setloading(false)
          if(error.response.status==409){
            Error(error.response.data.message,{them:'danger'})
            
          }
          
        })
    // console.log(values);
    //send to api
        }
    })
    useEffect(()=>{
    Getusercart(token)
    },[])
    // console.log(registerFormik.errors);
    // console.log(registerFormik);
    return (
    <>

          <div className={`${style.bg}`}>
          <div className="w-50 m-auto my-3 py-5">

    <form onSubmit={registerFormik.handleSubmit} className='py-4' >
        <label htmlFor="name" className=' fw-bolder'>Name </label>
        <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.name} onChange={registerFormik.handleChange} type="text" className='form-control my-3' id='name' name='name' />
        {registerFormik.errors.name && registerFormik.touched.name?<div className='alert alert-danger'>
        {registerFormik.errors.name}
        </div>:''}
          
        <label htmlFor="email" className=' fw-bolder' >Email </label>
        <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.email} onChange={registerFormik.handleChange} type="text" className='form-control my-3' id='email' name='email' />
        {registerFormik.errors.email && registerFormik.touched.email?<div className='alert alert-danger'>
        {registerFormik.errors.email}
        </div>:''}
        <label htmlFor="password" className=' fw-bolder'>Password </label>
        <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.password} onChange={registerFormik.handleChange} type="password" className='form-control my-3' id='password' name='password' />
        {registerFormik.errors.password  && registerFormik.touched.password?<div className='alert alert-danger'>
        {registerFormik.errors.password}
        </div>:''}
        <label htmlFor="rePassword" className=' fw-bolder'>RePassword </label>
        <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.rePassword} onChange={registerFormik.handleChange} type="password" className='form-control my-3' id='rePassword' name='rePassword' />
        {registerFormik.errors.rePassword  && registerFormik.touched.rePassword?<div className='alert alert-danger'>
        {registerFormik.errors.rePassword}
        </div>:''}
        
        
        <label htmlFor="phone" className=' fw-bolder'>Phone </label>
        <input onBlur={registerFormik.handleBlur} value={registerFormik.values.phone} onChange={registerFormik.handleChange} type="text" className='form-control my-3' id='phone' name='phone' />
        {registerFormik.errors.phone  && registerFormik.touched.phone ?<div className='alert alert-danger'>
        {registerFormik.errors.phone}
        </div>:''}
    <button disabled={!(registerFormik.isValid && registerFormik.dirty)} type="submit" className='btn bg-main text-light w-100'>
      {!loading?'Register':<i className='fas fa-spinner fa-spin fs-4 text-light'></i>}
      </button>

    </form>
    </div>
    <div className=" card bg-success d-flex justify-content-center align-items-center w-100 vh-100 py-5">
    <div className="footer   ">
    <footer className={`${style.footer} card-body text-light pt-5`}>
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 mb-4 text-center ">
            <h3 className='fw-bolder'>About Us</h3>
            <p>
              Welcome to Fresh Cart! We provide the freshest products delivered right to your doorstep.
            </p>
          </div>
          <div className="col-lg-4 mb-4 text-center">
            <h3 className='fw-bolder'>Contact Us</h3>
            <p>
              Email: Youssef.Dardeer.Mousa@gmail.com
              <br />
              Phone: 01009024483
              <br/>
              Adress: Qena,Dishna,Egypt
            </p>
            
          </div>
          <div className="col-lg-4 mb-4 text-center">
            <h3 className='fw-bolder'>Follow Us</h3>
            <div className="d-flex justify-content-start justify-content-center">
              <Link to={""} className="me-3">
                <i className="fab fa-facebook-f "></i>
              </Link>
              <Link to={""} className="me-3">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to={""} className="me-3">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to={""} className="me-3">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3 fs-4">
        &copy; {new Date().getFullYear()} Fresh Cart. All rights reserved.
      </div>
    </footer>
    </div>
    </div>

    </div>


    <Helmet>
      <title>Register</title>
    </Helmet>

    </>
    )
    }
