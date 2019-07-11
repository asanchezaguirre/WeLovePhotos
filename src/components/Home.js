import React, { Component } from 'react';
//Importando Link de react router
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			query:'',
			data:[],
			filteredData:[],
		}
	}

	handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase()) || element.username.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          data,
          filteredData
        });
      });
     
  };

  componentWillMount() {
    this.getData();
  }

	

  render() {
      return (
      	<div className="container">
	      	<div className="row">
	      		<div className="col-8 mx-auto mt-5 mb-4">
	      			<label className="pr-3">Search</label>
	      			<input onChange={this.handleInputChange} type="search" placeholder="Search" aria-label="Search" className="search" />
	    		</div>
	      	</div>
	      	{this.state.filteredData.map(user => (
	      	<div className="row row_user">
	      		<div className="card  border-dark col-8 mt-2 mx-auto">
	      			<div class="row no-gutters">
						<div className="card_home col-md-1">
						  <img src={`https://api.adorable.io/avatars/${user.name}`} className="card-img mt-2" alt="..."/>
						</div>  
						<div className="card-body col-md-9 pl-2">
						   <h5 className="card-title">@{user.username}</h5>
						   <p className="card-text username_text">{user.name}</p>
						</div>
						<div className="card-body col-md-2">
						   <Link to={`/users/${user.id}`} className="btn btn-outline-dark">See Albums</Link>
						</div>
					</div>
		    	</div>
	      	</div>
 			))}
		</div>
        );
  }
}

export default Home;