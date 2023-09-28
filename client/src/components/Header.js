import React from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
function Header(){

    return (
        <div>
            <ul>
                <li><NavLink to = '/somePage'>click Me</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;