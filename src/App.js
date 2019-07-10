import React from 'react';
import './App.css';
//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//Importando Route y Switch para React-Router
import { Route, Switch } from 'react-router-dom';
//Importando componentes
import NavBar from './components/NavBar';
import Home from './components/Home';
import User from './components/User';
import Album from './components/Album';

function App() {
  return (
  	<React.Fragment>
	  	<NavBar />
	    <Switch>
	      	 <Route exact path='/' component={Home} />
	      	 <Route path='/users/:userId'  component={User} />  
	      	 <Route path='/:userId/:albumId'  component={Album} />  
	    </Switch>
	</React.Fragment>
  );
}

export default App;
