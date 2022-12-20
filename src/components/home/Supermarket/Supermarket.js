import React from 'react';
import './Supermarket.css';

const Supermarket = () => {

    return (
        <>
            <div className='supermarket-section'>
                <div className='supermarket-row'>
                    <div className='block-one'>
                        <p>Disfruta más productos con precios increíbles</p>
                        <a href="#">Ir al Supermercado</a>
                    </div>
                    <a href='/' className='block-two'>
                        <div className='block-two-container'>
                            <img src='https://chedrauimx.vteximg.com.br/arquivos/verduras.svg' alt="Frutas y verduras" />
                            <p>Frutas y Verduras</p>                      
                        </div>
                    </a>
                    <a href='/' className='block-three'>
                        <div className='block-three-container'>
                            <img src='https://chedrauimx.vteximg.com.br/arquivos/verduras.svg' alt="Lacteos y huevo" />
                            <p>Lácteos y huevo</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Supermarket