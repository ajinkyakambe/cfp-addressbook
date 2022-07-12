import React, { Component } from 'react';
import Logo from '../../../Assets/images/logo.png'
import './header.scss'

class Header extends Component {
    render() {
        return (
            <>            
            <header className="header-content header">
                <div className="logo-content">
                    <img src={Logo} alt="" />
                    <div>
                        <span className="address-text">Address</span><br/>
                        <span className="address-text address-book">Book</span><br/>
                    </div>
                </div>
            </header>            
            </>
        );
    }
}

export default Header;