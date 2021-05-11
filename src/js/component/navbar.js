import React from "react";
import { Link } from "react-router-dom";
import star from "../../img/star.jpg";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light mh-3">
                </nav>
            </div>
            <div className="container">
                <Link to="/"><img src={star} width="60" height="40" /></Link>
            </div>
        </div>
    )
}
<Link to="/">
    <img src="../img/star.jpg" />
</Link>