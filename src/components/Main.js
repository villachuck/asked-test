import React from 'react';
import './Main.css';
/* import { useLocalStorage } from '../hooks/useLocalStorage';
import BannerCarrousel from './banner/BannerCarrousel';
import Body from './body/Body';
import { CartContext } from './cart/CartContext';
import Footer from './footer/Footer'; */
import Header from './header/Header';
import HelpBar from './home/HelpBar/HelpBar';
import MainBanner from './home/MainBanner/MainBanner';
import Counter from './home/Counter/Counter';
import GridSix from './home/GridSix/GridSix';
import Supermarket from './home/Supermarket/Supermarket';
import Recommendations from './home/Recommendations/Recommendations';
import Shelfs from './home/Shelfs/Shelfs';
/* import NewsLetter from './newsletter/NewsLetter'; */

const Main = () => {
  //const [cart, setCart] = useLocalStorage("cart", {});
  return (
    <>
      <div className='chedraui-body'>
        <MainBanner />
        <Counter />
        <GridSix />
        <Supermarket />
        <Recommendations />
        <Shelfs titleVitrine={true} categoryName={"electronics"} />
        <Shelfs titleVitrine={false} categoryName={"women's clothing"} />
      </div>

      {/* <CartContext.Provider value={{
        cart,
        setCart
      }}>
        <Header />
        <BannerCarrousel />
        <Body />
        <NewsLetter />
        <Footer />  
      </CartContext.Provider> */}
    </>
  );
}

export default Main