import React from 'react';
import './Header.css';
import HomeBtn from './HomeBtn/HomeBtn';
/* import MyAccountBtn from './MyAccountBtn/MyAccountBtn'; */
import CartBtn from './CartBtn/CartBtn'; 
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu' 

const Header = () => {

  return (
    <>      
      <div className="container container-header">
        <div className="block home-btn">
          <HomeBtn />
          <Menu />
        </div>
        <div className="block search">
          <SearchBar />
        </div>
        <div className="block address">
          <a href='/'>Agregar mi Ubicación</a>
        </div>
        <div className="block login-mobile">
          <a href='/'>Ingresar</a>
        </div>
        <div className="block action-btns">
          <CartBtn />
        </div>
      </div>
      <div className='block search mobile'>
        <SearchBar />
      </div>
    </>
  );
}

export default Header