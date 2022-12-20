import React, { useState, useRef, useEffect } from 'react';
import './Counter.css';
import Countdown from 'react-countdown';

const Counter = () => {
        
    const year = new Date().getFullYear();
    //Se calculan días restantes
    const endDate = +new Date(`${year}-12-27`) - +new Date();

    //Al llegar a la fecha requerida (deadline) se mostrará el siguiente mensaje:
    const Message = () => <p className='todaysTitle'>Martimiércoles Chedraui</p>

    return (
        <>
            <div className='counter-section'>
                <div className='counter-block'>
                    <div className='counter-text'>
                        <p>Descubre nuevas ofertas en:</p>
                    </div>                    
                    <div className='countdown'>
                        <p>
                            <Countdown date={Date.now() + endDate}>
                                <Message />
                            </Countdown>
                        </p>
                    </div>                    
                </div>
            </div>
        </>
    )

}

export default Counter