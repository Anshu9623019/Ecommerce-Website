import React,{useEffect,Fragment} from 'react'
import {Link,useLocation,useNavigate} from "react-router-dom";
import { signout,isAuthenticated } from "../auth/helper/index";


const currentTab = (location,path) =>{
    if(location.pathname===path){
        return{color : "#00BC40"}
    }else{
        return {color:"#FFFFFF"}
    }
}


export default function Menu() {
    const navigate = useNavigate();
    let location = useLocation();
    useEffect(()=>{  
       // console.log(location.pathname);
    },[location])
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style = {currentTab(location,"/cart")} className="nav-link" to="/cart">
                        Cart
                    </Link>
                </li>
                <li  className="nav-item">
                    <Link style = {currentTab(location,"/")} className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                 {isAuthenticated() &&isAuthenticated().user.role ===0 && (
                    <li  className="nav-item">
                    <Link style = {currentTab(location,"/user/dashboard")} className="nav-link" to="/user/dashboard">
                        Dashboard
                    </Link>
                    </li>)}

                {isAuthenticated() && isAuthenticated().user.role===1 && (
                    <li className="nav-item">
                    <Link style = {currentTab(location,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                        A. Dashboard
                    </Link>
                </li>
                )}    
                {!isAuthenticated() && (
                <Fragment>
                <li className="nav-item"  to="/" > 
                    <Link  style = {currentTab(location,"/signin")} className="nav-link" to="/signin">
                        Signin
                    </Link>
                </li>
                <li className="nav-item"  >
                    <Link style = {currentTab(location,"/signup")} className="nav-link" to="/signup">
                        Signup
                    </Link>
                </li>
                </Fragment> 
                )}
                {isAuthenticated() && (
                <li className="nav-item"  >
                    <span 
                    className="nav-link text-warning"
                    onClick={()=>{
                        signout(()=>{
                            navigate("/")
                        })
                    }}>
                    Signout
                    </span>
                </li> 
                )}
            </ul>
        </div>
    )
}



