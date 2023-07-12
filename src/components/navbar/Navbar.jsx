import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {
	return (
		<nav className="nav-bar">      
			<ul className="nav-bar__nav-list">
				<div class="search-bar__logo-container">
          				<img className="logo" src="./img/logos/Logo.png" alt=""/>
        			</div>
				<ol>
					<li className="nav-bar__nav-item">
						<Link to="home" className="nav-bar__nav-link"> Inicio </Link>
					</li>
					<li className="nav-bar__nav-item">
						<Link to="/alta" className="nav-bar__nav-link"> Alta </Link>
					</li>
					<li className="nav-bar__nav-item">
						<Link to="/contacto" className="nav-bar__nav-link"> Contacto </Link>
					</li>
					<li className="nav-bar__nav-item">
						<Link to="/nosotros" className="nav-bar__nav-link"> Nosotros </Link>
					</li>
				</ol>
			</ul>
            	</nav>
	)
}

export default Navbar