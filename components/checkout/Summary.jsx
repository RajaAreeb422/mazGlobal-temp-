
import Link from "next/link";

import chk from "../../styles/checkout.module.css";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import cart from '../../styles/cart.module.css'
import CheckoutItems from './items';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
const Summary = () => {

    const [cartItem, setPro] = useState([])
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
   
  }, []);
  

  return (
 <div style={{padding:'30px'}}>
 <div className={chk.summary}>
            <h3 className={chk.summaryTitle}>ORDER SUMMARY</h3>
            <hr/>
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

           {/* <div className={chk.summaryItem}>
              <span>Subtotal</span>
             
              
            </div> */}
          
          </div>
          <div style={{marginTop:'70px'}}>
          <h3>Shipping Method</h3>
          <hr/>

          <Table  striped bordered hover>
                <thead>
                  <tr>
                    <th>Select Method</th>
                    <th>Price</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type='radio' name='smethod'/></td>
                    <td>200 Rs</td>
                    <td>Courier</td>
                  </tr>
                  <tr>
                  <td><input type='radio' name='smethod'/></td>
                    <td>150 Rs</td>
                    <td>Store</td>
                  </tr>
                  <tr>
                  <td><input type='radio' name='smethod'/></td>
                    <td>0 Rs</td>
                    <td>Free Shipping</td>
                  </tr>
                 
                </tbody>
              </Table>
            
            </div> 
          
 </div>

  );
};

export default Summary;
