        import React, { useState } from 'react'
        import style from "./ForgetPass.module.css"
        import * as yup from "yup"
        import { useFormik } from 'formik'
        import { BaseUrl } from '../../BaseUrl/BaseUrl'
        import axios from 'axios'
        import { useNavigate } from 'react-router-dom'
        export default function ForgetPass() {
        let [loading,setloading]=useState(true)
        let [loading1,setloading1]=useState(true)
        let navigate=useNavigate()
        let validationYup=yup.object({
            email:yup.string().email().required()
        })
        var Formik=useFormik({
        initialValues:{
            email:''
        },
        validationSchema:validationYup,
        onSubmit:( (values)=>{
            // console.log(forgetPass.values); ResetCode
            let email=Formik.values;
            console.log(values);
            setloading(false)
            return  axios.post(`${BaseUrl}auth/forgotPasswords`,values).then((data)=>{console.log(data);setloading(true);setloading1(false);  
                
                setTimeout(()=>{
                    navigate("/ResetCode");
                    
                    },2000)
                return data}).catch((error)=>{console.log(error);})
        })

        })

        return (
        <>
        <div className={`${style.bg}`}>
            <div className="container py-5">
            <div className="row  py-5 mx-auto">
            <form onSubmit={Formik?.handleSubmit}>
                    <div className="text-center w-50 mx-auto">
                    <label htmlFor="email" className='text-dark my-3 fw-bolder'>Write Your Email : </label>

                    <input onBlur={Formik.handleBlur} value={Formik?.values?.email} type="text" onChange={Formik?.handleChange}  name='email' id='email' className='form-control' placeholder='Write Your Email' />
                    {Formik.errors.email? <div className="alert alert-danger my-3 ">{Formik.errors.email}</div> : ''} 
                    <button disabled={!(Formik.dirty && Formik.isValid)}   type='submit' className="submit btn bg-main text-light my-3">{loading?'Verify Email': <i className='fas fa-spin fa-spinner fs-3 '></i>}</button>
                        {loading1?'': <div className='alert bg-main text-light'>Reset code sent to your email</div>}
                    
                    </div>
                </form>
            </div>
            </div>
            
        </div>
        </>
        )
        }
