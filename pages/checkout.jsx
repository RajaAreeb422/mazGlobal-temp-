import styled from "styled-components";

import Navbar2 from "../components/Navbar2";

import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import ShippingData from "../components/checkout/ShippingData";
import Summary from "../components/checkout/Summary";
import BillingData from "../components/checkout/BillingData";
import MainSummary from "../components/checkout/MainSummary";
import { HomeOutlined, Category, CheckOutlined } from "@material-ui/icons";
import Navbar from "../components/Navbar";

import Image from "next/image";
import Head from "next/head";
import Script from 'next/script'
import chk from "../styles/checkout.module.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Checkout = () => {

    const [ship,setShip]=useState(true)
    const [shipAddress,setShipAddress]=useState({})

    const handleShipping = child => {
        setShipAddress({ ...child });
       
        setShip(false)
      };



  return (
    <>
      <Head>
        <title>Checkout</title>
      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script src='https://www.paypal.com/sdk/js?client-id=AQr21HoLNaAWevoW5Fh2VjicnHu3LN0rGBb4XvTcZ4SysN6dY6qv6lxx_cYrn6aGuAqhjNiP-823c_K3'/>
      <Navbar2 />
      <Navbar />
      <Image src='/6wheeler.jpeg'  
       width="100%" height="28%" layout="responsive"
       
      />

  {ship &&  
  <>  
<div className={chk.pBar}>
      <ProgressBar
        
        percent={50}
        filledBackground="linear-gradient(to right, red,rgba(67, 143, 173, 0.933))"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
             src="data:image/png;base64,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"
             />
             )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
             src="data:image/png;base64,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"
             />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="45"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUn2dfvtJje9aLYVnBmsDH3sOclYqJ0HorAQ&usqp=CAU"
             />
          )}
        </Step>
      </ProgressBar>
      </div>
      <div style={{display:'flex',width:'40%',marginLeft:'auto',marginRight:'auto',justifyContent:'space-between'}}>
        <p>Shipping</p>
        <p>Review and Payment</p>
       </div>
      <div className={chk.mainDiv}>
      <ShippingData shippingCall={handleShipping} />
      <Summary/>
      
      </div>
 
         </>
          }
          {ship==false?
          <>
          <div className={chk.pBar}>
      <ProgressBar
       
        
        percent={100}
        filledBackground="linear-gradient(to right, red,rgba(67, 143, 173, 0.933))"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
              src="data:image/png;base64,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"
             />
          )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
             src="data:image/png;base64,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"
             />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="45"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUn2dfvtJje9aLYVnBmsDH3sOclYqJ0HorAQ&usqp=CAU"
              />
          )}
        </Step>
      </ProgressBar>
      </div>
      <div style={{display:'flex',width:'40%',marginLeft:'auto',marginRight:'auto',justifyContent:'space-between'}}>
        <p>Shipping</p>
        <p>Review and Payment</p>
       </div>
      
     
          <div className={chk.mainDiv}>
          <BillingData shipData={shipAddress}/>
          {shipAddress!=undefined?
            <MainSummary shipData={shipAddress}/>:''
          }
          
          </div>
          </>:''
          }
      <Footer />
    </>
  );
};
export default Checkout;


