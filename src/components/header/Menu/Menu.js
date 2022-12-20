import React, { useState } from "react";
import Categories from "./Categories/Categories";
/* import NavigationButton from "./NavigationBtn/NavigationBtn"; */
import './Menu.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const isMobile = window.innerWidth;   

    return (
        <>
            {isMobile < 768 ? (
                <div className="button-menu-mobile">
                    <span className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon className="menu-icon" icon={faBars} />
                    </span>
                    <span className="mobile-logo">
                        <a href="/">
                            <img src="https://chedrauimx.vtexassets.com/_v/public/assets/v1/published/chedrauimx.chedraui-cms-components@2.0.73/public/react/b35777bdaf9ad483547d01af97c3cdfd.svg" alt="logo-mobile" />
                        </a>
                    </span>

                    {isOpen && (                                
                        <Categories />
                    )}
                </div>
            ):(
                <>
                    <div className="desktop-menu">
                        <div className="button-menu" onClick={() => setIsOpen(!isOpen)}>
                            <span className="menu">
                                <FontAwesomeIcon className="menu-icon" icon={faBars} />                
                            </span>
                            <p>Departamentos</p>
                        </div>
                        
                        {isOpen && (                                
                            <Categories />
                        )}                        
                    </div>
                </>
            )}
                  
        </>
    );
};

export default Menu;