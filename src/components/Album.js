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

	

	showAlbum = (userId, albumId) => {
		const API_URL = 'http://jsonplaceholder.typicode.com/albums/'
	    fetch(`${API_URL}${this.props.match.params.userId}/photos?albumId=${this.props.match.params.albumId}`, {
	      method: 'GET',
	    })
	      .then(response => response.json())
	      .then(data => {
	        console.log(data)
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
      			<div className="col-10 mx-auto mt-2 mb-2">
      			    <div className="container_album">
				      	<h5 className="font-weight-bold">Titulo</h5>
				      	<p>by @{this.state.user.username}</p>
				    </div>
				</div>
			</div>
	      	<div className="row ml-4">
	      		{this.state.albumes.map(album => (
				<div className="card mr-5 ml-5 mt-3 card_albumid">
				  <img src={`${album.url}`} className="card-img-top" alt="..."/>
				</div>
	 			))}
 			</div>
		</div>
        );
  }
}

export default Album;