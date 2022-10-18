import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import styled from "styled-components";


import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined,Category, Email,Person,Message, FaceTwoTone,LocationCity } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SideBar from "../components/SideBar";
import Image from "next/image";
import ft from '../styles/feature.module.css'
import tr from '../styles/contact.module.css'
import track from '../styles/track.module.css'
import Head from "next/head";
const Terms=()=>{
  useEffect(() => {
    // alert('Finished loading');
  }, []);
return(
    <>
     <Head>
        <title>Terms and Conditions</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <Navbar2/>
    <Navbar/>
    <Image src='/6wheeler.jpeg'  
       width="100%" height="28%" layout="responsive"
       
      />
      <div style={{textAlign:'center',padding:'20px'}}>
       <h2>Terms and Conditions</h2>
       <p className={tr.text}>
       Welcome to Maz Global. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
       </p>
      </div>

      <div className={track.container}>
    <div className={track.text}>
    <h2>
    Your Agreement
    </h2>
    <p >
    By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
  
    </p>
    
    <h2>
    Privacy
    </h2>
    <p >
    Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.  
    </p>
    
    </div>

    <div className={track.text}>
      
    <h2>
    General
    </h2>  
    <p>
    A. If any provision of these Terms and Conditions is held to be invalid or unenforceable,
     the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable),
      and the remaining provisions shall be enforced. Headings are for reference purposes only and 
      in no way define, limit, construe or describe the scope or extent of such section. 
      Our failure to act with respect to a breach by you or others does not waive our right
       to act with respect to subsequent or similar breaches. These Terms and Conditions set 
       forth the entire understanding and agreement between us with respect to the subject matter
        contained herein and supersede any other agreement, proposals and communications, written 
        or oral, between our representatives and you with respect to the subject matter hereof,
         including any terms and conditions on any of customer  documents or purchase orders.

    </p>
    </div>
    
    </div>
    
<Footer/>
</>
);
};
export default Terms;

