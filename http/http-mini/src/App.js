import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      users:[]
    }
    this.getUsers=this.getUsers.bind(this);
  }
getUsers(){
  let promise=axios.get('https://swapi.co/api/people/');
  promise.then(response=>{
    this.setState({
      users:response.data.results
    })
  })
}
  render() {
    let users=this.state.users.map((element,index)=>{
      return(
        <div key={index+element.name}>
          <p>{element.name}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>USERS</h1>
        <button onClick={this.getUsers}>GET USERZ</button>
        {users}
      </div>
    );
  }
}

export default App;
