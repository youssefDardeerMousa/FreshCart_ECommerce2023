    import React, { useState, useEffect, useContext } from 'react';
    import logo from "../../freshcart-logo.svg";
    import { Link, NavLink, Navigate } from 'react-router-dom';
    import style from './Navbar.module.css';
    import { DataContext } from '../../Context/ContextData';

    const Navbar = ({userData ,logOut}) => {
    let {Count,facount,clear}=useContext(DataContext)
    const [navbarColor, setNavbarColor] = useState('#8fbbade2 ');
    const [navbarColor1, setNavbarColor1] = useState('black ');
    const [collapsed, setCollapsed] = useState(true);
     
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 550; 
      if (offset > threshold) {
        setNavbarColor('black');
        setNavbarColor1('white') 
      } else {
        setNavbarColor('#8fbbade2'); 
        setNavbarColor1('black') 

      }
    };
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('.navbar') && // Check if the click is not within the navbar
        !collapsed // Check if the menu is already expanded
      ) {
        setCollapsed(true); // Collapse the navbar menu
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
            

        window.removeEventListener('scroll', handleScroll);
      };
      
    }, []);
    useEffect(() => {
      
      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [collapsed]);
  
    
    return (
      <>

        <nav className={`navbar navbar-expand-lg   fixed-top ${style.navbar} `} style={{ backgroundColor: navbarColor ,color:navbarColor1}}>
        {/* <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">

    </div> */}
          
          <div className="container">
            <NavLink className="navbar-brand" to="">
              <img src={logo} alt="" />
            </NavLink>
            <button onClick={() => setCollapsed(!collapsed)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
            {userData!==null || localStorage.getItem(`token`)!==null? 
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            
                <li className="nav-item" >
                  <NavLink style={{color:navbarColor1}} className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={{color:navbarColor1}} className="nav-link" to="/Products">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={{color:navbarColor1}} className="nav-link" to="/Categories">Categories</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={{color:navbarColor1}} className="nav-link" to="/Brands">Brands</NavLink>
                </li>
              </ul>
              :null}
              
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">
              
                {userData==null && localStorage.getItem(`token`)==null? <>
                  <li className="nav-item">
                  <NavLink style={{color:navbarColor1}} className="nav-link text-success fw-bold" to="/Register">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={{color:navbarColor1}} className="nav-link text-success fw-bold" to="/Login">Login</NavLink>
                </li>
                </>: <>
                <li>
                  <Link to={"/Favourite"} title='wishlist' className='position-relative'>
                
                    <button type="button" className="btn border-0  position-relative">
                    <i className="fas  fa-heart text-danger fs-5 my-1 "></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
      {facount}
      <span className="visually-hidden">unread messages</span>
    </span>
    </button>
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <NavLink  to={'/Cart'} type="button" className="btn me-3 border-0 position-relative ">
                    <i className="fa-solid fa-cart-shopping text-success fs-5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge bg-success rounded-pill ">
                    {Count}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </NavLink>
                </li>
                {/* ChangePass */}
                <li className="nav-item dropdown ">
            <a className="nav-link "  href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='fas fa-bars fs-3 text-success'></i>
            </a>
            <ul className="dropdown-menu bg-success"  aria-labelledby="navbarDropdownMenuLink">
            <li className="nav-item">
                  <Link onClick={logOut} to={"/Login"}   style={{color:navbarColor1}} className="nav-link fw-bold text-dark">LogOut</Link>
                </li>
                <li className="nav-item">
                  <Link  to={"/ChangePass"}   className="nav-link fw-bold text-dark">ChangePass</Link>
                </li>
                
            </ul>
          </li>
        
              {/*  */}
              
                </>}
                
              
              
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
    };

    export default Navbar;
