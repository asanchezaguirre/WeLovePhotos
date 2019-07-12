import React, { Component } from 'react';
//Importando Link de react router
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
      return (
	    <nav className="navbar nav justify-content-center navbar-dark bg-dark mb-3">
		  <Link to='/' className="navbar-brand">
		    <div className='nav-tex'>We love photos</div>
		  </Link>
		</nav>
    );
  }
}

export default NavBar;