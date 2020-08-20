import React, { Component } from 'react';
import NavLinks from '../Navigation/NavLinks';
import Logo from '../../assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={Logo} alt="expire logo" height={200} />
                <div className="header-text">
                    <NavLinks />
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        );
    }
}

export default Header;
