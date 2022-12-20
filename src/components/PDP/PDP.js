import React, {useEffect, useState} from "react";
import '../PDP/PDP.css';
import Shelfs from '../../components/home/Shelfs/Shelfs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListCheck, faHeart, faShoppingCart, faShareNodes, faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PDP = () => {

    let actualUrl = window.location.pathname;
    let productId = actualUrl.substring(actualUrl.lastIndexOf('/') + 1)

    let [product, setProduct] = useState([])
    let [stars, setStars] = useState('')
    let [quantity, setQty] = useState('')

    const isMobile = window.innerWidth;

    //API GET para traer el detalle de producto
    const getInfo = () => {

        fetch('https://fakestoreapi.com/products/' + productId)
        .then(res => {
            return res.json()
        })
        .then(data => {
            //Se asigna respuesta al estado
            setProduct(data)
            
            setTimeout(() => {
                //Se asigna calificación para calcular estrellas. Se redondea para mostrar en front cantidad de estrellas
                setStars(data.rating.rate);
                //Se asigna cantidad de reseñas
                setQty(data.rating.count);
            }, 1000)
        })
    }

    useEffect(() => {
        getInfo();
    },[])    

    return(
        <>
            <div className="detail-container">
                <div className="detail-row">
                    {isMobile < 768 ? (
                        <>
                        <div className="mobile-layout">
                            <div className="breadcrumb">
                                <FontAwesomeIcon className="home-icon" icon={faArrowLeft} /> <a className="category-name" href="/">{product.category}</a>
                            </div>
                            <div className="principal-information-mobile">
                                <div className="detail-image">
                                    <img src={product.image} />
                                    <FontAwesomeIcon className="list-icon-mobile" icon={faListCheck} />
                                    <FontAwesomeIcon className="heart-icon-mobile" icon={faHeart} />
                                </div>
                                <div className="product-category">
                                    <a href="/">{product.category}</a>
                                </div>
                                <div className="name-product">
                                    <p>{product.title}</p>
                                </div>
                                <div className="product-reference">
                                    <p>Referencia: {product.id}</p>
                                </div>
                                <div className="pdp-price">
                                    {Number.isInteger(product.price) === true ? (
                                        <p>${product.price}.00</p>
                                    ):(
                                        <p>${product.price}</p>
                                    )}
                                </div>
                            </div>
                            <div className="info-section-mobile">
                                <p className="title-info">Información</p>
                                <p className="entire-info">{product.description}</p>
                                <p className="share-product"><FontAwesomeIcon className="share-icon" icon={faShareNodes} /> Comparte este producto</p>
                            </div>
                            <div className="content-n-rates">
                                <Tabs>
                                    <TabList>
                                    <Tab>Descripción</Tab>
                                    <Tab>Reseñas</Tab>
                                    </TabList>

                                    <TabPanel>
                                    <p className="tabs-description">{product.description}</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="center-rates">
                                            <span className="rates">{stars}</span> {Array(Math.round(stars)).fill(<FontAwesomeIcon className="star-rates-icon" icon={faStar} />)}
                                            <span className="votes">{quantity} Reseñas</span>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        <div className="mobile-layout-shelf">
                            <div className="suggestions">
                                <div className="suggestions-title">
                                    <p>Productos relacionados</p>
                                    </div>
                                <Shelfs titleVitrine={false} categoryName={"women's clothing"} />
                            </div>
                        </div>
                        </>
                    ):(
                        <>
                            <div className="breadcrumb">
                                <FontAwesomeIcon className="home-icon" icon={faHome} /> / <a className="category-name" href="/">{product.category}</a> / <span className="actual-product" >{product.title}</span>
                            </div>
                            <div className="product-category">
                                <a href="/">{product.category}</a>
                            </div>
                            <div className="principal-information">
                                <div className="image-section">
                                    <div className="name-product">
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="product-reference">
                                        <p>Referencia: {product.id}</p>
                                    </div>
                                    <div className="detail-image">
                                        <img src={product.image} />
                                    </div>
                                </div>
                                <div className="info-section">
                                    <div className="buttons-section">
                                        <a>
                                            <div className="btn-favorites">
                                                <FontAwesomeIcon className="button-icon" icon={faHeart} /> Añadir a favoritos
                                            </div>
                                        </a>
                                        <a>
                                            <div className="btn-list">
                                                <FontAwesomeIcon className="button-2-icon" icon={faListCheck} /> Añadir a la lista
                                            </div>                                    
                                        </a>
                                    </div>
                                    <div className="secondary-section">
                                        <div className="description-inside">
                                            <p className="title-info">Información</p>
                                            <p className="entire-info">{product.description}</p>
                                            <p className="share-product"><FontAwesomeIcon className="share-icon" icon={faShareNodes} /> Comparte este producto</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="buy-section">
                                    <div className="pdp-price">
                                        {Number.isInteger(product.price) === true ? (
                                            <p>${product.price}.00</p>
                                        ):(
                                            <p>${product.price}</p>
                                        )}
                                    </div>
                                    <div className="cta-on-pdp">
                                        <a>
                                            <div className="pdp-buy-button">
                                                <FontAwesomeIcon className="buy-icon" icon={faShoppingCart} /> Agregar                                                
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="content-n-rates">
                                <Tabs>
                                    <TabList>
                                    <Tab>Descripción</Tab>
                                    <Tab>Reseñas</Tab>
                                    </TabList>

                                    <TabPanel>
                                    <p className="tabs-description">{product.description}</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="center-rates">
                                            <span className="rates">{stars}</span> {Array(Math.round(stars)).fill(<FontAwesomeIcon className="star-rates-icon" icon={faStar} />)}
                                            <span className="votes">{quantity} Reseñas</span>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <div className="suggestions">
                                <div className="suggestions-title">
                                    <p>Productos relacionados</p>
                                    </div>
                                <Shelfs titleVitrine={false} categoryName={"women's clothing"} />
                            </div>                        
                        </>
                    )}
                </div>
            </div>
        </>
    )

}

export default PDP