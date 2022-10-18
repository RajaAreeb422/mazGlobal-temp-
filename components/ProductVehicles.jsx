import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'
//import Deals_ItemLeft from "./Deals_Item";
//import Deals_ItemRight from "./Deals_ItemRight";
import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import { Icon, List } from "@material-ui/core";
import ic from '../styles/pcategories.module.css'
import axios from 'axios';
import Image from "next/image";
//import ASlide from "./ASlide";
const ProductVehicles= () => {
  const [vehicles,setVehicles]=useState([])
  useEffect(() => {

    
    
    axios.get(`https://api.mazglobal.co.uk/maz-api/vehicles`)//api url
    .then(resp =>{//calling url by method GET
           let list=[]
             resp.data.data.map((vh,i)=>{
                vh['path']=box[i].img
                list.push(vh)
             })
             setVehicles(list)
         }).catch(err=>console.log(err))
    // alert('Finished loading');
  }, [vehicles]);
  const [box, setBox] = useState([
    {
      id: 1,
      text: "CV Joint Outer",
      price:4000,
      img:'/Audi.jpeg'
    },
   {
    id:2,
    img:'/Honda.jpeg'
  },
    {
      id: 3,
      text: "Rear Bumper",
      price:6000,
      img:'/Ford.jpeg'
    },
    {
      id: 4,
      text: "CV.JOINT",
      price:7000,
      img:'/Toyota.jpeg'
    },
    {
      id: 5,
      text: "Web.C HandBrake",
      price:7000,
      img:'/Ford.jpeg'
    },
    {
      id: 6,
      text: "Web Co Air Processing",
      price:7000,
      img:'/RR.jpeg'
    },
    {
      id: 7,
      text: "Solenoid",
      price:7000,
      img:'/Navistar.jpeg'
    },
    {
      id: 8,
      text: "Clutch",
      price:7000,
      img:'/Mark.jpeg'
    },
    {
      id: 9,
      text: "Web Co Air Processing",
      price:7000,
      img:'/Audi.jpeg'
    },
    {
      id: 10,
      text: "Solenoid",
      price:7000,
      img:'/Audi.jpeg'
    },
    {
      id: 11,
      text: "Clutch",
      price:7000,
      img:'https://www.chanceparts.com/Uploads/pro/Knorr-Clutch-actuator-K013727N50K015874N50K013727N04K013727N03K013727N02.406.1.jpg'
    }
  ]);

  const borderstyle={
    borderTop:'20px solid #F7F7F7',
  }
  return (
    <div className={ic.VhContainer}>
      {/* <div
        style={{
          backgroundColor: "white",
          marginLeft: "-30px",
          marginRight: "-30px",
        }}
      > */}
        
          {/* <center className={ic.h4} style={{marginTop:'30px',marginBottom:'20px'}}>Vehicles Categories</center> */}
          <div style={{padding:'20px'}}>
          <h2  style={{marginTop:'30px',marginBottom:'20px',marginLeft:'10%'}}>The Diverse Range of Vehicles We Deal in!</h2>
          <p style={{marginLeft:'10%',textAlign:'justify',width:'80%'}}>
          We are the largest independent stockist of components for trucks, pickups, 4x4s, vans, and other vehicles.
All of the parts on our online store are available for immediate delivery to a residential or commercial address in the UK and across Europe.

             </p>
          </div>
         
         
          <div className={ic.largeView}> 
              {vehicles.map((it,key) => (
                <Link key={key} href="/vehicle/[id]" as={`/vehicle/${it.id}`}>
                  <div className={ic.vhDiv}>
                  <img src={it.path}  width='220px' 
                  style={{margin:'10px',
                  }}/>
                  {/* <p style={{ marginLeft:'20px',color:'rgba(16, 103, 138, 0.933)',fontSize:'20px' }}>{it.price} PKR</p> */}
                  <center><h3 style={{ marginLeft:'10px',fontSize:'16px',fontWeight:'420',marginBottom:'0px'}}>{it.name}</h3></center>
                
                  </div>
              
              </Link>
            
              ))}
          
          </div>

          <div className={ic.mobileView}>
          {/* <Carousel style={{width:'100%'}}  show={2} slide={1} swiping={true} leftArrow={<Deals_ItemLeft/>} 
          rightArrow={<Deals_ItemRight/>}> */}

              {vehicles.map((it,key) => (
                <Link key={key} href="/vehicle/[id]" as={`/vehicle/${it.id}`}>
                  <div className={ic.imgDiv}>
                  <img src={it.path} height='130px' width='150px' style={{margin:'10px',border:'1px solid white'}}/>
                  {/* <p style={{ marginLeft:'20px',color:'rgba(16, 103, 138, 0.933)',fontSize:'20px' }}>{it.price} PKR</p> */}
                  <h5 style={{ marginLeft:'10px',fontSize:'16px',fontWeight:'320' }}>{it.name}</h5>
                  
                  </div>
              
              </Link>
            
              ))}
          {/* </Carousel> */}
          </div>
      

     
      </div>
    // </div>
  );
};
export default ProductVehicles;
