import React from 'react'
import logo from '../assets/logo2.png'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Hospital Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#appointments">Appointments</a></li>
                    <li><a href="#doctors">Doctors</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header