import React, {useState} from "react";
import './Categories.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {

    const isMobile = window.innerWidth;

    const [isHovering, setIsHovering] = useState(false);
    const [showSubcat, setSubcat] = useState(false);

    const [submenuOpen, setSubMenuOpen] = useState(false);     
    const [submenuLevelOne, setsubmenuLevelOne] = useState(false); 
    
    const [submenuTwoOpen, setSubMenuTwoOpen] = useState(false);     
    const [submenuLevelTwo, setsubmenuLevelTwo] = useState(false); 

    const [closeMenu, setCloseMenu] = useState(false);

    const handleMouseOver = ( hoveredCategory ) => {
        if(hoveredCategory === 'super') {
            setIsHovering(true);
            setSubcat(hoveredCategory)
        } 
        else if(hoveredCategory === 'vinos') {
            setIsHovering(true);
            setSubcat(hoveredCategory)
        }
        else {
            setIsHovering(false);
        }     
    };
    
    const handleOverFirstModal = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <>
        {isMobile < 1181 ? (
            <>            
            {/* {closeMenu && ( */}
            <div className="menu-block-mobile">                
                <div className="menu-row-mobile">
                    <span class="hello-there" onClick={() => setCloseMenu(!closeMenu)}></span>
                    <div className="available-space">
                        <div className="menu-header">
                            <div className="menu-logo">
                                <a href="/">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/ea5c1413-971b-4b55-a906-d232216b2dd9___df4fd208880219bf1d7d67626306b6d5.svg" alt="mobile logo" />
                                </a>                                
                            </div>
                            <div className="menu-login">
                                <a href="/">
                                    <p>Inicia sesi??n o reg??strate</p>
                                    <span>
                                        <FontAwesomeIcon className="chevron-right-mobile" icon={faChevronRight} />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="menu-mobile-body">
                            <p>Departamentos</p>
                            <div className="menu-mobile-list">
                                <ul>
                                    <li onClick={() => setSubMenuOpen(!submenuOpen)}>
                                        <div className="category-container">
                                            <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/f4f93dd3-c236-4d4e-beb0-b6ab42383329___c55b4ea9412e20333d5c69302a4dc95a.svg" />
                                            <p>S??per</p>
                                        </div>                                
                                    </li>
                                    <li onClick={() => setSubMenuTwoOpen(!submenuTwoOpen)}>
                                        <div className="category-container">
                                            <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/ce13c07d-8992-4636-8fc3-4cab87ef4ad2___a60b4942fd4430e111e5e3fda38f9ca5.svg" />
                                            <p>Vinos y Licores</p>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/30cbb49d-da34-4017-ab90-f7e92166656d___7bed4504b648dc6cae31e36a54004154.svg" />
                                                <p>Beb??s</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/227f53c9-e4af-49de-9d2c-be744fb2fa63___7912edde9357c84a0f380393ab9ba260.svg" />
                                                <p>Farmacia</p>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/e3e5c7a7-5072-4b34-aa49-29bb2cfcc5aa___2e9d778590765c09b5c65f678a854c08.svg" />
                                                <p>Moda y Belleza</p>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/19909f1f-b90f-4f1a-b946-7be655fd14ca___d5d814afc4310f34418e70b281c84e44.svg" />
                                                <p>Mascotas</p>
                                            </div>
                                        </a>                                                        
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/47cf41a8-ff24-4816-a149-825236a5e5d0___3828a0f42ec9381847f5d7b4eb9a9f96.svg" />
                                                <p>Hogar, oficina y jard??n</p>
                                            </div>
                                        </a>                                                        
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/358e5458-1ed8-4812-af60-a5d5c3a7975f___c0953fd58423825db6544657c11ce26d.svg" />
                                                <p>Tecnolog??a</p>
                                            </div>
                                        </a>                                                        
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/f64bb704-c37f-44a6-bb6a-839c1e31b8e1___02bc21fe32a10e4c8992c09530c7323b.svg" />
                                                <p>Deportes y ocio</p>
                                            </div>
                                        </a>                                                        
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/d5058bbe-1371-4019-8997-d2d7597a6259___a842a2e3b04d7fff82251aa778186ce1.svg" />
                                                <p>Jugeter??a</p>
                                            </div>
                                        </a>                                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* )} */}
            {submenuOpen && (                                
                <div className="menu-block-mobile">
                    <div className="menu-row-mobile">
                        <div className="back-to-menu" onClick={() => setSubMenuOpen(!submenuOpen)}>
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Men??</p>
                        </div>
                        <div className="mobile-submenu-body">
                            <div className="mobile-submenu-heading">
                                <p>S??per</p>
                                <a href="/">Ver todo</a>
                            </div>
                            <div className="mobile-submenu-list">
                                <ul>
                                    <li onClick={() => setsubmenuLevelOne(!submenuLevelOne)}>
                                        <div className="subcategory-container">
                                            <p>Frutas y verduras</p>
                                            <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                        </div>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Carnes y aves</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div> 
                                        </a>                                                                      
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Pescados y mariscos</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Salchichoner??a</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                              
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>L??cteos y huevo</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div> 
                                        </a>                               
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Quesos</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Despensa</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>    
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Refrigerado y congelado</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Panader??a y tortiller??a</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>                                            
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Fuente de Sodas</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Productos a granel</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div> 
                                        </a>                               
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Desechables</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div> 
                                        </a>                               
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Limpieza del hogar</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div> 
                                        </a>                               
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Cuidado personal</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div> 
                                        </a>                               
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Bebidas</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div> 
                                        </a>                               
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            )}
            {submenuLevelOne && (
                <div className="menu-block-mobile">
                    <div className="menu-row-mobile">
                        <div className="back-to-menu" onClick={() => setsubmenuLevelOne(!submenuLevelOne)}>
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Men??</p>
                        </div>
                        <div className="mobile-submenu-body">
                            <div className="mobile-submenu-heading">
                                <p>Frutas y verduras</p>
                                <a href="/">Ver todo</a>
                            </div>
                            <div className="mobile-submenu-list">
                                <ul>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Frutas</a>
                                        </div>                                
                                    </li>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Verduras</a>
                                        </div>                                
                                    </li>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Org??nicos</a>
                                        </div>                                
                                    </li>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Ensaladas</a>
                                        </div>                                
                                    </li>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Desinfectantes</a>
                                        </div>                                
                                    </li>                                    
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            )}
            {submenuTwoOpen && (                                
                <div className="menu-block-mobile">
                    <div className="menu-row-mobile">
                        <div className="back-to-menu" onClick={() => setSubMenuTwoOpen(!submenuTwoOpen)}>
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Men??</p>
                        </div>
                        <div className="mobile-submenu-body">
                            <div className="mobile-submenu-heading">
                                <p>Vinos y Licores</p>
                                <a href="/">Ver todo</a>
                            </div>
                            <div className="mobile-submenu-list">
                                <ul>
                                    <li onClick={() => setsubmenuLevelTwo(!submenuLevelTwo)}>
                                        <div className="subcategory-container">
                                            <p>Vinos</p>
                                            <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                        </div>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Licores y destilados</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Cervezas</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                                
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Complementos</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                                
                                    </li>                                
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            )}
            {submenuLevelTwo && (
                <div className="menu-block-mobile">
                    <div className="menu-row-mobile">
                        <div className="back-to-menu" onClick={() => setsubmenuLevelTwo(!submenuLevelTwo)}>
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Men??</p>
                        </div>
                        <div className="mobile-submenu-body">
                            <div className="mobile-submenu-heading">
                                <p>Vinos</p>
                                <a href="/">Ver todo</a>
                            </div>
                            <div className="mobile-submenu-list">
                                <ul>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Vinos tintos</a>
                                        </div>                                
                                    </li>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Vinos blancos</a>
                                        </div>                                
                                    </li>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Espumosos</a>
                                        </div>                                
                                    </li>
                                    <li>
                                        <div className="subcategory-container">
                                            <a href="/">Vinos rosados</a>
                                        </div>                                
                                    </li>                                   
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            )}                        
            </>
        ):(
            <div className="menu-block">
                <div className="menu-row">
                    <ul>
                        <li onMouseOver={() => handleMouseOver('super')}>
                            <a>
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/f4f93dd3-c236-4d4e-beb0-b6ab42383329___c55b4ea9412e20333d5c69302a4dc95a.svg" />
                                    <p>S??per</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>                                
                            </a>
                        </li>
                        <li onMouseOver={() => handleMouseOver('vinos')}>
                            <a>
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/ce13c07d-8992-4636-8fc3-4cab87ef4ad2___a60b4942fd4430e111e5e3fda38f9ca5.svg" />
                                    <p>Vinos y Licores</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a>
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/30cbb49d-da34-4017-ab90-f7e92166656d___7bed4504b648dc6cae31e36a54004154.svg" />
                                    <p>Beb??s</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/227f53c9-e4af-49de-9d2c-be744fb2fa63___7912edde9357c84a0f380393ab9ba260.svg" />
                                    <p>Farmacia</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                            
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/e3e5c7a7-5072-4b34-aa49-29bb2cfcc5aa___2e9d778590765c09b5c65f678a854c08.svg" />
                                    <p>Moda y Belleza</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                            
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/19909f1f-b90f-4f1a-b946-7be655fd14ca___d5d814afc4310f34418e70b281c84e44.svg" />
                                    <p>Mascotas</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                                                        
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/47cf41a8-ff24-4816-a149-825236a5e5d0___3828a0f42ec9381847f5d7b4eb9a9f96.svg" />
                                    <p>Hogar, oficina y jard??n</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                                                        
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/358e5458-1ed8-4812-af60-a5d5c3a7975f___c0953fd58423825db6544657c11ce26d.svg" />
                                    <p>Tecnolog??a</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                                                        
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/f64bb704-c37f-44a6-bb6a-839c1e31b8e1___02bc21fe32a10e4c8992c09530c7323b.svg" />
                                    <p>Deportes y ocio</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                                                        
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/d5058bbe-1371-4019-8997-d2d7597a6259___a842a2e3b04d7fff82251aa778186ce1.svg" />
                                    <p>Jugeter??a</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                                                        
                        </li>
                    </ul>
                </div>
                {isHovering && (
                    <div className="submenu-row" onMouseOver={handleOverFirstModal} onMouseOut={handleMouseOut}>
                        {showSubcat === 'super' ? (
                            <div className="subcategory-super">
                                <div className="subcategory-title">
                                    <h3>Super</h3> <a href="/">Ver todo</a>
                                </div>
                                <div className="subcategory-list">
                                    <div className="first-row-list">
                                        <div className="first-column">
                                            <p>Frutas y Verduras</p>
                                            <ul>
                                                <li><a href="/">Frutas</a></li>
                                                <li><a href="/">Verduras</a></li>
                                                <li><a href="/">Organicos</a></li>
                                                <li><a href="/">Ensaladas</a></li>
                                                <li><a href="/">Desinfectantes</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="second-column">
                                            <p>Carnes y Aves</p>
                                            <ul>
                                                <li><a href="/">Res</a></li>
                                                <li><a href="/">Preparados de res</a></li>
                                                <li><a href="/">Bistec y milanesas</a></li>
                                                <li><a href="/">Carne molida</a></li>
                                                <li><a href="/">Cerdo</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="third-column">
                                            <p>Pescados y mariscos</p>
                                            <ul>
                                                <li><a href="/">Filetes de pescado</a></li>
                                                <li><a href="/">Pescados enteros</a></li>
                                                <li><a href="/">Mariscos</a></li>
                                                <li><a href="/">Camarones</a></li>
                                                <li><a href="/">Salados y secos</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                    <div className="second-row-list">
                                        <div className="fourth-column">
                                            <p>Salchichoner??a</p>
                                            <ul>
                                                <li><a href="/">Jam??n</a></li>
                                                <li><a href="/">Pechuga de pavo</a></li>
                                                <li><a href="/">Salchichas</a></li>
                                                <li><a href="/">Chorizo</a></li>
                                                <li><a href="/">Tocino</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="fifth-column">
                                            <p>L??cteos y huevo</p>
                                            <ul>
                                                <li><a href="/">Leche entera</a></li>
                                                <li><a href="/">Leche fresca</a></li>
                                                <li><a href="/">Leche light</a></li>
                                                <li><a href="/">Leche descremada</a></li>
                                                <li><a href="/">Leche semidescremada</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="sixth-column">
                                            <p>Quesos</p>
                                            <ul>
                                                <li><a href="/">Queso manchego</a></li>
                                                <li><a href="/">Queso panela</a></li>
                                                <li><a href="/">Queso oaxaca</a></li>
                                                <li><a href="/">Queso americano</a></li>
                                                <li><a href="/">Queso crema y doblecrema</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                    <div className="third-row-list">
                                        <div className="seventh-column">
                                            <p>Despensa</p>
                                            <ul>
                                                <li><a href="/">Aceites</a></li>
                                                <li><a href="/">Aderezos y salsas</a></li>
                                                <li><a href="/">Alimentos preparados</a></li>
                                                <li><a href="/">Arroz</a></li>
                                                <li><a href="/">Ates y alm??bares</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="eighth-column">
                                            <p>Refrigerado y congelado</p>
                                            <ul>
                                                <li><a href="/">Hielo</a></li>
                                                <li><a href="/">Papas para fre??r</a></li>
                                                <li><a href="/">Verduras y frutas</a></li>
                                                <li><a href="/">Carne y aves</a></li>
                                                <li><a href="/">Pescados y mariscos</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="ninth-column">
                                            <p>Panader??a y tortiller??a</p>
                                            <ul>
                                                <li><a href="/">Baguettes</a></li>
                                                <li><a href="/">Bolillos, teleras, chapatas y pambazos</a></li>
                                                <li><a href="/">Pan empacado</a></li>
                                                <li><a href="/">Pan tostado</a></li>
                                                <li><a href="/">Empanadas</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ):(
                            <div className="subcategory-super">
                                <div className="subcategory-title">
                                    <h3>Vinos y licores</h3> <a href="/">Ver todo</a>
                                </div>
                                <div className="subcategory-list">
                                    <div className="first-row-list">
                                        <div className="first-column">
                                            <p>Vinos</p>
                                            <ul>
                                                <li><a href="/">Vinos tintos</a></li>
                                                <li><a href="/">Vinos blancos</a></li>
                                                <li><a href="/">Espumosos</a></li>
                                                <li><a href="/">Vinos rosados</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="second-column">
                                            <p>Licores y destilados</p>
                                            <ul>
                                                <li><a href="/">Licores</a></li>
                                                <li><a href="/">Destilados</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="third-column">
                                            <p>Cervezas</p>
                                            <ul>
                                                <li><a href="/">Cervezas importadas</a></li>
                                                <li><a href="/">Cervezas nacionales</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                    <div className="second-row-list">
                                        <div className="fourth-column">
                                            <p>Complementos</p>
                                            <ul>
                                                <li><a href="/">Bebidas preparadas</a></li>
                                                <li><a href="/">Salsas y escarchas</a></li>
                                                <li><a href="/">Accesorios para fumar</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }    
                    </div>
                )}
            </div>
        )}

        </>
    )
}

export default Categories