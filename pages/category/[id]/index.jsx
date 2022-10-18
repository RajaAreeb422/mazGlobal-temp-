import styled from "styled-components";
import Head from 'next/head'
import Navbar2 from "../../../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
import Footer from "../../../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../../../components/SingleProduct";
import { HomeOutlined,Category } from "@material-ui/icons";
import Navbar from "../../../components/Navbar";
import axios from "axios";
//import Pagination from '@material-ui/lab/Pagination';
import { useRouter } from 'next/router';
import SideBar from "../../../components/SideBar";
import Image from "next/image";
import flt from '../../../styles/filter.module.css'
import { Audio ,Hearts,Rings,Bars,Oval,Puff,TailSpin,ThreeDots} from  'react-loader-spinner'
const Index = () => {
  const [page, setPage] = useState(1);
  const [spin, setSpin] = useState(true);
  const [items, setItems] = useState([]);
  const [color, setColorProduct] = useState([]);
  const [spro, setSizeProduct] = useState([])
  const [dumy, setDumy] = useState([
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
   
    
  ]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {

    axios.get(`https://api.mazglobal.co.uk/maz-api/products/category/${id}`)//api url
       .then(resp =>{//calling url by method GET
             console.log("productz",resp.data.data)
             setItems(resp.data.data)
                setSizeProduct(resp.data.data)
                setSpin(false)
            }).catch(err=>console.log(err))//setting response to state posts
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
  }, [id]);

  
  return (
    <>
    <Head>
        <title>Category</title>
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
      <Image src='/6wheeler.jpeg'  
       width="100%" height="28%" layout="responsive"
       
      />
      < div className={flt.container}>
      <SideBar/>
        
    
        <div style={{ marginTop:'55px'}}>
          <div className={flt.productshow}>
            {spro.length==0?<>No Product Found </>:
            <>
            {spro.map((item,i) => (
              <SingleProduct item={item} key={item.id} />
            ))}
            </>
             }
          </div>
        </div>
        
            </div>
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
  );
};

export default Index;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
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
display:flex;
flex-direction:row;

  
  margin-left: auto;
  margin-right: auto;
`;

