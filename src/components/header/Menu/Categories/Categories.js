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
        } else if(hoveredCategory === 'vinos') {
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
        {isMobile < 990 ? (
            <>            
            <div className="menu-block-mobile">
                <div className="menu-row-mobile">
                    <div className="available-space">
                        <div className="menu-header">
                            <div className="menu-logo">
                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/ea5c1413-971b-4b55-a906-d232216b2dd9___df4fd208880219bf1d7d67626306b6d5.svg" alt="mobile logo" />
                            </div>
                            <div className="menu-login">
                                <a href="/">
                                    <p>Inicia sesión o regístrate</p>
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
                                            <p>Súper</p>
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
                                                <p>Bebés</p>
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
                                                <p>Hogar, oficina y jardín</p>
                                            </div>
                                        </a>                                                        
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="category-container">
                                                <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/358e5458-1ed8-4812-af60-a5d5c3a7975f___c0953fd58423825db6544657c11ce26d.svg" />
                                                <p>Tecnología</p>
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
                                                <p>Jugetería</p>
                                            </div>
                                        </a>                                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {submenuOpen && (                                
                <div className="menu-block-mobile">
                    <div className="menu-row-mobile">
                        <div className="back-to-menu" onClick={() => setSubMenuOpen(!submenuOpen)}>
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Menú</p>
                        </div>
                        <div className="mobile-submenu-body">
                            <div className="mobile-submenu-heading">
                                <p>Súper</p>
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
                                                <p>Salchichonería</p>
                                                <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                            </div>
                                        </a>                              
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="subcategory-container">
                                                <p>Lácteos y huevo</p>
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
                                                <p>Panadería y tortillería</p>
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
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Menú</p>
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
                                            <a href="/">Orgánicos</a>
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
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Menú</p>
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
                            <p><FontAwesomeIcon className="chevron-left-mobile" icon={faChevronLeft} /> Menú</p>
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
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/f4f93dd3-c236-4d4e-beb0-b6ab42383329___c55b4ea9412e20333d5c69302a4dc95a.svg" />
                                    <p>Súper</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>                                
                            </a>
                        </li>
                        <li onMouseOver={() => handleMouseOver('vinos')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/ce13c07d-8992-4636-8fc3-4cab87ef4ad2___a60b4942fd4430e111e5e3fda38f9ca5.svg" />
                                    <p>Vinos y Licores</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/30cbb49d-da34-4017-ab90-f7e92166656d___7bed4504b648dc6cae31e36a54004154.svg" />
                                    <p>Bebés</p>
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
                                    <p>Hogar, oficina y jardín</p>
                                    <FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} />
                                </div>
                            </a>                                                        
                        </li>
                        <li onMouseOver={() => handleMouseOver('')}>
                            <a href="/">
                                <div className="category-container">
                                    <img src="https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/358e5458-1ed8-4812-af60-a5d5c3a7975f___c0953fd58423825db6544657c11ce26d.svg" />
                                    <p>Tecnología</p>
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
                                    <p>Jugetería</p>
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
                                                <li><a>Frutas</a></li>
                                                <li><a>Verduras</a></li>
                                                <li><a>Organicos</a></li>
                                                <li><a>Ensaladas</a></li>
                                                <li><a>Desinfectantes</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="second-column">
                                            <p>Carnes y Aves</p>
                                            <ul>
                                                <li><a>Res</a></li>
                                                <li><a>Preparados de res</a></li>
                                                <li><a>Bistec y milanesas</a></li>
                                                <li><a>Carne molida</a></li>
                                                <li><a>Cerdo</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="third-column">
                                            <p>Pescados y mariscos</p>
                                            <ul>
                                                <li><a>Filetes de pescado</a></li>
                                                <li><a>Pescados enteros</a></li>
                                                <li><a>Mariscos</a></li>
                                                <li><a>Camarones</a></li>
                                                <li><a>Salados y secos</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                    <div className="second-row-list">
                                        <div className="fourth-column">
                                            <p>Salchichonería</p>
                                            <ul>
                                                <li><a>Jamón</a></li>
                                                <li><a>Pechuga de pavo</a></li>
                                                <li><a>Salchichas</a></li>
                                                <li><a>Chorizo</a></li>
                                                <li><a>Tocino</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="fifth-column">
                                            <p>Lácteos y huevo</p>
                                            <ul>
                                                <li><a>Leche entera</a></li>
                                                <li><a>Leche fresca</a></li>
                                                <li><a>Leche light</a></li>
                                                <li><a>Leche descremada</a></li>
                                                <li><a>Leche semidescremada</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="sixth-column">
                                            <p>Quesos</p>
                                            <ul>
                                                <li><a>Queso manchego</a></li>
                                                <li><a>Queso panela</a></li>
                                                <li><a>Queso oaxaca</a></li>
                                                <li><a>Queso americano</a></li>
                                                <li><a>Queso crema y doblecrema</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                    <div className="third-row-list">
                                        <div className="seventh-column">
                                            <p>Despensa</p>
                                            <ul>
                                                <li><a>Aceites</a></li>
                                                <li><a>Aderezos y salsas</a></li>
                                                <li><a>Alimentos preparados</a></li>
                                                <li><a>Arroz</a></li>
                                                <li><a>Ates y almíbares</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="eighth-column">
                                            <p>Refrigerado y congelado</p>
                                            <ul>
                                                <li><a>Hielo</a></li>
                                                <li><a>Papas para freír</a></li>
                                                <li><a>Verduras y frutas</a></li>
                                                <li><a>Carne y aves</a></li>
                                                <li><a>Pescados y mariscos</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="ninth-column">
                                            <p>Panadería y tortillería</p>
                                            <ul>
                                                <li><a>Baguettes</a></li>
                                                <li><a>Bolillos, teleras, chapatas y pambazos</a></li>
                                                <li><a>Pan empacado</a></li>
                                                <li><a>Pan tostado</a></li>
                                                <li><a>Empanadas</a></li>
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
                                                <li><a>Vinos tintos</a></li>
                                                <li><a>Vinos blancos</a></li>
                                                <li><a>Espumosos</a></li>
                                                <li><a>Vinos rosados</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="second-column">
                                            <p>Licores y destilados</p>
                                            <ul>
                                                <li><a>Licores</a></li>
                                                <li><a>Destilados</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                        <div className="third-column">
                                            <p>Cervezas</p>
                                            <ul>
                                                <li><a>Cervezas importadas</a></li>
                                                <li><a>Cervezas nacionales</a></li>
                                            </ul>
                                            <a href="/" className="all">Ver todo</a>
                                        </div>
                                    </div>
                                    <div className="second-row-list">
                                        <div className="fourth-column">
                                            <p>Complementos</p>
                                            <ul>
                                                <li><a>Bebidas preparadas</a></li>
                                                <li><a>Salsas y escarchas</a></li>
                                                <li><a>Accesorios para fumar</a></li>
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