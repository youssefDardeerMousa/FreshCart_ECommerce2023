    import React, { useContext, useEffect, useState } from 'react'
    import { DataContext } from '../../Context/ContextData';
    import style from "./Brands.module.css"
    import { Link } from 'react-router-dom';
    export default function Brands() {
    let {Brands}=useContext(DataContext);
    let [dataa,setdata]=useState([])
    async function getcategory(){
    let response=await Brands();
    console.log(response);
    setdata(response.data.data)
    }
    useEffect(()=>{
    getcategory()
    },[])
    console.log(dataa);
    return (
    <>
    {dataa.length==0? <>

    <div className="d-flex justify-content-center align-items-center vh-100 w-100">
      <div className="loading">
      <i className='fas fa-spin fa-spinner text-success fs-1'></i>
      </div>
    </div>
    </>:
                  <div  className={`${style.bgimg} pt-3`}>
                  <div className="container mt-5 py-5">
          <div className="row">
          {dataa?.map((items, index) => (
      <div key={items?._id} className="col-md-4 col-sm-12">
        <Link to={``}>
          <div className={`${style.cardbody} card my-3`}>
            <div className="card-body">
              <div>
              
                <div className={`img ${style.hidden}`}>
                
                  <img src={items.image} className={`${style.imgcover} ${style.change} w-100`} alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}

          </div>
        
      
      </div>

    </div>

    }



    </>
    )
    }
