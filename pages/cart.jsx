//import Announcement from "../components/Announcement"
//import Footer from '../components/foot/Footer'
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import ShoppingCart from "../components/shopping-cart/index"
import Head from 'next/head'
import Image from 'next/image';


const cart = () => {

return(
  <>
    <Head>
        <title>Cart</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <Navbar2/>
    <Navbar/>
    <ShoppingCart />
   
    <Footer />

  </>
)
}

export default cart
