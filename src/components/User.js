import React, { Component } from 'react';
//Importando Link de react router
import { Link } from 'react-router-dom';

class User extends Component {
	constructor(props){
		super(props)
		this.state={
			user:[],
		}
		
	}

	componentDidMount(){
		const userId = this.props.match.params.userId;
		this.showUser(userId)
	}
		

	showUser = userId => {
		const API_URL = 'http://jsonplaceholder.typicode.com/albums?userId='
	    fetch(`${API_URL}${this.props.match.params.userId}`, {
	      method: 'GET',
	    })
	      .then(response => response.json())
	      .then(data => {
	        console.log(data)
	        this.setState({
	          user: data
	        })

	      })
	      .catch(e => alert(e))
  }


  render() {
  	//console.log(this.props.match.params)
  	    return (
      	<div>
	      	<div>
	      		<img src="{user.}" />
	      		<div>
	      			<h6>@{this.props.match.params.userId}</h6>
	      			<p>{this.props.match.params.user}</p>
	      		</div>
	      	</div>
	      	<h4>Albums</h4>
	      	{this.state.user.map(album => (
			
				<div className="card">
				  <img src="{album.}" className="card-img-top" alt="..."/>
				  <div className="card-body">
				    <p className="card-text">{album.title}</p>
				    <Link to={`/${album.userId}/${album.id}`} className="btn btn-primary">See more albums</Link>
				  </div>
				</div>
		
 			))}
		</div>
        );
  }
}

export default User;