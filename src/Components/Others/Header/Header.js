import React from 'react'
import Logo from '../Images/image.png'
import './Header.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <nav class="Navbar">
                <img src={Logo} alt="" class="homeimg"></img>
                    <ul class="Home_ul">
                        <li><Link to=''>Doctors</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Home</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                    <Button class="home_button">Book Appointment</Button>
            </nav>
        </div>
    )
}

export default Header