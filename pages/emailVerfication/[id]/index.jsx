import styled from "styled-components";
import Head from 'next/head'
//import Navbar2 from "../../../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
//import Footer from "../../../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
//import SingleProduct from "../../../components/SingleProduct";
import { HomeOutlined,Category } from "@material-ui/icons";
//import Navbar from "../../../components/Navbar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/router';
// import Spinner from "./Spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Audio,BallTriangle,Rings } from  'react-loader-spinner'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
  const [user,setUser]=useState()
  const [label,setLabel]=useState(false)
 
  const router = useRouter();
  const token = router.query;
  useEffect(() => {
      //let decoded = jwt_decode(token.id);
    //   setUser(decoded.result);
    chkToken()
    // if(token.id!=undefined || token.id!='')
    // {
    //     setLabel(false)
    // }
    // else{
    //      let decoded = jwt_decode(token.id);
    //   setUser(decoded.result);
    //   console.log("token",token.id)
    // }
     
      //console.log("iddd",decoded.result.id)
    // axios.get(`https://mazglobal.co.uk/maz-api/products/category/${id}`)//api url
    //    .then(resp =>{//calling url by method GET
    //          console.log("productz",resp.data.data)
    //          setItems(resp.data.data)
    //             setSizeProduct(resp.data.data)
    //         }).catch(err=>console.log(err))//setting response to state posts

    
    
  }, [token.id])

  const chkToken=()=>{
    
    // const interval = setInterval(() => {
        
    //   }, 10000);
     if(token.id==undefined)
     ''
     else{
      let decoded = jwt_decode(token.id);
      setUser(decoded.result);
      console.log("token",token.id,decoded)
    axios.get(`https://api.mazglobal.co.uk/maz-api/users/${decoded.result.id}`)//api url
       .then(resp =>{//calling url by method GET
             
             setLabel(true)
             toast(`Your Account has been activated. Go to home or login`)
            }).catch(err=>{
                setLabel(false) 
                console.log(err)})
            }
  }

  return (
    <>
    <Head>
        <title>Email Verfication</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
      <ToastContainer/>
      {/* {label ==false?
       <div>
        Hellooo You Have been verified.
       </div>: */}
     <div >
        {label ==false?
       <>
     <Title>Verifying...</Title>
        
     <Bar>
     {/* <BallTriangle  color="#00BFFF"  /> */}
     {/* <Rings color="#00BFFF"  width={90} /> */}
     </Bar>
     </>
     :
     <>
     <Title>Hurryy.. Account Activated</Title>
     <Bar>
     <img style={{width:'40%',borderRadius:'50%'}} src="data:image/jpeg;base64,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"/> 
     </Bar>  
     </> 
}
     </div>
   
      </Container>
      
    
    </>
  );
};

export default Index;

const Title = styled.h1`
  margin: 20px;
  padding-top:180px;
  margin-bottom:auto;
  text-align: center;
  color:white;
  font-weight:500;
`;

const Bar = styled.div`
    margin-left:700px;
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
  border-style: groove;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;
const SearchBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  margin-bottom:40px;
  border-color: whitesmoke;
  border-style: groove;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 14px;
  padding: 8px;
  
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
   font-size: 14px;
  font-weight: 500;
  padding: 4px;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  padding: 20px ;
  width:940px;
  display: flex;
  border:0.095rem solid lightgrey;
  flex-direction: row;
  flex-wrap: wrap;
  
`;

const Container = styled.div`
  background-color:black !important;
  opacity:0.7;
  height:600px;
`;

