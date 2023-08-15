        import { createContext, useEffect, useState } from "react";
        import { BaseUrl } from "../BaseUrl/BaseUrl";
        import axios from "axios";
        import jwtDecode from "jwt-decode";
        import { Navigate, useParams } from "react-router-dom";
        export let DataContext=createContext();

        export default function DataContextFunction({children}){
        let [loading1,setloading1]=useState(false)
        let [Count,setCount]=useState('0')
        // let navigate=useNavigate()
        let[cart,setcart]=useState('')
        let [cartid,setcartid]=useState('')
        let [user,setuser]=useState(null)
        let [istrue,setistrue]=useState(true)
        let [Deleted,setdeleted]=useState(true)
        let [load,setload]=useState(true)
        let [data, setdata] = useState([])
        let [dataa,setdataa]=useState([])
        let [fav,setfav]=useState(true)
        let [facount,setfacount]=useState(0)
        let [dataaa,setdataaa]=useState([])
        let [loadingcheck,setloadingcheck]=useState(true)

        let [totalCartPrice, settotalCartPrice] = useState()
        function ddeletefavourite(token,productId){
            
        return axios.delete(`${BaseUrl}wishlist/${productId}`,{headers:{token}}).then((data)=>data).catch((error)=>{console.log(error);return error})

        }
        function Subcategorey(id){
            return axios.get(`${BaseUrl}categories/${id}`).then((data)=>data).catch((error)=>error)
        }
        function favourite(token,productId){
            setfav(false)
            
            return axios.post(`${BaseUrl}wishlist`,{productId},{headers:{token}})
            }
            function getfavourite(token){
            
            
            return axios.get(`${BaseUrl}wishlist`,{headers:{token}}).then((data)=>{
                
            setdataaa(data?.data?.data)
            console.log(data?.data?.data);
            setfacount(data?.data?.data.length)
            return data
            }).catch((error)=>error)
            }
          
            function category(){
            return axios.get("https://ecommerce.routemisr.com/api/v1/categories").then((data)=>{setdataa(data.data.data); return data}).catch((error)=>error)
            }
            function Brands(){
            return axios.get("https://ecommerce.routemisr.com/api/v1/brands").then((data)=>{setdataa(data.data.data); return data}).catch((error)=>error)
            }
        function addToCart(token,productId){
            setloading1(true)

            return axios.post(`${BaseUrl}cart`,{productId},{
                headers : {token}
            }).then(
                //numOfCartItems

                (data)=>{

                    return data
                }
            ).catch((error)=>error)
        }
        function Getusercart(token){
            // setloading2(false)

            return axios.get(`${BaseUrl}cart`,{
                headers : {token}
            }).then(
                (data)=>{
                    setCount(data.data.numOfCartItems)
                    setcartid(data.data.data._id)

                    setdata(data.data?.data?.products)
                    settotalCartPrice(data?.data?.data?.totalCartPrice)
                    return data
                }
                
            ).catch((error)=>error)
            
        }
        function deleteProduct(token,id){
            setload(false)  
                return axios.delete(`${BaseUrl}cart/${id}`,{headers:{token}}).then((data)=>{ return data}).catch((error)=>error)
        }
        function clearallcart(token){
            
            return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{token}}).then((data)=>{ setCount(0);setistrue(false); return data}).catch((error)=>error)
        }
        function updateProduct(token,id,count){
            
            setCount(Count);
            setload(false) 
            
            return axios.put(`${BaseUrl}cart/${id}`,{count},{headers:{token}}).then((data)=>{  setCount(count);return data}).catch((error)=>error)
        }
        function onlinePayment(cartid,shippingAddress,token){
            setloadingcheck(false)
            Getusercart(token)
            getfavourite(token)
            return axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000/allorders`,{
                shippingAddress:shippingAddress
            },{
                headers:{token}
            }).then((data)=>{setloadingcheck(true); return data;}).catch((error)=>{setloadingcheck(true); return error})
        }
        useEffect(()=>{
            let token=localStorage.getItem("token")
            
            getfavourite(token)
        },[])
        return <DataContext.Provider value={{setdataaa,dataaa,loadingcheck,getfavourite,ddeletefavourite,setfacount,facount,setfav,favourite,fav,Brands,Subcategorey,category,setdataa,dataa,settotalCartPrice,totalCartPrice,setdata,data,clearallcart,setcart,cart,setCount,Count,load,setload,Deleted,setdeleted,setistrue,istrue,user,setuser,cartid,onlinePayment,addToCart,Count,Getusercart,loading1,setloading1,deleteProduct,updateProduct}}>
        {children}
        </DataContext.Provider>
        }


        /**
         * return axios.post('url link',{id},{
         * header : {token}
         * }).then((data)=>data).catch((error)=>error.0)
         */