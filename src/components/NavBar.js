import React, { Component } from 'react';
//Importando Link de react router
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
      return (
	    <nav className="navbar navbar-dark bg-dark">
		  <Link to='/' className="navbar-brand">
		    <div>We love photos</div>
		  </Link>
		</nav>
    );
  }
}

export default NavBar;