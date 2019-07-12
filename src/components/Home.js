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
    fetch(`https://jsonplaceholder.typicode.com/users`)
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
      	<div className="container-fluid">
	      	<div className="form-group row">
	      		<label className="col-1 col-form-label offset-2">Search</label>
    			<div className="col-7">
      				<input 
	      				   onChange={this.handleInputChange} 
	      				   type="search" 
	      				   aria-label="Search" 
	      				   className="form-control" 
	      			/>
    			</div>
	      	</div>
	      	{this.state.filteredData.map((user, index) => (
	      	<div className="row" key={index}>
	      		<div className="card  border-dark col-8 offset-2">
	      			<div className="row align-items-center">
						<div className="card_home col-1">
						  <img src={`https://api.adorable.io/avatars/${user.name}`} className="card-img" alt="User avatar"/>
						</div>  
						<div className="col-8">
						   <h5 className="card-title">@{user.username}</h5>
						   <p className="card-text">{user.name}</p>
						</div>
						<div className="card-body col-3">
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