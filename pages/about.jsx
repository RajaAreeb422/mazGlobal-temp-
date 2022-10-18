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
import Link from "next/link";
import Mission from "../components/Mission";
import Brands from "../components/Brands";
import about from '../styles/aboutus.module.css'
import { useRouter } from 'next/router';
//import axios from "axios";
//import Pagination from '@material-ui/lab/Pagination';

const About = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [color, setColorProduct] = useState([]);
  const [spro, setSizeProduct] = useState([
    {
      id: 1,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/1/1/11979.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 2,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001420-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 3,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001272_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 4,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700185_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 5,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 6,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012367K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 7,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012736-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 8,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 9,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012368K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
  ]);
  const router = useRouter();
  useEffect(() => {
    // const config = {
    //     headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token'),
    //     },
    //   };
    //     axios.get( `http://95.111.240.143:8080/ecom-api/products/page/${1}`)//api url
    //    .then(resp =>{//calling url by method GET
    //          setItems(resp.data.data)
    //             setSizeProduct(resp.data.data)
    //         }).catch(err=>console.log(err))//setting response to state posts
  }, []);

  const handlePageChange = (event, value) => {
    //   setPage(value);
    //   console.log("val",value)
    //   axios.get(`http://95.111.240.143:8080/ecom-api/products/page/${value}`)
    //   .then(res=>{
    //     console.log('data',res.data.data)
    //     setSizeProduct(res.data.data)
    //   }) .catch(err=>console.log(err))
  };

  const move = () => {
    router.push('/contact')
  }
  function Sort(slist, value) {
    //   var cl=[]
    //     slist.map(it=>{
    //       it.variants.map(v=>{
    //            v.values.map(sz=>{
    //              if(sz==value)
    //              {
    //              cl.push(it)
    //              }
    //            })
    //       })
    //     })
    //     setSizeProduct(cl)
  }
  return (
    <>
     <Head>
        <title>About Us</title>
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
      
      <div className={about.container}>
       
          <div className={about.productshow}>
            <h2 style={{color:'rgba(67, 143, 173, 0.933);'}} >Welcome to MAZ Global – Your Trusted Online Auto Parts Store!</h2>
            <p className={about.pp}>
            We are the wholesale and retail provider in the UK and across Europefor a wide range of automotive parts. We stock and supply the aftermarket parts in various categories including engine drivetrain, air compressors, truck clutches, airbrake systems, and a lot more. 
We are committed to deliver you quality by providing genuine products and services as well as implementing the industry standards to ensure customer satisfaction.
MAZ Global is way more than an aftermarket spare parts store as we provide you with authentic products at your doorstep ensuring quick delivery. 
We are here to locate and deliver the right product at the right time. 
We have access to credible suppliers in China, Japan and Europe and deliver our products across the globe.
We connect with our suppliersto get you your desired product via our fast sourcing engine.
Our warehouses are located in the UK and UAE.We firmly believe that our experienced and helpful staff will answer all of your questions.
Our product selection now includes all of the fast-moving items to keep your fleet up and running.
To get your business on the move, you only need to connect with us!

            </p>
            <Link href='/contact'><p className={about.btn}>Contact Us Now</p></Link>
           
          </div>
          {/* <div className={about.largeView} >
          <img src='/6wheeler.jpeg' 
          style={{width:"100%" ,height:"95%",paddingLeft:'10px'}}
          />
          </div> */}
         
        {/* </div> */}
        
      </div>
      <div className={about.striveBlock}>
        <img className={about.imgView} src='/mg1.jpeg' style={{height:'350px'}}/>
      
  
        
     
     
        <div className={about.para}>
       <h2 style={{color:'rgba(67, 143, 173, 0.933);'}}>Striving to Ensure That We Deliver You the Best of Best!</h2> 
       <p>With the extensive combined knowledge and technical acumen of our professionals gained through years of experience, we serve you with a customer-focused approach. 
Our team always goes the extra mile to help our customers get their vehicles back on the road as soon as possible. 
We make sure you get the right parts as soon as possible – and then deliver them to you, no matter when or where you need them.
   </p>
    </div>
    </div>
    
    
      <Mission/>
    <div className={about.mission} style={{padding:'50px'}}>
     <h2 style={{color:'rgba(67, 143, 173, 0.933);'}}>
     Our Vision & Mission 
     </h2>
     <p>
     Our mission is offering our customers a smooth, hassle-free and high quality sourcing experience, delivering our products in the United Kingdom and across Europe. 
We envision expanding our inventory to deliver high quality products to a wide spectrum of industries and broaden the scope by delivering across the globe.

      </p> 
    </div>

    <div className={about.mission} style={{padding:'30px'}}>
     <h2 style={{color:'rgba(67, 143, 173, 0.933);'}}>
     Our Team of Experienced Professionals
     </h2>
     <div className={about.team} >
     <div style={{margin:'20px'}}>
      <img style={{borderRadius:'50%',width:'170px',height:'160px'}} src='/profile.jpg'/>
      <center><p>M</p></center>
     </div>
     <div style={{margin:'20px'}} >
      <img style={{borderRadius:'50%',width:'170px',height:'160px'}} src='/profile.jpg'/>
      <center><p>A</p></center>
     </div>
     <div style={{margin:'20px'}}>
      <img style={{borderRadius:'50%',width:'170px',height:'160px'}} src='/profile.jpg'/>
      <center><p>Z</p></center>
     </div>
      </div>
</div>

<Brands/>
      <Footer />
    </>
  );
};

export default About;


const Div= styled.h1`
  margin-left:50px;
  @media (max-width: 700px) {
   margin:20px;
}
@media (max-width: 300px) {
  margin:20px;
  
}

`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const P = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin-top:20px;
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
  font-weight:300;
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  padding: 20px;
  flex:2;
  text-align:justify;
 
  margin-bottom: 50px;
  
  @media (max-width: 700px) {
   margin:20px;
   width:90%;
}
@media (max-width: 300px) {
  margin:20px;
  width:90%;
  
}
`;

const Container = styled.div`
  
  padding:20px;
  margin-left:10%;
  margin-right:20%;
  @media (max-width: 700px) {
    display: flex;
  flex-direction: column;
}
@media (max-width: 300px) {
  display: flex;
  flex-direction: column;
  
}

`;
