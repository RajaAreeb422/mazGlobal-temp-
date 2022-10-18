import { useSelector } from 'react-redux';
import Item from './item';
import styled from "styled-components";
import { useState, useEffect } from "react";
//import { mobile } from "../../pages/responsive";
import Link from 'next/link'
import router, { useRouter } from "next/router";
import cart from '../../styles/cart.module.css'
const ShoppingCart = () => {
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

  const move=()=>{
    router.push(
      { pathname: "/products" }
     
    );
  }

  return (
    <div className={cart.container}>

     

      < div className={cart.wrapper}>
        <h1 style={{fontWeight:'300',textAlign:'center'}}>YOUR BAG</h1>
        <div className={cart.Top}>
         
            
          <button className={cart.topButton} style={{marginLeft:'10px'}} onClick={()=>move()}>CONTINUE SHOPPING</button>
          {/* <div>
            <span className={cart.topText}>Shopping Bag({cartItems.length})</span>
           
          </div> */}
          
        </div>
        <div className={cart.mobileTop}>
         {/* <div>
            <span className={cart.topText}>Shopping Bag({cartItems.length})</span>
        
          </div> */}
          {cartItems.length == 0 ?
            
            <div style={{display:'flex',flexDirection:'row',padding:'20px'}}>
              <button style={{padding:'10px'}}  disabled  type='button'>CHECKOUT NOW</button>
              <button className={cart.topButton} style={{marginLeft:'10px'}} onClick={()=>move()}>CONTINUE SHOPPING</button>
 </div>
            :
            
            <div style={{display:'flex',flexDirection:'row',padding:'20px'}}>
           <Link href="/checkout">
             <button className={cart.btn2} style={{width:'auto'}} type="filled">CHECKOUT NOW</button>
             </Link>
            <button className={cart.topButton} style={{marginLeft:'10px'}} onClick={()=>move()}>CONTINUE SHOPPING</button>
            </div>
         
          }
        </div>
        <div className={cart.bottom}>
          <div className={cart.info}>
            {cartItems.length > 0 &&
              <>
                {cartItems.map(item => (
                  <>
             
                  <Item
                    key={item.id}
                    id={item.id}
                    desc={"akgag"}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                    variant={item.variant}
                    image={item.image}
                  />
                  </>
                ))}
              </>
            }
            {cartItems.length === 0 &&
              <p>Nothing in the cart</p>
            }
          </div>
          <div className={cart.summary}>
            <h3 className={cart.summaryTitle}>ORDER SUMMARY</h3>
            < div className={cart.summaryItem}>
              <span>Subtotal</span>
             
              <span> {priceTotal.toFixed(2)} Rs</span>
            </div>
            <div className={cart.summaryItem}>
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className={cart.summaryItem}>
              <span>Shipping Discount</span>
              <span>-5.90</span>
            </div>
            <div className={cart.summaryItem}>
              <span style={{fontWeight:'600'}}>Total</span>
              <span><strong>  {priceTotal.toFixed(2)} Rs</strong></span>
            </div>
          
            {cartItems.length == 0? 
                <button  style={{width:'350px',height:'40px',margin:'auto'}} disabled  type='button'>CHECKOUT NOW</button>
              :
              <Link href="/checkout"><button className={cart.btn2}>CHECKOUT NOW</button></Link>
            }
          </div>
        </div>
      </div>

    </div>

  )
};


export default ShoppingCart














// {cartItems.length == 0 ?
            
            
//   <button className={cart.topButton} disabled  type='button'>CHECKOUT NOW</button>
// :
// <Link href="/checkout">
// <button className={cart.btn2} style={{width:'auto'}} type="filled">CHECKOUT NOW</button>
// </Link>
// }