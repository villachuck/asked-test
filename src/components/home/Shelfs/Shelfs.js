import React, {useEffect, useState} from 'react';
import './Shelfs.css';

import Carousel from 'better-react-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Shelfs = ( { titleVitrine, categoryName } ) => {
    //titleVitrine - prop para mostrar u ocultar el título de la vitrina
    //categoryName - prop para obtener la categoría

    let [productData, setData] = useState([])

    const isMobile = window.innerWidth;

    let setResponsive = [
        {
            breakpoint: 990, 
            cols: 4, 
            rows: 1, 
            loop: true 
        },
        {
            breakpoint: 768, 
            cols: 2, 
            rows: 1, 
            loop: true 
        }
    ];

    //API GET para traer productos de la categoría
    const getData = () => {
        fetch('https://fakestoreapi.com/products/category/' + categoryName)
        .then(res => {
            return res.json()
        })
        .then(data => {
            //Se asigna respuesta al estado
            setData(data)
            console.log(data)
        })
    }

    useEffect(() => {
        getData();
    },[])


    return (
        <>
            <div className='shelfs-container'>
                <div className='shelfs-row'>
                    {titleVitrine === true ? (
                        <div className='shelfs-title'>
                            <p>Descubre lo mejor en frescura</p>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className='shelf-one'>
                        <Carousel cols={6} rows={1} gap={10} loop showDots responsiveLayout={setResponsive} hideArrow={isMobile < 990 ? false : true}>                        
                        {
                            productData.map(product => (
                                <Carousel.Item>
                                    <div className='product-card'>
                                        <div className='product-image'>
                                            <a href={'/productos/' + product.id}>
                                                <img src={product.image} alt={product.title} />
                                            </a>                                            
                                        </div>
                                        <div className='product-name'>
                                            {product.title}
                                        </div>
                                        <div className='product-price'>
                                            {Number.isInteger(product.price) === true ? (
                                                <p>${product.price}.00</p>
                                            ):(
                                                <p>${product.price}</p>
                                            )}
                                        </div>
                                        <div className='product-cta'>
                                            <div className='buy-button'>
                                                <a className='link-button' href={'/productos/' + product.id}>
                                                    <FontAwesomeIcon className="buy-icon" icon={faShoppingCart} /> Agregar                                                
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))
                        }                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Shelfs