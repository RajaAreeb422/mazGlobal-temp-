import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSync } from '@fortawesome/free-solid-svg-icons'

import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
} from "@material-ui/icons";
const Spinner=() =>{
  return(
    
  <div className={`fadeIn spinning`}>
    <Person  icon={<Search/>} size='8x' />
    
  </div>  
  )}
  export default Spinner;