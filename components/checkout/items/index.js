import { useDispatch } from 'react-redux';
import { removeProduct } from './../../redux/action';
import React from 'react';
import { setCount } from './../../redux/action';
import { Add, Remove, DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";

const CheckoutItems = ({ name, id, count, price,image }) => {
  const dispatch = useDispatch();

  const [ratingValue, setRatingValue] = React.useState(0);
  const removeFromCart = () => {
    dispatch(removeProduct(
      {
        id: id,

      }
    ))
  }

  const setProductCount = (count) => {
    if (count <= 0) {
      return false;
    }

    dispatch(setCount(
      {
        id: id,

        count: count,
      }
    ))
  }

  return (

    <Product>
      
     
        <Image src={image} /> 
        <Details>
          <ProductName>
            <b>Product:</b> {name}
          </ProductName>
          
        
       
        <PriceDetail>
       
        <ProductAmountContainer>
        <p>Qty :</p>
          <Amount><strong>{count}</strong></Amount>
          

        </ProductAmountContainer>
        <ProductPrice>{price * count} Rs</ProductPrice>
      </PriceDetail>
      </Details>
      
      
    </Product>

  )
};


export default CheckoutItems



const Product = styled.div`
display:flex ;
padding:10px ;

`;

const ProductDetail = styled.div`
  
`;

const Image = styled.img`
  width: 70px;
  height:70px ;
`;

const Details = styled.div`
  padding: 20px;
  padding-top:0px;
 
`;

const ProductName = styled.span`

`;

const ProductId = styled.span``;


const PriceDetail = styled.div`
  
`;

const ProductAmountContainer = styled.div`
  display: flex;
  margin-bottom:0px ;
  
`;

const ProductPrice = styled.p`
  color:red;
  font-weight: 400;
  margin-top:-15px;
`;
const Amount = styled.p`
  font-size:16px;
  font-weight:300;
  
`;
