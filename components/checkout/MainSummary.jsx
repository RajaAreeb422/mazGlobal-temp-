
import Link from "next/link";

import chk from "../../styles/checkout.module.css";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import cart from '../../styles/cart.module.css'
import CheckoutItems from './items';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
const MainSummary = props => {

    const [data, setData] = useState()
    const { cartItems } = useSelector(state => state.cart);
  
    const priceTotal = useSelector(state => {
      const cartItems = state.cart.cartItems;
      let totalPrice = 0;
      if (cartItems.length > 0) {
        cartItems.map(item => totalPrice += item.price * item.count);
      }
  
      return totalPrice;
    })
  useEffect(() => {
   setData(props.shipData)
   console.log('props',props.shipData)
  }, []);
  

  return (
 <div style={{padding:'30px'}}>
  
 <div className={chk.summary}>
            <h3 className={chk.summaryTitle}>ORDER SUMMARY</h3>
            <hr/>
            <div className={chk.total}>
            <p style={{fontWeight:'300',fontSize:'16px'}}>Cart Subtotal</p>
            <p>{priceTotal} Rs</p>
            </div>

            <div className={chk.total}>
            <p style={{fontWeight:'400',fontSize:'16px'}}>Shipping Rate</p>
            <p>900 Rs</p>
            </div>
            
            <div className={chk.total}>
            <p style={{fontWeight:'300'}}>ORDER TOTAL</p>
            <p style={{fontWeight:'500'}}>{priceTotal+900} Rs</p>
            </div>
            
            <p>{cartItems.length} Items in the cart</p>
            <hr/>
            
            {cartItems.map(item => (
                  <>
                  <CheckoutItems
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    
                    count={item.count}
                    image={item.image}
                 
                  />
                  </>
                ))}
          
          <div style={{marginTop:'20px'}}>
          <h3>Shipping To</h3>
          <hr/>
          </div>
          <p>{props.shipData.first_name}{''} {props.shipData.last_name}</p>
          <p style={{marginTop:'-10px'}}>{props.shipData.address}</p>
          <p style={{marginTop:'-10px'}}>{props.shipData.city}  {''}  {props.shipData.state} {''} {props.shipData.post_code}</p>
          <p style={{marginTop:'-10px'}}>{props.shipData.country}</p>
          <p style={{marginTop:'-10px'}}>{props.shipData.phone}</p>
           {/* <div className={chk.summaryItem}>
              <span>Subtotal</span>
             
              
            </div> */}
          
          </div>
       
          
 </div>

  );
};

export default MainSummary;
