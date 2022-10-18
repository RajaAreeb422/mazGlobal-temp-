import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
  Settings,FlightTakeoff,LocalPolice,Group,HighQuality,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
//import Dropdown from './Dropdown'
import { NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Mission = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  return (
    <div className={nav.mission}>
      <div className={nav.mitem}>
       <Settings style={{height:'70px',width:'70px'}}/>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Cost-effective, more value for money</p>
       <p style={{textAlign:'justify',marginLeft:'40px',fontWeight:'300'}}>
        We offer a range of products from our diversified inventory at competitive
         prices, so you get the most out of your financial resources</p>
      </div>
      </div>
      <div className={nav.mitem}>
      <VerifiedUser style={{height:'70px',width:'70px'}}/>
       {/* <LocalPolice style={{height:'100px',width:'100px'}}/> */}
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Global, you can rely on!</p>
       <p style={{textAlign:'justify',marginLeft:'40px',fontWeight:'300'}}>
       We have global outreach and credible partnership with genuine manufacturers so we can deliver you quality products across the globe
   .</p>
      </div>
      </div>
      <div className={nav.mitem}>
       <Group style={{height:'70px',width:'70px'}}/>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Quality, you can trust!</p>
       <p style={{textAlign:'justify',marginLeft:'40px',fontWeight:'300'}}>We thoroughly examine all incoming products and maintain a consistent logistic chain to source quality aftermarket  </p>
      </div>
      </div>
    </div>
  );
};

export default Mission;
