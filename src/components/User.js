import React, { Component } from 'react';
//Importando Link de react router
import { Link } from 'react-router-dom';

class User extends Component {
	constructor(props){
		super(props)
		this.state={
			albumes:[],
			user:{},
		}
		
	}

	componentDidMount(){
		const userId = this.props.match.params.userId;
		this.showAlbumes(userId);
		this.showCurrentUser(userId);

	}
	
	showCurrentUser = userId => {
		const API_URL = 'http://jsonplaceholder.typicode.com/users/'
	    fetch(`${API_URL}${this.props.match.params.userId}`, {
	      method: 'GET',
	    })
	      .then(response => response.json())
	      .then(data => {
	        //console.log(data)
	        this.setState({
	          user: data
	        })

	      })
	      .catch(e => alert(e))
	}	

	showAlbumes = userId => {
		const API_URL = 'http://jsonplaceholder.typicode.com/albums?userId='
	    fetch(`${API_URL}${this.props.match.params.userId}`, {
	      method: 'GET',
	    })
	      .then(response => response.json())
	      .then(data => {
	        //console.log(data)
	        this.setState({
	          albumes: data
	        })

	      })
	      .catch(e => alert(e))
  }


  render() {
  	    return (
      	<div>

      		<div>
	      		<img src={`https://api.adorable.io/avatars/${this.state.user.name}`}/>
	      	<div>
	      			<h6>@{this.state.user.username}</h6>
	      			<p>{this.state.user.name}</p>
	      		</div>
	      	</div>
	      	
	      	<h4>Albums</h4>
	      	{this.state.albumes.map(album => (
			
				<div className="card card_album">
				  <img src={`https://picsum.photos/id/${album.id}/200/300?grayscale`} className="card-img-top" alt="..."/>
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