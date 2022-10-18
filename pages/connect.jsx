import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

// import { mobile } from "../pages/responsive";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/footer/Footer";
import { Button } from "reactstrap";
import Head from 'next/head'

import track from '../styles/connect.module.css'
import fot from "../styles/footer.module.css"
import Image from 'next/image'
const Connect = () => {
return(
    <>
      <Head>
        <title>Connect</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar2/>
    <Navbar/>
 
    <Image src='/mg3.jpeg' 
       width="100%" height="30%" layout="responsive"
       
      />

     <center><h2 style={{padding:'50px'}}>Connect With Us</h2></center> 
    <div className={track.container}>
    <div className={track.text}>
    <img src='/wwd.jpeg' width='100%' height='100%'/>
    
    </div>

    <div className={track.text1}>
      
    <h2>
    Location
    </h2> 
    <p>
    10 Downing Street III LONDON 
    </p> 
    <p>
    When you choose us, all you need to do is register on our website and place an order for the spare parts you require. We will deliver the product to your doorstep without you having to experience the hassle of visiting warehouses for getting the products. 
Just sit back to get your products delivered from wherever you want to anywhere you want!

    </p>
    
    <h2>
    Follow Us
    </h2> 

    <div className={fot.column}>
			{/* <Heading>Social Media</Heading> */}
			<div className={fot.footlink} href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<img src="./fb.svg" alt="" style={{ width: "30px",marginLeft:'0px' }} />
				<img src="./you.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./insta.svg" alt="" style={{ width: "30px" ,marginLeft:'20px'}} />
				</span>
			</i>
			</div>
			
		</div>

    <p style={{marginTop:'40px'}}><small>@2022 Privacy Policy</small></p>
    </div>
    
    </div>
    
    <Footer/>
    </>
)

}
export default Connect;
