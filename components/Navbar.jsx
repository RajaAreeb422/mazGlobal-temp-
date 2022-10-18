import { useEffect, useState ,useContext} from "react";
//import { useSelector } from "react-redux";

import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
   Phone,
   Email
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
//import nav from "../styles/navbar.module.css";
import axios from "axios";

import { mymenuItems } from "./menuItems";
import MyMenu from "./MyMenu";
import MobileMenu from "./MobileMenu";

import nav from "../styles/navbar.module.css";
const Navbar = () => {
  const [cat,setCat]=useState([]);
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  useEffect(() => {
    let list=[];
    let list1=[]
    axios.get(`https://api.mazglobal.co.uk/maz-api/categories`)
    .then(res => {
      console.log('maz',res.data.data)
      
      res.data.data.map(lt=>{
        if(lt.parent==null)
        {
        list1.push({
          id:lt.id,
          title:lt.name,
         
        })
      }
      else{
        console.log('list1',list1)
        list1.map(lop=>{
          // lop={
          //   id:lop.id,
          //   title:lop.title,
          //   submenu:[]
          // }
          console.log('loop',lop)
          if(lop.id==lt.parent)
          {
            console.log('loop2',lop)
            
            lop.submenu.push({
              id:lt.id,
              title:lt.name
            })
          }
        })
         
        }
        // list.push({
        //   id:lt.id,
        //   title:lt.name
        // })
      
      })
      setCat(list1)
      console.log("list",list1)
    }).catch(err=>console.log(err))
    mymenuItems.map(it=>{
      if(it.title=='Products')
      {
        it.submenu=list1
      }
    })
  
    // alert('Finished loading');
  }, []);
  const depthLevel = 0;
 return (
   <>
   
  <nav className={nav.stick}>
  <Link href="/" as={`/`}>
       <div style={{marginLeft:'160px',marginTop:'-6px'}}>
        <Image style={{cursor:'pointer'}}  height='120px' width='150px' src='/Maz Global Logo-02.png'/>
        </div>
        </Link>
   <ul className="menus" style={{marginLeft:'auto'}}>
    
    {mymenuItems.map((menu, index) => (
      <>
     
     <MyMenu className={nav.list} items={menu} depthLevel={depthLevel}/>
     </>
    ))}
   </ul>
  </nav>

  <nav >
    <div className={nav.stick2}>
       <div>
       <Link href="/" as={`/`}>
       <div >
        <Image style={{cursor:'pointer'}}  height='80px' width='100px' src='/Maz Global Logo-02.png'/>
        </div>
        </Link>
        </div>
        
        
        <button className={nav.hamburger}  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
       
      </button>
</div>


{isNavExpanded? 
<ul style={{width:'100%',padding:'0'}}>
    <hr  style={{marginTop:'-10px',marginBottom:'-7px'}}/>
    {mymenuItems.map((menu, index) => (
      <div key={index} style={{height:'50px'}}>
     <MobileMenu className={nav.mlist} items={menu} depthLevel={depthLevel}/>
     <hr />
     </div>
    ))}
   </ul>:''
}
   
  </nav>
  </>
 );
};

export default Navbar;         
         
