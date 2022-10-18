import { sliderItems } from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
// import { mobile } from "../pages/responsive";
import Link from "next/link";
import { useEffect, useState } from "react";

const Slider = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  // const [slideIndex, setSlideIndex] = useState(0);
  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //   }
  // };

  return (
    
    // <Carousel>
    //               <div>
    //                   <img src="./maz2.jpeg" alt="image1"/>
                      
  
    //               </div>
    //               <div>
    //                   <img src="./maz1.jpeg" alt="image2" />
                    
  
    //               </div>
    //               <div>
    //                   <img src="./maz2.jpeg" alt="image3"/>
                     
  
    //               </div>
                  
    //           </Carousel>
    <div style={{marginBottom:'0px',width:'100%'}}>
    <Carousel controls={false}>
      
  <Carousel.Item interval={5000} >
    <img
      className="d-block w-100"
      
      src="./1-sliders.png"
      alt="First slide"
     
    />
    
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="./2-slider.png"
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./3-slider.png"
      alt="Third slide"
    />
  
  </Carousel.Item>
</Carousel>
 
</div>
  );
};

export default Slider;


// const Container = styled.div`

//   width: 100%;
//   overflow: hidden;
//   display:flex;
//   flex-direction:row;
//   height:75vh;
//   `;
  /* ${mobile({ display: "none" })} */

  // <Container>
    //   <Arrow direction="left" onClick={() => handleClick("left")}>
    //     <ArrowLeftOutlined />
    //   </Arrow>
    //   <Wrapper slideIndex={slideIndex}>
    //     {sliderItems.map((item) => (
    //       <Slide bg={item.bg} key={item.id}>
    //         <ImgContainer style={{width:'12%'}}>
    //           <Image src={item.img} />
    //         </ImgContainer>
           
    //       </Slide>
    //     ))}
    //   </Wrapper>
    //   <Arrow direction="right" onClick={() => handleClick("right")}>
    //     <ArrowRightOutlined />
    //   </Arrow>
    // </Container>