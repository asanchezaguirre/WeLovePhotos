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
	showFiltered = (e) => {
		var query = e.target.value.toLowerCase();
		var updatedList = this.state.users;

	    var coincidences = updatedList.filter(function(item){
	      var searchInLowerCase = item.name.toLowerCase();

	      return searchInLowerCase.includes(query);
	    });
	    this.setState({
	    	users: coincidences
	    });
	  }
	    
	  
	  //Termina método

	

  render() {
      return (
      	<div>
	      	
			    <input onChange={this.showFiltered} type="search" placeholder="Search" aria-label="Search" />
		
			{this.state.users.map(user => (
			<div className="card card_home">
			  <img src={`https://api.adorable.io/avatars/${user.name}`} className="card-img-top" alt="..."/>
			  <div className="card-body">
			    <h5 className="card-title">@{user.username}</h5>
			    <p className="card-text">{user.name}</p>
			    <Link to={`/users/${user.id}`} className="btn btn-primary">See Albums</Link>
			  </div>
			</div>
 			))}
		</div>
        );
  }
}

export default Home;