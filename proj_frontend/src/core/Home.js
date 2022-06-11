import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import "../style.css";
import {API} from "../backend";
import Base from './Base'
import Card from './Card'
import { getProducts  } from "./helper/coreapicalls";

export default function Home() {
 
  
 const [products,setProducts]  = useState([]);
 const [error,setError]  = useState(false);


 const loadAllProduct = () =>{
   getProducts().then((data)=>{
    // console.log("DATA",data)
    if(data.error){
      setError(data.error);
    }else{
      setProducts(data);
    }
   })
 }

 useEffect(() => {
  loadAllProduct();
 }, [])

  return (
    <Base title="Home page" description="Welcome to the Tshirt Strore">
    <div className="row text-center">
       <h1 className="text-white">All of T-shirt</h1>
       <div className="row">
         {products.map((product,index)=>{
           return(
             <div key={index} className="col-4 mb-4">
                <Card product={product}/>
             </div>
           )
         })}
       </div>
    </div>
    </Base>
  );
}
