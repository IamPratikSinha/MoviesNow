import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
        <span onClick={() => window.scroll(0,0)} className = "Header">Movies Now</span>
        
        <ul className = "navElements">
            <li><Link to ='/' className ="Home"> Trending </ Link></li>
            <li><Link to ='/Movies' className ="Home"> Movies </ Link></li>
            <li><Link to ='/Series' className ="Home"> Series </ Link></li>
            <li><Link to ='/Search' className ="Home"> Search </ Link></li>
        </ul>
        

        </>
    )
}

export default Header
