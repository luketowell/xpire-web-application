import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavLinks extends Component {
    render(){
        return(
            <div >
                <ul className="NavLinks">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/metrics">Metrics</Link>
                    </li>
                    <li>
                        <Link to="/storeinfo">Store Info</Link>
                    </li>
                </ul>
            </div>
        )     
    }
}

export default NavLinks