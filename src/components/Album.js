import React, { Component } from 'react';



class Album extends Component {
	constructor(props){
		super(props)
		this.state={
			albumes:[],
		}
	}

	componentDidMount(){
		const userId = this.props.match.params.userId;
		const albumId = this.props.match.params.albumId
		this.showAlbum(userId, albumId)
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
      	<div>
      		{this.state.albumes.map(album => (
			<div className="card card_home">
			  <img src={`${album.url}`} className="card-img-top" alt="..."/>
			</div>
 			))}
		</div>
        );
  }
}

export default Album;