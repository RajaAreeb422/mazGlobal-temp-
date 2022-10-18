import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";

import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Deals_ItemLeft from "./Deals_Item";
import Deals_ItemRight from "./Deals_ItemRight";
import { useRouter } from 'next/router';
import ic from '../../styles/feature.module.css'
import { DeleteOutline, Edit } from '@material-ui/icons';
import axios from "axios";
import { List } from "reactstrap";
const ASlide = (props) => {
  const [tagid, setTagId] = useState(null)
  const [path, setPath] = useState([])
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/products/69_af682a68-5175-4fec-a69a-d89f055e57cf_300x.jpg?v=1645774308",
    },
   
  ]);

  
  useEffect(() => {
        console.log("props",props)
        let list=[]
        
       
        // let path1="https://mazglobal.co.uk/maz-api/";
      
      
        // props.deal.map(it=>{
        //   let pp=''
        //   it['path']=path1+it.path
        //   list.push(it.path)
        //   console.log("path22",pp)
        
        
        // })
        // setPath(list)
           
  }, [])


 
  return (
    <>

          <div className={ic.largeView}>
          <Carousel style={{ width: "360px", }}  show={4} slide={1} swiping={true} leftArrow={<Deals_ItemLeft/>} 
          rightArrow={<Deals_ItemRight/>}>
              {props.deal.map((it,key) => (
                <Link key={key} href="/productdescp/[id]" as={`/productdescp/${it.id}`}>
                  <div className={ic.imgDiv}>
                  <img src={it.path} height='150px' width='150px' style={{margin:'10px',border:'0.095rem solid lightgrey'}}/>
                  {/* <p style={{ marginLeft:'20px',color:'rgba(16, 103, 138, 0.933)',fontSize:'20px' }}>{it.price} PKR</p> */}
                  <h5 style={{ marginLeft:'10px',fontSize:'16px',fontWeight:'320' }}>{it.name}</h5>
                  <p style={{ marginLeft:'10px',color:'grey' }}>Incl. VAT : <strong>{it.regular_price}Rs</strong></p>
                  </div>
              </Link>
            
              ))}
          </Carousel>
          </div>

          <div className={ic.mobileView}>
          {/* <Carousel style={{width:'100%'}}  show={2} slide={1} swiping={true} leftArrow={<Deals_ItemLeft/>} 
          rightArrow={<Deals_ItemRight/>}> */}
              {props.deal.map((it,key) => (
                <Link key={key} href="/productdescp/[id]" as={`/productdescp/${it.id}`}>
                  <div className={ic.imgDiv}>
                  <img src={it.path} height='130px' width='150px' style={{margin:'10px'}}/>
                  {/* <p style={{ marginLeft:'20px',color:'rgba(16, 103, 138, 0.933)',fontSize:'20px' }}>{it.price} PKR</p> */}
                  <h5 style={{ marginLeft:'10px',fontSize:'16px',fontWeight:'320' }}>{it.name}</h5>
                  <p style={{ marginLeft:'10px',color:'grey' }}>Incl. VAT : <strong>{it.regular_price}Rs</strong></p>
                  </div>
              
              </Link>
            
              ))}
          {/* </Carousel> */}
          </div>
      
    </>
  );
};
export default ASlide;
