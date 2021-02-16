import React from 'react'
import Logo from '../assets/img/logo.svg'
import DownArrow from '../assets/icons/down-arrow.svg'


const Header = () =>{
    return(
        <header>
            <img src={Logo} alt="Logo"/>
            
            <div className="header--title-container" >
                <h1>La próxima revolción en el intercambio de criptomonedas</h1>
                <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias</p>
                <a href="#plans" className="header--button" >Conoce Nuestros Planes <img className="header--button--icon" src={DownArrow} alt=""/></a>
            </div>

        </header>
        
    )
}

export default Header