import { useDispatch } from 'react-redux';
import { removeProduct } from './../../redux/action';
import { setCount } from './../../redux/action';
import { Add, Remove, DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";
import Head from 'next/head'
//import { mobile } from "../../../pages/responsive";
// const ShoppingCart = ({ name, id, count, price, variant,image }) 
const ShoppingCart = ({ name, id, count, price, image,variant }) => {
   const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      {
        id: id,

      }
    ))
  }

  const setProductCount = (count) => {
    if (count <= 1) {
      return false;
    }

    count=count-1;

    dispatch(setCount(
      {
        id: id,

        count: count,
      }
    ))
  }
  const setProductSumCount = (count) => {
    

    count=count+1;

    dispatch(setCount(
      {
        id: id,

        count: count,
      }
    ))
  }

  return (

    <Product>
      <Head>
        <title>Cart</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ProductDetail>
        <Image src={image} />
        <Details>
        <ProductId>
            <b>ID:</b> {id}
          </ProductId>
          <ProductName style={{ fontSize: '20px' }} >
            <b>Name:</b> {name}
          </ProductName>
          

          {/* {variant.length!=0? 
          variant.map((v) => (
            <ProductId>
              <b>{v.name.charAt(0).toUpperCase() + v.name.slice(1)}:</b> {v.value}<br />
            </ProductId>
          )):null} */}
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <AmountBtn> <Remove onClick={() => setProductCount(count )} /></AmountBtn>
          <Amount><strong>{count}</strong></Amount>
          <AmountBtn> <Add onClick={() => setProductSumCount(count)} /></AmountBtn>
          <AmountBtnDel> <DeleteOutline onClick={() => removeFromCart()} /></AmountBtnDel>

        </ProductAmountContainer>
        <ProductPrice>{price * count} Rs</ProductPrice>
      </PriceDetail>


    </Product>

  )
};


export default ShoppingCart




const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin:30px;
  border:0.09rem solid lightgrey;
  @media (max-width: 760px) {
	flex-direction:column;
	padding:0px ;
	margin:20px;
  width:80%;
  margin-left:auto;
  margin-right:auto;
}
`;
 /* ${mobile({ flexDirection: "column" })} */
const ProductDetail = styled.div`
  flex: 2;
  display:flex;
  @media (max-width: 760px) {
	flex-direction:column;
	padding:0px ;
	
}
`;

const Image = styled.img`
  width: 200px;
  height:200px;
  @media (max-width: 760px) {
    width:100%;
    height:40%;
	
}
  
`;

const Details = styled.div`
  
  padding:8px;
  padding-top:0px;
  padding-bottom:0px;
  margin-top:7%;
  margin-bottom:auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 760px) {
    margin-bottom:0px;

	
}
`;

const ProductName = styled.span`
margin-top:19%;
font-family:Montserrat;
font-weight:300;
@media (max-width: 760px) {
    margin-top:0px;

	
}

`;

const ProductId = styled.span`
font-size: 14px;
font-family:Montserrat;
`;


const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
   justify-content: center; 
  @media (max-width: 760px) {
    
	  flex-direction:row;
}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 760px) {
    margin-bottom: 0px;
    padding:10px;
	
}
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

`;
  /* ${mobile({ margin: "5px 15px" })} */
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  padding-left:30px;
  @media (max-width: 760px) {
  margin-left:auto;
  padding:10px;
}
 
`;
 /* ${mobile({ marginBottom: "20px" })} */
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

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
const AmountBtnDel = styled.span`
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