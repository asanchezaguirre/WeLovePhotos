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
		const API_URL = 'https://jsonplaceholder.typicode.com/users/'
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
		const API_URL = 'https://jsonplaceholder.typicode.com/albums?userId='
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
      		
      				<div className="row align-items-center mb-2">
      			

			      		<div className="user_avatar">
				      		<img src={`https://api.adorable.io/avatars/${this.state.user.name}`} alt="User avatar"/>
				      	</div> 
				      	<div className="col">
			      			<h5 className="font-weight-bold">@{this.state.user.username}</h5>
			      			<p>{this.state.user.name}</p>
			      		</div>
		
			</div>


	      	<div className="row">    
	      		
	      			<h4 className="font-weight-bold">Albums</h4>
	      				
	      	</div>
	      	<div className="row">
		      	
			      	{this.state.albumes.map((album, index) => (
			      		
			      			<div className="col-3" key={index}>
				      			<div>
				      				<Link to={`/${album.userId}/${album.id}`}>
										<div className="card card_album p-2 mb-3">
											<img src={`https://picsum.photos/id/${album.id}/400`} className="card-img-top" alt="Album de usuario"/>
										
											<p className="text-decoration-none text-justify">{album.title}</p>
										
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