import styled from "styled-components";

import Navbar2 from "../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined, Category } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Head from "next/head";
import Mission from "../components/Mission";
import Brands from "../components/Brands";
import track from '../styles/track.module.css'
// import "react-step-progress-bar/styles.css";
// import { ProgressBar,Step } from "react-step-progress-bar";

const Track = () => {
 
    return(
    <>
     <Head>
        <title>Track Order</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar2 />
      <Navbar />
      <Image src='/6wheeler.jpeg'  
       width="100%" height="28%" layout="responsive"
       
      />
{/* 
<ProgressBar
width="80%"
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>

  */}


     <center><h2 style={{padding:'50px'}}>Track Your Order</h2></center> 
    <div className={track.container}>
    <div className={track.text}>
    <h2>
    Order tracking is Just Few Clicks Away!
    </h2>
    <p >
    We understand that you want to know where your order is and when it will be delivered. 
     Track your order to get up-to-date information on your order.
  
    </p>
    
    
    <input className={track.input} type='text' placeholder="Tracking Id"></input>
    <input className={track.input} type='text' placeholder="Order Id"></input>
    <input className={track.input} type='tel' placeholder="Mobile No"></input>
    <button className={track.btn}>Track</button>
    
    </div>

    <div className={track.text}>
      
    <h2>
    Quality Automotive Spare Parts Delivered at Your Doorstep!
    </h2>  
    <p>
    When you choose us, all you need to do is register on our website and place an order for the spare parts you require. We will deliver the product to your doorstep without you having to experience the hassle of visiting warehouses for getting the products. 
Just sit back to get your products delivered from wherever you want to anywhere you want!

    </p>
    </div>
    
    </div>
    
    <Footer/>
    </>
    )
}
export default Track;

const Container1 = styled.div`
    background-color:white;
    margin-top:98px;
    
  `;
  const Div= styled.div`
  display:flex;
  flex-direction:column;
  width:600px;
  margin-left:auto;
  margin-right:auto;
  
  `;
   const H2 = styled.h4`
   color:black;
   margin-top:130px;
   margin-bottom:30px;
   text-align:center;
   
   `;
    const P = styled.div`
    color:grey;
    text-align:center;
    margin-bottom:20px;
    
    `;
     const Input = styled.input`
     
     padding:4px;
     border-radius:4px;
     border-style:groove;
     height:40px;
     margin-top:20px;
     margin-bottom:10px;
     
     `;

const Button1 = styled.button`
width:200px;
background-color:black;
color:white;
padding:10px;
margin-left:auto;
margin-right:auto;
margin-bottom:30px;
margin-top:20px;
`;