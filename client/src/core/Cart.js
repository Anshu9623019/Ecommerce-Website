import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import "../style.css";
import {API} from "../backend";
import Base from './Base'
import Card from './Card'
import { getProducts  } from "./helper/coreapicalls";
import { loadCart  } from "./helper/cardHelper";
import StripeCheckout from "./StripeCheckout";

 const Cart = () =>{
 
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)
  
  useEffect(() => {
      setProducts(loadCart())
  }, [reload])


  const loadAllProducts = () => {
      return (
          <div>
              <h2>This section is for load product</h2>
              {products.map((product,index)=>{
                  return(
                <Card key={index} product={product}
                    removeFromCart={true}
                    addtoCart={false} 
                    setReload= {setReload}
                    reload={reload}
                />
                  )
              })}
          </div>
      )
  }
  const loadCheckout = () => {
    return (
        <div>
            <h2>This section is for Checkout</h2>
        </div>
    )
}

  return (
    <Base title="Cart page" description="Ready to Checkout">
       <div className="row text-center">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">
        <StripeCheckout
            products={products}
            setReload={setReload}
        />
        </div>
       </div>
    </Base>
  );
}

export default Cart;