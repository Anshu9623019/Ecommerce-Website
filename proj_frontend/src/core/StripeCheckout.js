import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cardHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";

const StripeCheckout = (props
//   products,
//   setReload = (f) => f,
//   reload = undefined,
) => {
    //console.log(props.products);
    const {products,reload,setReload} = props;
        console.log(products);
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalPrice = () => {
    let amount = 0;
 if(products!==undefined){
    products.map(p=> 
       amount = amount + p.price
    );
  }
    return amount;
  };

  const makePayment =  async (token) => {
    //
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
          const response = await fetch(`${API}/stripepayment`, {
              method: "POST",
              headers,
              body: JSON.stringify(body),
          });
          //console.log(response);
          //call further method
          const { status } = response;
         // console.log("status", status);

          cartEmpty(() => {
              console.log("Did we got a crasg");
          });
          setReload(!reload);
      } catch (error) {
          return console.log(error);
      }
  };

  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
        stripeKey= "pk_test_51JIU272eC9opGRXqaxkrRmL2dgJLti8jEwK1zNyBWcfahitjmWRQJHhUMdoZCA9kzlSZ0eIDryDtUwQm6vqujmt9001GBvYp1I"
        token={makePayment}
        amount={getFinalPrice() * 100}
        name="Buy t-shirt"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-success">Pay with stripe</button>
      </StripeCheckoutButton>
    ) : (
      <Link to="/sign">
        <button className="btn btn-warning">SignIn</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className="text-white">Stripe Checkout {getFinalPrice()}</h3>
      {showStripeButton()}
    </div>
  );
};

export default StripeCheckout;
