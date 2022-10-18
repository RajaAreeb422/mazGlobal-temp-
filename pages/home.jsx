import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/footer/Footer'
import Slider from '../components/Slider'
import Mission from '../components/Mission'
import FeaturedProducts from '../components/FeaturesProducts/FeaturedProducts'
import AboutUs from '../components/AboutUs'
import CustomNav from '../components/CustomNav'
import Navbar from '../components/Navbar'
import st from  '../styles/feature.module.css'
import { useState, useEffect } from "react";
import TopProducts from '../components/FeaturesProducts/TopProducts'
//import ComingSoon from "react-coming-soon";

// import Backtotop from '../components/Backtotop'
import axios from 'axios'
import ProductCategories from '../components/ProductCategories'
import ProductVehicles from '../components/ProductVehicles'
import Brands from '../components/Brands'
import { Audio ,Hearts,Rings,Bars,Oval,Puff,TailSpin,ThreeDots} from  'react-loader-spinner'
export default function Home() {

  const [products,setProducts]=useState([])
  const [spin,setSpin]=useState(true)
  useEffect(() => {

    axios.get(`https://api.mazglobal.co.uk/maz-api/products`)//api url
    .then(resp =>{//calling url by method GET
          console.log('alll prooo',resp.data.data)
          let path1="https://api.mazglobal.co.uk/";
      
          let list=[]
          resp.data.data.map(it=>{
            let pp=''
            it['path']=path1+it.path
            list.push(it.path)
            console.log("path22",pp)
          
          
          })
          
             setProducts(resp.data.data)
             setTimeout(Circle, 1000);
         }).catch(err=>console.log(err))
    // alert('Finished loading');
  }, []);
  const Circle=()=>{
    setSpin(false)
  }
  return (
    <>
     <Head>
        <title>Maz Global</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    {spin==false?
     <>
    <Navbar2/>
    <Navbar/>
    
    <Slider/>
    <div style={{textAlign:'center',margin:'20px',padding:'20px'}}>
    <h1 >MAZ Global –The Reliable Online Auto Parts Store in the UK</h1>
    <p style={{marginLeft:'auto',marginRight:'auto',width:'50%'}}>We are the one of the top stockist of a broad range of automotive spare parts from various auto brands, delivering across the UK and Europe.</p>
    </div>
    {/* <Mission/> */}
    {products.length!=0?<FeaturedProducts products={products}/>:''}
    <ProductCategories/>
   
    <div style={{marginTop:'40px'}}>
      </div>
    <AboutUs/>
    <div style={{marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
  
    </div>
    <ProductVehicles/>
    <div style={{marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
  
    </div>
    <div style={{background:'whitesmoke',padding:'10px'}}>
    {products.length!=0?<TopProducts products={products}/>:''}
    </div>
    
    <Brands/>
    <Footer/>  
   </>:


<div style={{marginTop:'auto',background:'black',opacity:'0.5',height:'100%',
marginBottom:'auto',width:'100%'}}>
  <div    style={{marginLeft:'auto',marginRight:'auto',width:'10%'}}>
  <Puff
       height = "750"
       width = "300"
       radius = "9"
       left='7%'
       color = 'rgba(67, 143, 173, 0.933)'
    
       ariaLabel = 'three-dots-loading'     
       wrapperStyle
       wrapperClass
     />
  </div>

</div>


 
}
    </>
      )
}
