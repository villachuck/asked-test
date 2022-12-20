import React, {useState} from 'react';
import './Recommendations.css';

import Carousel from 'better-react-carousel'
    

const Recommendations = () => {
    const isMobile = window.innerWidth;

    const [showBack, setshowBack] = useState(false);

    const switchStyle =  {
        zIndex : showBack ? '-1' : '1'
    }
    

    return (
        <>
            <div className='recommendations-container'>
                <div className='recommendations-row'>
                    <div className='recommendations-title'>
                        <p>4 pasos para mejorar una alimentación saludable</p>
                    </div>
                    <div className='recommendations-steps'>
                        {isMobile < 768 ? (
                            <>
                                <Carousel cols={1} rows={1} gap={10} >
                                    <Carousel.Item>
                                        <div className='step-1'>
                                            <div className='image-card-1' style={switchStyle} onClick={() => setshowBack(!showBack)}>
                                                <p className='number'>1</p>
                                                <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso1.jpg' alt="paso uno" />
                                                <p className='title'>Fija un<br/>estilo para<br/>comer</p>
                                                <span className='img-inside'>
                                                    <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%201.png" alt='fruta' />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='step-1-back' onClick={() => setshowBack(!showBack)}>
                                            <p>Escuchar la palabra “dieta” puede ser algo complicado de asimilar y, en general, las fiestas se basan en alimentos bajos en calorías. Eso siempre funciona. Pero, lo mejor es un cambio de tu estilo para comer y, más importante aún, que sea sostenible para ti y tu familia. Los alimentos orgánicos siempre serán una buena opción.</p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className='step-2'>
                                            <div className='image-card-2'>
                                                <p className='number'>2</p>
                                                <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso2.jpg' alt="paso dos" />
                                                <p className='title'>Incluye<br/>macro<br/>nutrientes</p>
                                                <span className='img-inside'>
                                                    <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%202.png" alt='carne' />
                                                </span>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className='step-3'>
                                            <div className='image-card-3'>
                                                <p className='number'>3</p>
                                                <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso3.jpg' alt="paso tres" />
                                                <p className='title'>Haz 5<br/>comidas<br/>al día</p>
                                                <span className='img-inside'>
                                                    <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%203.png" alt='yogurt' />
                                                </span>
                                            </div>
                                            <div className='text-behind-3'></div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className='step-4'>
                                            <div className='image-card-4'>
                                                <p className='number'>4</p>
                                                <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso4.jpg' alt="paso cuatro" />
                                                <p className='title'>Toma<br/>2 litros<br/>de agua</p>
                                                <span className='img-inside-4'>
                                                    <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%204.png" alt="agua" />
                                                </span>
                                            </div>
                                            <div className='text-behind-4'></div>                            
                                        </div> 
                                    </Carousel.Item>
                                </Carousel>                            
                            </>
                        ):(
                            <>
                                <div className='step-1' >
                                    <div className="image-card-1" style={switchStyle} onClick={() => setshowBack(!showBack)}>
                                        <p className='number'>1</p>
                                        <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso1.jpg' alt="paso uno" />
                                        <p className='title'>Fija un<br/>estilo para<br/>comer</p>
                                        <span className='img-inside'>
                                            <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%201.png" alt='fruta'  />
                                        </span>
                                    </div>
                                    <div className='text-behind-1' onClick={() => setshowBack(!showBack)} >
                                        <p onMouseOut={() => setshowBack(!showBack)}>
                                            Escuchar la palabra “dieta” puede ser algo complicado de asimilar y, en general, las fiestas se basan en alimentos bajos en calorías. Eso siempre funciona. Pero, lo mejor es un cambio de tu estilo para comer y, más importante aún, que sea sostenible para ti y tu familia. Los alimentos orgánicos siempre serán una buena opción.
                                        </p>
                                    </div>
                                </div>
                                <div className='step-2'>
                                    <div className='image-card-2'>
                                        <p className='number'>2</p>
                                        <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso2.jpg' alt="paso dos" />
                                        <p className='title'>Incluye<br/>macro<br/>nutrientes</p>
                                        <span className='img-inside'>
                                            <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%202.png" alt='carne' />
                                        </span>
                                    </div>
                                    <div className='text-behind-2'></div>
                                </div>
                                <div className='step-3'>
                                    <div className='image-card-3'>
                                        <p className='number'>3</p>
                                        <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso3.jpg' alt="paso tres" />
                                        <p className='title'>Haz 5<br/>comidas<br/>al día</p>
                                        <span className='img-inside'>
                                            <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%203.png" alt='yogurt' />
                                        </span>
                                    </div>
                                    <div className='text-behind-3'></div>
                                </div>
                                <div className='step-4'>
                                    <div className='image-card-4'>
                                        <p className='number'>4</p>
                                        <img src='https://chedrauimx.vteximg.com.br/arquivos/Back_paso4.jpg' alt="paso cuatro" />
                                        <p className='title'>Toma<br/>2 litros<br/>de agua</p>
                                        <span className='img-inside-4'>
                                            <img src="https://chedrauimx.vteximg.com.br/arquivos/img-Paso%204.png" alt="agua" />
                                        </span>
                                    </div>
                                    <div className='text-behind-4'></div>                            
                                </div>  
                            </>
                        )}                          
                    </div>                        
                </div>
            </div>
        </>
    )

}

export default Recommendations