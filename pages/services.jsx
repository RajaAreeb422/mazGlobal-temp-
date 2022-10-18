import styled from "styled-components";

import Navbar2 from "../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined,Category } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Head from "next/head";
import srv from '../styles/service.module.css'
//import axios from "axios";
//import Pagination from '@material-ui/lab/Pagination';

const Services = () => {
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

  const handleSelectChange = (e) => {
    //   var slist=[]
    // items.map((sin,i)=>{
    //     axios.get(`http://95.111.240.143:8080/ecom-api/products/${sin.id}`)
    //     .then(res=>{
    //        if(res.data.data.variants.length!=0)
    //        {
    //         slist.push({...res.data.data,
    //           ['id']:sin.id
    //         })
    //          Sort(slist,e.target.value)
    //        }
    //         }).catch(err=>console.log(err))
    // })
    // setColorProduct(slist)
  };
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
        <title>Services</title>
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
      <div className={srv.container}>
       
       <div className={srv.spacing}>
      <SideBar/>
      </div>
        <div style={{ marginTop:'55px'}}>
         <center><h3  style={{color:'rgba(67, 143, 173, 0.933);'}}>Services</h3></center>
         <center><p  >Main services we can provide</p></center>
        <div className={srv.box}>
            <div className={srv.logo}>
            <Category/>
            <p>Service</p>
            </div>
            <div className={srv.logo}>
            <Category/>
            <p>Service</p>
            </div>

            <div className={srv.logo}>
            <Category/>
            <p>Service</p>
            </div>
            <div className={srv.logo}>
            <Category/>
            <p>Service</p>
            </div>

          
          </div>





          <div className={srv.productshow}>
            {/* <p className={srv.hdng}>Services</p>
            

          <p className={srv.paara}>Main services we can provide</p>

          <ul style={{ fontWeight:'450',fontFamily:'Montserrat',fontSize:'14px'}}>
           <li> Product Sourcing</li> 
           <li>Factory Inspection</li> 
           <li> Shipment Inspection</li> 
           <li>  Combined shipment Coordination</li> 
             
          </ul> */}

          <center>
          <p className={srv.hdng} style={{color:'rgba(67, 143, 173, 0.933);'}} >
            What is our advantage?</p>
          </center>
          <p className={srv.paara} >
          Before you work with us, you might have found several China manufacturers on the internet.
           However, you still think you have not got one because you can’t know which will be the right supplier for you.   
          </p>
          <p className={srv.paara} >
          You might get frustrated because you have been communicating with suppliers in China for months,
           but fail to move forward. You need someone from China who knows Chinese culture and can be “your eyes 
           and ears” to get more accurate information and help make the correct decision on who are the appropriate suppliers.   
          </p>
          </div>
        </div>
        
            


      </div>
      <Footer/>
    </>
  );
};

export default Services;


const Div=styled.div`
  margin-left:75px;
  @media (max-width: 700px) {
    margin-left:0px;

}
@media (max-width: 300px) {
  margin-left:0px;
  
}
`
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const H= styled.p`
  font-weight:400;
  margin-top:10px;
  margin-bottom:20px;
  font-family: 'Montserrat', sans-serif;
  font-size:24px;
`;
const P= styled.p`
  font-weight:400;
  font-family: 'Montserrat', sans-serif;
  font-size:14px;
`;
const Bar = styled.div`
   display:flex;
   width:245px;
   flex-direction:row;
   background-color:whitesmoke;
   //border-style:groove;
   border-bottom-color:whitesmoke;
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
  width:700px;
  margin-top:0px;
  margin-left:100px;
    border:0.095rem solid lightgrey;
    
  display: flex;
  
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 700px) {
   width:90%;
  margin:10px;
  margin-left:auto;
  margin-right:auto;
}
@media (max-width: 300px) {
  width:90%;
  margin-left:auto;
  margin-right:auto;
  
  
}
`;

const Container = styled.div`
display:flex;
flex-direction:row;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    display: flex;
  flex-direction: column;
  margin:0px;

}
@media (max-width: 300px) {
  display: flex;
  flex-direction: column;
  
}
  
`;

