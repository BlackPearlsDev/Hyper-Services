import React from 'react';
import logo from '../../../assets/logo.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <section id='logoTitle'>
                <img src={logo} alt="Le logo du site" id='siteLogo'/>
                <h1>HYPER SERVICES</h1>
            </section>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'aboutus'}>About Us</Link>
                <Link to={'contact'}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;