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
import fa from '../styles/faq.module.css'

const Faq = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  return (
    <>
     <Head>
        <title>FAQ</title>
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
        
       
      <div className={fa.container}>
        <div >
      <SideBar/>
      </div>
        <div style={{ margin: "62px",}}>
          <div className={fa.productshow}>
           <h1>You Have the Questions, We have theAnswers!</h1>
           <p>From common car problems to buying advice, we have compiled answers to all the questions that you may have.
Even if it is not listed here, feel free to connect with us and get your queries resolved within no time!
</p>


            <h2
             style={{paddingBottom:'10px'}}
            
            >
              F.A.Q
            </h2>

            <p style={{ fontWeight: "bold" }}>
              1- 	How can I place my order?
            </p>
            <p >
            You can add the product to your cart. Once you’ve finalized your cart products list, you can click “Buy Now” or “Check Out”
            </p>

            <p style={{ fontWeight: "bold" }}>
              2- 	What is the minimum amount of products that I can order?
            </p>
            <p >
              To be defined yet..
            </p>

            <p style={{ fontWeight: "bold" }}>
              3- How long does it take to deliver the order?
            </p>
            <p >
            To be defined yet..

            </p>

            <p style={{ fontWeight: "bold" }}>
              4- How can I track my order?
            </p>
            <p >
            To be defined yet..

            </p>
            <p style={{ fontWeight: "bold" }}>
              5- 	Can I cancel my order?
            </p>
            <p >
            To be defined yet..

            </p> 
            <p style={{ fontWeight: "bold" }}>
              6- 	What courier service do you use?
            </p>
            <p >
            To be defined yet..

            </p>
            <p style={{ fontWeight: "bold" }}>
              7-	From where is my order dispatched?
            </p>
            <p >
            To be defined yet..

            </p>

            <p style={{ fontWeight: "bold" }}>
               8-	What if I can’t see the product I Want to order?
            </p>
            <p >
            To be defined yet..

            </p>
            <p style={{ fontWeight: "bold" }}>
            9-		Are your products genuine?
            </p>
            <p >
            Yes, we ensure that the products we supply to our customers are genuine, and we offer a money back guarantee if it is proved that the parts delivered are not genuine
            </p>
            <p style={{ fontWeight: "bold" }}>
            10-	Is there any additional GST?
            </p>
            <p >
            To be defined yet..

            </p>
            
            <p style={{ fontWeight: "bold" }}>
            11-	Can I change my delivery destination once the order is dispatched?
            </p>
            <p >
            To be defined yet..

            </p>
            <p style={{ fontWeight: "bold" }}>
            12-	What is the return policy?
            </p>
            <p >
            To be defined yet..

            </p>
            <p style={{ fontWeight: "bold" }}>
            13-	Is there any refund policy?
            </p>
            <p >
            To be defined yet..

            </p>
            <p style={{ fontWeight: "bold" }}>
            14-	What payment methods do you offer?
            </p>
            <p >
            To be defined yet..

            </p>
            <p style={{ fontWeight: "bold" }}>
            15-	What is the scope of your delivery?
            </p>
            <p >
            To be defined yet..

            </p>
          </div>
        </div>
      </div>
      <Footer />
      {/* <Backtotop/> */}
    </>
  );
};

export default Faq;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const P = styled.p`
  font-weight: 400;
  margin-top:10px;
  font-family:  'Montserrat', sans-serif;
`;
const Bar = styled.div`
  display: flex;
  width: 245px;
  flex-direction: row;
  background-color: whitesmoke;
  //border-style:groove;
  border-bottom-color: whitesmoke;
  text-align: center;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Filter = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: column;

  //height:40px;
  // background-color:white;
`;

const FilterHome = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  //height:40px;
`;
const Images = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  //height:40px;
`;
const LeftBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;

  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const SearchBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  margin-bottom: 40px;
  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 16px;
  padding: 8px;
  font-weight: 300;
  font-family:  Arial, Helvetica, sans-serif;
  margin-left: 10px;
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding: 6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
`;
const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 9px;
  font-family:  Arial, Helvetica, sans-serif;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  padding: 20px;
  padding-top: 0px;
  width: 700px;
  margin-top: 0px;
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 700px) {
    width:90%;
}
@media (max-width: 300px) {
  width:90%;
  
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    display: flex;
  flex-direction: column;
}
@media (max-width: 300px) {
  display: flex;
  flex-direction: column;
  
}
`;
