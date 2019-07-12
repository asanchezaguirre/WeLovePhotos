import React, { Component } from 'react';

class Album extends Component {
	constructor(props){
		super(props)
		this.state={
			albumes:[],
			user:{},
		
		}
	}

	componentDidMount(){
		const userId = this.props.match.params.userId;
		const albumId = this.props.match.params.albumId
		this.showAlbum(userId, albumId)
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

	

	showAlbum = (userId, albumId) => {
		const API_URL = 'https://jsonplaceholder.typicode.com/albums/'
	    fetch(`${API_URL}${this.props.match.params.userId}/photos?albumId=${this.props.match.params.albumId}`, {
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
  	//console.log(this.props.match.params)
  		return (
	      	<div className="container">
	      		<div className="row">
	      			<div className="col">
	      			 	<h5 className="font-weight-bold">Titulo</h5>
					    <p>by @{this.state.user.username}</p>					  
					</div>
				</div>
		      	<div className="row">		      		
		      		{this.state.albumes.map((album, index) => (
		      		<div className="col-3" key={index}>
					    <div>
							<div className="card p-2 mb-3 card_albumid align-items-center" >
					  			<img src={`${album.url}`} className="card-img-top" alt="Fotografías de album"/>
							</div>
						</div>
					</div>
		 			))}		 		
	 			</div>
			</div>
	    );
	}
}

export default Album;