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
      	<div className="container">
      		<div className="row">
      			<div className="col-10 mx-auto mt-2 mb-2">
      				<div class="row no-gutters">
			      		<div className="user_avatar col-md-2">
				      		<img src={`https://api.adorable.io/avatars/${this.state.user.name}`}/>
				      	</div> 
				      	<div className="col-md-10 pt-4">
			      			<h6>@{this.state.user.username}</h6>
			      			<p>{this.state.user.name}</p>
			      		</div>
			      	</div>
	      		</div>
	      	</div>
	      	<div className="row">
      			<div className="col-10 mx-auto mt-1 mb-1">
	      			<h4>Albums</h4>
	      		</div>
	      	</div>
	      	<div className="row ml-4">
		      	
			      	{this.state.albumes.map(album => (
			      		
			      			<div className="col-sm-4">
				      			<div>
				      				<Link to={`/${album.userId}/${album.id}`}>
										<div className=" card mr-5 ml-5 mt-2 card_album">
											<img src={`https://picsum.photos/id/${album.id}/200/300`} className="card-img-top" alt="..."/>
											<p >{album.title}</p>
										</div>
									</Link>	
								</div>
							</div>
						
		 			))}
		 		
 			</div>
		</div>
        );
  }
}

export default User;