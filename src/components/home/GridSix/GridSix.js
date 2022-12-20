import React from 'react';
import './GridSix.css';

import Carousel from 'better-react-carousel'

const GridSix = () => {
    const isMobile = window.innerWidth;

    return (
        <>
        <div className='grid-section'>
            <div className='grid-container'>
                <div className='grid-top-row'>
                    <div className='first-section-banner'>
                        <a>
                            <h2>Disfruta del Martimiércoles de Chedraui</h2>
                            <p>Cada martes y miércoles creamos los mejores precios en frutas y verduras para ti y tu familia.</p>
                            <img src="https://chedrauimx.vteximg.com.br/arquivos/Naranja_textos.jpg" alt='banner informativo' />
                        </a>                          
                    </div>
                    <div className='second-section-banner'>
                        <a href='/productos/19'>
                            <p>Manzana roja mediana</p>
                            <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Manzana-Roja-0002-E.jpg" alt='manzana' />
                        </a>                          
                    </div>
                    <div className='third-section-banner'>
                        <a href='/productos/14'>
                            <p>Mango ataulfo</p>
                            <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI%20FRESCOS-Mango-Ataulfo-0147-Ec.jpg" alt='mango ataulfo' />  
                        </a>                        
                    </div>
                </div>

                {isMobile < 768 ? (
                    <>
                    <div className='grid-middle-row'>
                        <Carousel cols={1} rows={1} gap={10} >
                            <Carousel.Item>
                                <div className='middle-section-banner'>
                                    <a href='/productos/19'>
                                        <p>Manzana roja mediana</p>
                                        <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Manzana-Roja-0002-E.jpg" alt='manzana' />
                                    </a>                          
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='middle-section-banner'>
                                    <a href='/productos/14'>
                                        <p>Mango ataulfo</p>
                                        <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI%20FRESCOS-Mango-Ataulfo-0147-Ec.jpg" alt='mango ataulfo' />  
                                    </a>                        
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='middle-section-banner'>
                                    <a href='/productos/3'>
                                        <p>Lechuga romana</p>
                                        <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Lechuga-Italiana-0006-E.jpg" alt='lechuga romana' />    
                                    </a>                        
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='middle-section-banner'>
                                    <a href='/productos/6'>
                                        <p>Papa blanca</p>
                                        <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS%20Papa-Blanca-0210-E.jpg" alt='papa blanca' />  
                                    </a>                        
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>    
                    </>
                ):(
                    ''
                )}

                <div className='grid-bottom-row'>
                    <div className='fourth-section-banner'>
                        <a href='/productos/3'>
                            <p>Lechuga romana</p>
                            <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Lechuga-Italiana-0006-E.jpg" alt='lechuga romana' />    
                        </a>                          
                    </div>
                    <div className='fifth-section-banner'>
                        <a href='/productos/6'>
                            <p>Papa blanca</p>
                            <img src="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS%20Papa-Blanca-0210-E.jpg" alt='papa blanca' />  
                        </a>                        
                    </div>
                    <div className='sixth-section-banner'>
                        <a>
                            <h2>Encuentra las mejores frutas y verduras</h2>
                            <p>Sabemos lo importante que es tener una alimentación balanceada y con alimentos nutritivos.</p>
                            <img src="https://chedrauimx.vteximg.com.br/arquivos/Naranja_textos.jpg" alt='banner informativo' />
                        </a>                          
                    </div>
                </div>
            </div>
        </div>            
        </>
    )

}

export default GridSix