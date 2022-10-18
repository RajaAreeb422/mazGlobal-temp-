
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Deals_ItemLeft from "./FeaturesProducts/Deals_Item";
import Deals_ItemRight from "./FeaturesProducts/Deals_ItemRight";
import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import { Icon } from "@material-ui/core";
import ic from '../styles/pcategories.module.css'
import axios from 'axios';
import Image from "next/image";
import { Carousel } from "@trendyol-js/react-carousel";
//import ASlide from "./ASlide";
const ProductCategories= () => {
  const [categories,setCategories]=useState([])
  useEffect(() => {

    
    
    axios.get(`https://api.mazglobal.co.uk/maz-api/categories`)//api url
    .then(resp =>{//calling url by method GET
         
            
             setCategories(resp.data.data)
         }).catch(err=>console.log(err))
    // alert('Finished loading');
  }, [categories]);
  const [box, setBox] = useState([
    {
      id: 1,
      text: "CV Joint Outer",
      price:4000,
      img:'/Engine.jpeg'
    },
    {
      id: 2,
      text: "Front Bumper Black",
      price:5000,
      img:'/Clutch.jpeg'
    },
    {
      id: 3,
      text: "Rear Bumper",
      price:6000,
      img:'/Air compressor.jpeg'
    },
    {
   id:4,
   img:'/Steering.jpeg'
    },
    {
      id: 5,
      text: "Web.C HandBrake",
      price:7000,
      img:'/Cabin.jpeg'
    },
    {
      id: 6,
      text: "Web Co Air Processing",
      price:7000,
      img:'https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0701324_3.webp'
    },
    {
      id: 7,
      text: "Solenoid",
      price:7000,
      img:'https://www.chanceparts.com/Uploads/pro/Knorr-ECAS-Solenoid-valve-K019820N50.372.1.jpg'
    },
    {
      id: 8,
      text: "Clutch",
      price:7000,
      img:'https://www.chanceparts.com/Uploads/pro/Knorr-Clutch-actuator-K013727N50K015874N50K013727N04K013727N03K013727N02.406.1.jpg'
    }
  ]);

  const borderstyle={
    borderTop:'20px solid #F7F7F7',
  }
  return (
    <div className={ic.Container}>
      {/* <div
        style={{
          backgroundColor: "white",
          marginLeft: "-30px",
          marginRight: "-30px",
        }}
      > */}
          <div style={{padding:'20px'}}>
          <center style={{width:'90%'}}>
          <h2 style={{marginTop:'30px',marginBottom:'20px',marginLeft:'10%'}}>
              Explore Our Broad Range of Product Categories</h2>
            </center>
          <p style={{textAlign:'center',width:'80%',margin:'auto'}}>At MAZ Global, we not only source the best automotive spare parts but also strive to ensure the quality of our products. It gives us an edge over the rest and allows us to serve our clients in diversified product categories </p>
          </div>
          <div className={ic.largeView}>
          {/* <Carousel  show={5} slide={1} swiping={true} leftArrow={<Deals_ItemLeft/>} 
          rightArrow={<Deals_ItemRight/>}>  */}
              {categories.map((it,key) => (
                <Link key={key} href="/category/[id]" as={`/category/${it.id}`}>
                  <div className={ic.catDiv} >
                  <img src={box[key].img}  
                  style={{margin:'10px',width:'150px',
                  border:'0.095rem solid lightgrey',borderRadius:'12px'}}/>
                  {/* <p style={{ marginLeft:'20px',color:'rgba(16, 103, 138, 0.933)',fontSize:'20px' }}>{it.price} PKR</p> */}
                  <h5 style={{ marginLeft:'10px',fontSize:'16px',fontWeight:'320',marginBottom:'0px'}}>{it.name}</h5>
                  <div className={ic.dots}>
                   <h2 style={{color:'red'}}>.</h2>
                   <h2 style={{color:'green'}}>.</h2>
                   <h2 style={{color:'blue'}}>.</h2> 

                  </div>
                  </div>
              
              </Link>
            
              ))}
          {/* </Carousel> */}
          </div>

          <div className={ic.mobileView}>
         

              {categories.map((it,key) => (
                <Link key={key} href="/category/[id]" as={`/category/${it.id}`}>
                 
                  
                  <div className={ic.catDiv}>
                  <img src={box[key].img} height='130px' width='150px' style={{margin:'10px'}}/>
                  
                  <h5 style={{ marginLeft:'10px',fontSize:'16px',fontWeight:'320' }}>{it.name}</h5>
                  <div className={ic.dots}>
                   <h2 style={{color:'red'}}>.</h2>
                   <h2 style={{color:'green'}}>.</h2>
                   <h2 style={{color:'blue'}}>.</h2> 

                  </div>
                  </div>
                 
              </Link>
            
              ))}
          {/* </Carousel> */}
          </div>
      

     
      </div>
    // </div>
  );
};
export default ProductCategories;
