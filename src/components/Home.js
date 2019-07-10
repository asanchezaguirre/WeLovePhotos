import React, { Component } from 'react';
//Importando Link de react router
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			users:[],
			
		}
	}

	componentDidMount(){
	 const API_URL = 'http://jsonplaceholder.typicode.com/users'
    fetch(API_URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        this.setState({
          users: data.slice(0,7)
        })

      })
      .catch(e => alert(e))
  }


	//Método Search Input
	  searchByName = (e) => {
	  	e.preventDefault();
	    var query = e.target.value.toLowerCase();
	    //console.log(query)/

	    var coincidences = this.state.users.filter(function(shot) {
	      var nameInLowerCase = shot.name.toLowerCase() || shot.username.toLowerCase();
	      	console.log(shot)
	      return nameInLowerCase.includes(query);
	    });

	    this.setState({
	      users: coincidences
	    });
	    
	  }
	  //Termina método

  render() {
      return (
      	<div>
	      	<form className="form-inline">
			    <input className="form-control mr-sm-2" onChange={this.searchByName} type="search" placeholder="Search" aria-label="Search" />
			    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
			{this.state.users.map(user => (
			<div className="card card_home">
			  <img src={`https://api.adorable.io/avatars/${user.name}`} className="card-img-top" alt="..."/>
			  <div className="card-body">
			    <h5 className="card-title">@{user.username}</h5>
			    <p className="card-text">{user.name}</p>
			    <Link to={`/users/${user.id}`} className="btn btn-primary">See more albums</Link>
			  </div>
			</div>
 			))}
		</div>
        );
  }
}

export default Home;