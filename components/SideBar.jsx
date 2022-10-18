import { Add, PanToolSharp, Remove } from "@material-ui/icons";
import styled from "styled-components";

import { ArrowLeftOutlined, ArrowRightOutlined ,
  Category,LocationCity,CropSquare,List,SearchOutlined,LocalShipping} from "@material-ui/icons";
import { useEffect, useState } from "react";


import React, { memo } from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader,Table } from "reactstrap";

import axios from "axios";

import {toast,ToastContainer} from 'react-toastify';
import Link from "next/link";
import Head from "next/head";

import router, { useRouter } from "next/router";
import sbar from '../styles/sidebar.module.css'
const SideBar = () => {

    const [state, setState] = useState({
        part_no:'',
        catg:null,
        vh:null,
    })

     const {part_no,catg,vh}=state;
  const [cat, setCat] = useState([]);
  const [vehicle, setVehicles] = useState([]);
  const [modal, setModal] = React.useState(false);
  const [togglediv, settoggle] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [slideIndex, setSlideIndex] = useState(0);
  const [path, setPath] = useState([
    "https://www.chanceparts.com/Uploads/pro/Wabco-Button-valve-4630220200.464.3-1.jpg",
    "https://www.ks-international.com/media/catalog/product/cache/d3609febb2c99e7862c5859e894847cb/0/7/0704176-web_1.webp",
  ]);


  const [products, setProducts] = useState([]);
  
  useEffect(() => {
//     axios.get(`http://localhost:8080/maz-api/products/${id}`)
//     .then(res => {
//       console.log('maz',res.data.data)
//       setItem(res.data.data)
//    })

   axios.get(`https://api.mazglobal.co.uk/maz-api/products`)
    .then(res => {
      console.log('maz',res.data.data)
      setProducts(res.data.data)
   })
    
   axios.get(`https://api.mazglobal.co.uk/maz-api/categories`)
    .then(res => {
      console.log('maz',res.data.data)
      setCat(res.data.data)
   })
   
   axios.get(`https://api.mazglobal.co.uk/maz-api/vehicles`)
   .then(res => {
     console.log('maz',res.data.data)
     setVehicles(res.data.data)
  })


   },[])
  

   const handleChange = name => e => {
     console.log("e",e.target.value)
     if(e.target.name=='catg'||e.target.name=='vh')
     {
      state.part_no=''
      setState({
        ...state,
        [name]:e.target.value,
        part_no:''

      })
     }
     else{
      setState({...state,
        [name]:e.target.value
    })
     }
    
}

const search=()=>{
    if(state.part_no!=''&& state.catg==null && state.vh==null)
    {
      console.log('heloo pert no')
     let status=false;
     let prId=0;
      products.map(pr=>{
        if(pr.part_no==state.part_no)
        {
          
          status=true
          prId=pr.id
        }
      })
       
      if(status==false)
      {
        router.push(
          { pathname: "/products", query: { part: state.part_no } }
         
        );
        }
        else{
          router.push(`/productdescp/${prId}`)
        }
    }

   
    else if(state.catg!=null && (state.vh==null || state.vh==''))
    {
      console.log("helllooooo")
      router.push(`/category/${state.catg}`)
    
    }
    else if(state.vh!=null && (state.catg==null || state.catg==''))
    {
      console.log("helllooooo")
      router.push(`/vehicle/${state.vh}`)
    
    }
    else if((state.catg!=''||state.catg!=null) && (state.vh!=null || state.vh!='') )
    {
      console.log("vh category",state)
      let status=false;
      products.map(pr=>{
        if(pr.vehicle_id==state.vh && pr.category_id==state.catg)
        {
          status=true;
       
        }
      })

      if(status==false)
      {
        router.push('/products')
        // router.push(
        //   { pathname: "/products", query: { part: state.part_no } }
         
        // );
        }
        else{
          router.push('/products')
        }
    }
  
  
    else{
      console.log("vhhjkkjj",state.vh,state.part_no)

    }
}


  
  return (
    <div className={sbar.MContainer}>
    <div style={{paddingRight:'20px'}}>
     
    {/* <ToastContainer align={'right'} position={'bottom'} />    */}
      <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={sbar.LeftBar}>
            <div className={sbar.Filter}>
              <div className={sbar.Bar}>
                <div
                  style={{
                    backgroundColor: "rgba(16, 103, 138, 0.933)",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <List style={{ color: "white", marginTop: "8px",fontSize:'32px' }} />
                </div>
                <div className={sbar.FilterTitle}>Product Categories</div>
              </div>
              <hr width="247px" style={{ marginTop: "-2px" }} />
              {cat.map(ca=>(
                <Link key={ca.id} href="/category/[id]" as={`/category/${ca.id}`}>
                       <div className={sbar.FilterText}><CropSquare style={{fontSize:'5px',backgroundColor:'black'}}/> {ca.name}</div>
                       </Link>
              ))}
            
              
            </div>
          </div>
         
          <div className={sbar.LeftBar}>
            <div className={sbar.Filter}>
              < div className={sbar.Bar}>
                <div
                  style={{
                    backgroundColor: "rgba(16, 103, 138, 0.933)",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <LocalShipping style={{ color: "white", marginTop: "8px",fontSize:'32px' }} />
                </div>
                <div className={sbar.FilterTitle}>Vehicles</div>
              </div>
              <hr width="247px" style={{ marginTop: "-2px" }} />
              {vehicle.map(ca=>(
                <Link key={ca.id} href="/vehicle/[id]" as={`/vehicle/${ca.id}`}>
                       <div className={sbar.FilterText}>
                        <CropSquare style={{fontSize:'5px',backgroundColor:'black',marginRight:'4px'}}/> 
                        {ca.name}
                        </div>
                       </Link>
              ))}
            
              
            </div>
          </div>





          <div className={sbar.SearchBar}>
            <div className={sbar.Filter}>
              <div className={sbar.Bar}>
                <div
                  style={{
                    backgroundColor: "rgba(16, 103, 138, 0.933)",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <SearchOutlined style={{ color: "white", marginTop: "8px" ,fontSize:'32px'}} />
                </div>
                <div className={sbar.FilterTitle}>Search</div>
              </div>
              <hr width="247px" style={{ marginTop: "-2px" }} />
              <div className={sbar.FilterText}>Part Code</div>
              <input
                type="text"
                name='part_no'
                className="form-control"
                placeholder="Enter part code"
                onChange={handleChange('part_no')}
                value={state.part_no}
                style={{
                  borderRadius: "4px",
                  border:'0.095rem solid lightgrey',
                  background: "whitesmoke",
                  width: "220px",
                  height: "40px",
                  fontFamily: 'Montserrat, sans-serif',
                  padding: "8px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              />
              <div className={sbar.FilterText}> Categories</div>
              <select
               name='catg'
               onChange={handleChange('catg')}
               value={state.catg}
                className="form-control"
                style={{
                  borderRadius: "8px",
                  background: "whitesmoke",
                  width: "220px",
                  fontFamily: 'Montserrat, sans-serif',
                  borderRadius: "4px",
                  height: "40px",
                  padding: "8px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                 {cat.map(ca=>(
                   <option key={ca.id} value={ca.id}>{ca.name}</option>
                ))}
                <option value=''>Select Category</option>
              
              </select>

              <div className={sbar.FilterText}>Vehicle</div>
              <select
                name='vh'
                onChange={handleChange('vh')}
                value={state.vh}
                className="form-control"
                style={{
                  borderRadius: "8px",
                  background: "whitesmoke",
                  borderRadius: "4px",
                  fontFamily: 'Montserrat, sans-serif',
                  
                  width: "220px",
                  height: "40px",
                  padding: "8px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {vehicle.map(vhic=>(
                   <option key={vhic.id} value={vhic.id}>{vhic.name}</option>
                ))}
                <option value=''>Select Vehicle</option>
                
              </select>
              <button
              onClick={()=>search()}
                style={{
                  marginBottom: "10px",
                  height: "40px",
                  width: "100px",
                  borderRadius: "4px",
                  border:'1px solid lightgrey',
                  marginLeft: "10px",
                  marginRight: "auto",
                  marginTop: "20px",
                  fontSize:'18px',
                  backgroundColor: "rgba(16, 103, 138, 0.933)",
                  color: "white",
                }}
              >
                
                Search
              </button>
            </div>
          </div>
        </div>

      

    
    </div>
    </div>
  );
};

export default SideBar;



const MContainer = styled.div`
@media (max-width: 700px) {
	display:none;
	
}
`;


const Input= styled.input`
  height:50px;
  padding:6px;
  margin-bottom:20px;
  border-radius:8px;
  background:whitesmoke;
  border:1px ridge whitesmoke;
`;
const ProductShow = styled.div`
  display: flex;
  flex-direction:column;
  margin-left:40px;
  margin-top:55px;
`;

const ImgDescp = styled.div`
  display: flex;
  flex-direction:row;
  padding:8px;
  border:1px solid whitesmoke;
  margin-bottom:40px;
`;

const Bar = styled.div`
  display: flex;
  width: 247px;
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
  
  margin-top: 55px;
  width: 250px;

  border: 0.095rem solid lightgrey;
  // border-style:groove;

`;

const SearchBar = styled.div`
  
  margin-top: 55px;
  width: 250px;
  margin-bottom: 40px;
  border: 0.095rem solid lightgrey;
  // border-style:groove;
  
`;

const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 14px;
  cursor:pointer;
  padding: 8px;
  color:grey;
  font-family: 'Montserrat', sans-serif;
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
  font-weight: 700;
  margin-top:6px;
  padding: 9px;
  font-family: 'Montserrat', sans-serif;
  background-color: whitesmoke;
`;





const MainDiv = styled.div`
  border:2px ridge whitesmoke;
  width:860px;
  margin-left:auto;
  margin-right:auto;
  margin-top:50px;
`;
const SmallDiv = styled.div`
  
  width:800px;
  margin-bottom:30px;
  margin-left:auto;
  margin-right:auto;
`;
const P = styled.p`
text-align:center;
color:black;
font-size:12px;
padding:6px;
`;
const Ndiv = styled.div`
  background-color:whitesmoke;
  width:300px;
  text-align:center;
  margin-bottom:20px;
  margin-left:20px;
  height:40px;
`;
const Review = styled.div`
  margin-top: 450px;
`;
const Size = styled.div`
  margin-left: 20px;
  padding:20px;
`;

const Icon = styled.div`
  height:40px;
  width:40px;
  cursor:pointer;
  margin-right:6px;
  
  border-radius:10px;
  text-align:center;
  border-style:groove;
`;
const SizeArea = styled.div`
  display:flex;
  flex-direction:row;
`;


const Rate = styled.div`
  font-weight: 600;
  font-size: 22px;
  font-family: Times New Roman;
`;



const FilterSize = styled.span`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;

const FilterSizeOpt = styled.span`
  padding-left: 20px;
`;
const Container = styled.div`
    display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  
  margin-left:180px;
  margin-right: auto;
`;

const Wrapper = styled.div`
  padding: 20px;
  margin-left: 220px;
  margin-right: 150px;
  display: flex;
`;
const Boxx = styled.div`
  padding-top: -200px;
  width: 500px;
  background-color:whitesmoke;
  height: 85vh;
  display: flex;
  position: relative;
  margin-top: 100px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 500px;
  margin-top: -60px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -500}px);
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 500px;

  object-fit: fill;
`;

const InfoContainer = styled.div`
  margin-left: 50px;
  background: linear-gradient(to right, rgba(16, 103, 138, 0.933) , black);
  width: 400px;
  height:640px;
  margin-top: 100px;
 
`;

const Title = styled.h1`
  font-weight: 400;
  color:yellow;
  padding-left: 20px;
  font-size: 26px;
`;

const Desc = styled.p`
  padding:8px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const AmountBtn = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;
const Slide = styled.div`
  width: 500px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Button = styled.button`
  cursor: pointer;
  width:300px;
  color:white;
  margin-bottom:30px;
  margin-left:40px;
  margin-right:20px;
  transition: all 0.5s ease;
 
  border: 1px solid teal;
  text-align: center;
  background-color: transparent;
  padding: 8px;
  outline: none;
  font-weight: bold;
  border-radius: 1px;
  &:hover {
    color: #ffffff;
    background-color: teal;
    border: 1px solid teal;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b6b6b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

{
  /* 
            {item.variants.map((v) => (
              <Filter>
                <FilterTitle >{v.name.charAt(0).toUpperCase() + v.name.slice(1)}:</FilterTitle>
                <FilterSize onChange={handelChange(v.name)}>
                  <FilterSizeOption value='' selected disabled>Select Values</FilterSizeOption>
                  {v.values.map((opt) => (

                    <FilterSizeOption value={opt}>{opt}</FilterSizeOption>

                  ))}

                </FilterSize><br />
              </Filter>
            ))} */
}



{/*       
      <Wrapper>
        <Boxx>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <ImgWrapper slideIndex={slideIndex}>
            {path.map((pa, i) => (
              <Slide bg={item.id} key={i}>
                <ImgContainer>
                  <ImageMagnifier img={pa} />
                </ImgContainer>
              </Slide>
            ))}
          </ImgWrapper>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </Boxx>

        <InfoContainer>
          <Title>
          suzu D-Max TFS77 3.0TD 4JH1 (07/2003-08/2006) RETAINER - REAR AXLE
          </Title>
          <Desc>
            {/* <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Brand :</p>
              <p style={{ color: "skyblue" }}>HEM</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Collection :</p>
              <p style={{ color: "skyblue" }}>HEM</p>
            </div> */}
            {/* <Ndiv>
            <P>Order By 2PM (Mon - Fri) For Same Day Dispatch</P>
            </Ndiv>
            
          <div style={{display:'flex',flexDirection:'row'}}>
          <h5 style={{color:'white'}}>Part Code :</h5> 
          <p style={{marginTop:'20px',marginLeft:'4px',color:'white'}} >  0704176-1</p> 
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <h5 style={{color:'white'}}>OEM Part Number:</h5> 
          <p style={{marginTop:'20px',marginLeft:'4px',color:'white'}}>   8980093410  </p>
          </div>
          </Desc>

          
          <AddContainer>
          
          
            
          </AddContainer>
          <Desc>
            <p style={{fontSize:'16px',fontStyle:'italic',color:'white' }}>Estimated shipping date: <b>April 27, 2022</b> <br /><br />
              Note:Delivery will vary as per customer location.</p>
          </Desc>
          <div style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
          <p style={{color:'white'}}>Incl.VAT :</p>
          <h2 style={{fontStyle:'italic',marginTop:'10px' ,marginLeft:'4px',color:'yellow'}}>400 RS</h2>
          </div>
          <AmountContainer>
              {/* onClick={() => handleCount(setCount(count - 1))} 
              <p style={{ fontWeight: "600",fontSize:'20px',marginLeft:'20px',color:'yellow' }}>PKR. 20,000</p>
              <span><button className={css.minus_btn} onClick={decCount}>-</button></span>
              <span><p className={css.counter} style={{color:'white'}}>{count}</p></span>
              <span><button className={css.add_btn} onClick={incrementCount}>+</button></span>
              
              
            </AmountContainer>
     


          <Button onClick={() => addToCart()}>ADD TO CART</Button>
         
        </InfoContainer>


        

        

      </Wrapper>  */}