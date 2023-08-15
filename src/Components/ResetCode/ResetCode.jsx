
import React, { useState } from 'react'
import style from ".//ResetCode.module.css"
import * as yup from "yup"
import { useFormik } from 'formik'
import { BaseUrl } from '../../BaseUrl/BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function ResetCode() {
let [loading,setloading]=useState(true)
let [loading1,setloading1]=useState(true)
let [loading2,setloading2]=useState(true)

let navigate=useNavigate()
let validationYup=yup.object({
    resetCode:yup.string().matches(/^[0-9]/,"inviled code").required()
})
var Formik=useFormik({
initialValues:{
    resetCode:""
},
validationSchema:validationYup,
onSubmit:((values)=>{
console.log(values);
setloading(false)
return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,values).then((data)=>{setloading(true);console.log(data); 
setloading1(false)
setloading2(true)
setTimeout(()=>{
navigate("/Resetpass");

},2000)
;return data}).catch((error)=>{setloading(true); setloading1(true);setloading2(false); return error})

})})

return (
<>
<div className={`${style.bg}`}>
    <div className="container py-5">
    <div className="row  py-5 mx-auto">
    <form onSubmit={Formik?.handleSubmit}>
            <div className="text-center w-50 mx-auto">
            <label htmlFor="resetCode" className='text-dark my-3 fw-bolder'>Write Your Code : </label>

            <input onBlur={Formik.handleBlur} value={Formik?.values?.resetCode} type="text" onChange={Formik?.handleChange}  name='resetCode' id='resetCode' className='form-control' placeholder='Write Your Code' />
            {Formik.errors.resetCode? <div className="alert alert-danger my-3 ">{Formik.errors.resetCode}</div> : ''} 
            <button disabled={!(Formik.dirty && Formik.isValid)}   type='submit' className="submit btn bg-main text-light my-3">{loading?'Verify Code': <i className='fas fa-spin fa-spinner fs-3 '></i>}</button>
                {loading1?'': <div className='alert bg-main text-light'>Accepted Code</div>}
                
                {loading2?'' : <div className='alert bg-danger text-light'>Error  Code</div> }
            
            </div>
        </form>
    </div>
    </div>
    
</div>
</>
)
}
