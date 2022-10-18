import { useEffect, useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
  Settings
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Navbar, Nav, } from "react-bootstrap";
import { NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const AboutUs= () => {
  
  return (
    <>
    <div className={nav.about}>
        <img style={{width:'50%'}} src='https://www.chanceparts.com/Uploads/flash/60cc47be9bd70.jpg'/>
      <div className={nav.mitem2}>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'24px',marginLeft:'10px',color:'white'}}>
        About Maz Global – Keeping Your Fleet Up & Moving!
</p>
       <p style={{alignItems:'justify-content',marginLeft:'10px',color:'white',fontWeight:'300'}}>
       MAZ Global is an online auto parts store, operating as a global wholesale and retail provider of aftermarket auto parts. We are the trusted suppliers of automotive spare parts with a focus on delivering high-quality goods at competitive prices.
To get your business on the move, you only need to connect with us!


       </p>
       <button  className={nav.bttn} style={{height:'40px',width:'200px',marginTop:'40px',marginLeft:'10px',borderRadius:'4px',border:'0.095rem ridge lightgrey'}}><strong>READ MORE {'>>'}</strong></button> 
      </div>
      </div>
      
    </div>
    <div className={nav.about2}>
        <img style={{width:'100%'}} src='https://www.chanceparts.com/Uploads/flash/60cc47be9bd70.jpg'/>
      <div className={nav.mitem3}>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'24px',color:'white'}}>ABOUT US</p>
       <p style={{textAlign:'justify',color:'white',fontWeight:'300'}}>MAZ 
        Global  is a team of people working in truck spare parts more than 15 years.
          With the development truck parts industry and technology in the last decade in China,
           we are also growing up with them. We save a wide and close purchase sources after years of
            cooperation with many truck parts manufacturers.We continuously strive to source new products 
            of high quality and extremely competitive prices to satisfy our wide range of customers throughout all around the world.</p>
       <button className={nav.bttn} style={{height:'40px',width:'200px',marginTop:'40px',marginLeft:'10px',borderRadius:'4px',border:'0.095rem ridge lightgrey'}}><strong>READ MORE {'>>'}</strong></button> 
      </div>
      </div>
      
    </div>
    </>
  );
};

export default AboutUs;
