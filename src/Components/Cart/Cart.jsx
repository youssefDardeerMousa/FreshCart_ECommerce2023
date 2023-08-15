        import React, { useContext, useEffect, useState } from 'react'

        import { DataContext } from '../../Context/ContextData'
        import { toast } from 'react-toastify'
        import { Link } from 'react-router-dom'
        import { Helmet } from 'react-helmet'
        import style from "./cart.module.css"

        export default function Cart() {
        let {Count,settotalCartPrice,totalCartPrice,setistrue,setdata,data,setcart,setCount,load,setload,istrue,clearallcart,Getusercart, deleteProduct, loading1, setloading1,  updateProduct } = useContext(DataContext)
        let [check, setcheck] = useState(true)
        let remove = () => toast.error("the product has been deleted")
        let removeall = () => toast.error("all products have been deleted")
        let [pr,setpr]=useState()
        let empty = () => toast.warning("Your Cart Is Empty")
        let updated=()=>toast.success("the count has been Updated")
        // let [totalCartPrice, settotalCartPrice] = useState()
        let mytaken=localStorage.getItem("token")

        async function getCart() {
        setloading1(true); // Set loading to true before fetching data
        let token = localStorage.getItem('token');
        if (token) {
        let response = await Getusercart(token);
        // if(response?.data?.data?.products.length==0)
        // {
        //     setdata([])
        //     empty({theme:"yellow"})
        // }

            if(response.status==200){
            setdata(response?.data?.data?.products)
            settotalCartPrice(response?.data?.data?.totalCartPrice)
            console.log( response?.data?.numOfCartItems);
            setCount(response?.data?.numOfCartItems)
                localStorage.setItem("pr",response?.data?.data?.products.length)

                setpr(localStorage.getItem("pr"))
            if(totalCartPrice==null){
                localStorage.setItem("pr",response?.data?.data?.products.length);
                setdata(response?.data?.data?.products)
                settotalCartPrice(response?.data?.data?.totalCartPrice)
                
            }
            console.log(response);
            }
            else{
            setdata([])
            }




        }
        setloading1(false); // Set loading back to false after data is fetched
        }
        async function clearuser() {
        let mytoken = localStorage.getItem("token");
        let response = await clearallcart(mytoken);

        console.log(response);
        if (response.status === 200) {
        setdata([]);
        settotalCartPrice(response?.data?.data?.totalCartPrice);
        setistrue(true);
        setcheck(false)
        localStorage.setItem("pr",response?.data?.data?.totalCartPrice)

        setCount(0)
        removeall({theme:"danger"})
        }
        }
        async function deleted(id) {
        let token = localStorage.getItem('token');

        if (token) {
            // Set loading to true before making the API call
        let response = await deleteProduct(token, id)

        // console.log(response);
        if (response.status === 200) {
            
            setdata(response.data.data.products)
            settotalCartPrice(response.data.data.totalCartPrice)
            Getusercart(token)
            setload(true)
            // console.log(data);
            // console.log(response.data.data._id);
            remove({ theme: "danger" })
            localStorage.setItem("pr",pr);

            // if(totalCartPrice==null){
            //     localStorage.setItem("pr",response?.data?.data?.products.length);
            //     setdata(response?.data?.data?.products)
            // settotalCartPrice(response?.data?.data?.totalCartPrice)
            
            // }
        }

            // Set loading back to false after the API call is completed
        }
        setload(true)
        }

        async function update(id, count) {
        if (count < 0) {

        return false
        } else {
        let token = localStorage.getItem('token');


        let response = await updateProduct(token, id, count)
        // if(totalCartPrice==null){
        //     localStorage.setItem("pr",response?.data?.data?.products.length);
        //     setdata(response?.data?.data?.products)
        //     settotalCartPrice(response?.data?.data?.totalCartPrice)
            
        // }
        setload(true) 
        setdata(response?.data?.data?.products)
        settotalCartPrice(response?.data?.data?.totalCartPrice)
        setCount(response?.data?.numOfCartItems)
        setcart(response?.data?.numOfCartItems)
        updated({theme:"success"})

        }
        }

        useEffect(() => {
        getCart()

        }, [])
        /**<div className="d-flex justify-content-center align-items-center vh-100 w-100">
        <div className="card bg-success text-light">
            <h3 className='text-center'>your wighlist or favourite is Empty</h3>
        </div>
        </div> */
        return (
        <>
        <div className={`${style.bgimg} py-5`}>

        {!loading1?
        <>
        {data?.length==0?<div className="d-flex justify-content-center align-items-center vh-100 w-100">
        <div className="container">
        <div className="card bg-success text-light ">
            <h3 className='text-center'>your cart is Empty</h3>
        </div>
        </div>

        </div>: <div className="container">
            
            <div className='bg-success p-3 mt-5'>
                <h3 className='mt-5 text-light'>Shop Cart</h3>
                <div className="text-center m-auto">
                {load?'':<i className='fas fa-spin fa-spinner fs-2 text-light mx-auto'></i>}

                </div>
                <h6 className="text-main my-3 text-light fw-bold">Total Cart Price : {totalCartPrice} {totalCartPrice!=null&&localStorage.getItem("pr")!="undefinrd"?"  EGP":" 0 EGP"}</h6>

                <button onClick={()=>{clearuser(mytaken)}} className=" btn btn-danger text-light">Remove All Orders <i className='fa-solid fa-trash'></i></button>
        {Count!==0&&localStorage.getItem("pr")!="undefined"?<Link  to={'/CheckOut'} className={`btn  mx-3 bg-main text-light my-3 ${check?'' : 'd-none'}`}>CheckOut</Link>:null
        }

                {!istrue?null: <>
                
                {data?.map((items) => {

                    return <>
                    {
                    
        <div key={items?._id} className="row border-bottom mt-5">
        <div className="col-md-2">
        <img src={items?.product?.imageCover} className='w-100' alt="" />
        </div>
        <div className="col-md-10 d-flex justify-content-between">
        {!istrue?'':<>
        {!items?.product?.imageCover?'':<>
        <div className="details text-light">

        <h6>{items?.product?.title.split('').slice(0,90).join('')}</h6>

        <h6 className="text-main mx-2 fw-bolder text-light"> {items?.price}EGP </h6>
        <button onClick={() => deleted(items?.product?._id)} className="text-light bg-danger btn"><>Remove <i className='fa-solid fa-trash'></i></></button>
        </div>
        <div className="operation">
        <button onClick={() => update(items?.product?._id,items?.count+1)} className="btn btn-border rounded-5 bg-primary text-light mx-2"><span className='fs-4 text-light'>+</span></button>
        {items.count}

        <button onClick={() => update(items?.product?._id,items?.count-1)} className="btn btn-border rounded-5 bg-danger text-light mx-2"><span className='fs-4'>-</span></button>
        </div>

        </>}

        </>}

        </div>

        </div>
                    }
                
                    </>
                        
                        
                        
                    
                    
                })
                
                }


        </>}
            
            

            </div>
            

        </div>}
        </>

        :
        <div className='d-flex justify-content-center align-items-center w-100 vh-100'>
            <div className="">
                <i className='fas fa-spin fa-spinner fs-1 text-light'></i>
            </div>
        </div>
        }
        </div>

                <Helmet>
                    <title>Cart</title>
                </Helmet>

        </>
        );
        }
