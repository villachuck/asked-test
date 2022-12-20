import React from 'react';
import './HelpBar.css';

const HelpBar = () => {

    return (
        <>
        <div className='help-bar'>
            <div className='inside'>
                <div className='other-categories'>
                    <ul>
                        <li>
                            <a href="/">Selecto</a>
                        </li>
                        <li>
                            <a href="/">Martimiércoles</a>
                        </li>
                        <li>
                            <a href="/">Chedrauilandia</a>
                        </li>
                        <li>
                            <a href="/">Mundial</a>
                        </li>
                        <li>
                            <a href="/">Colecciones navideñas</a>
                        </li>
                    </ul>
                </div>
                <div className='helpers'>
                    <ul>
                        <li>
                            <a href="/" className='login'>Ingresar</a>
                        </li>
                        <li>
                            <a href="/">Ayuda</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='inside-mobile'>
                <a href='/'>
                    Agregar mi Ubicación
                </a>
            </div>
        </div>
        </>
    )

}

export default HelpBar