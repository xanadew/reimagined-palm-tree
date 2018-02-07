import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentz/header.js';
import Footer from './componentz/Footer.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      THINGZ:['eating too much sushi','sleeping','playing vidya gamez'],
      inputText:''
    };

  }
  handleInputChange(e){
    console.log(e.target.value);
    this.setState({inputText:e.target.value})
  }
  clickMeBaby(){
    this.setState({
      THINGZ:[...this.state.THINGZ,this.state.inputText]
    })
  }
  render() {
    let list=this.state.THINGZ.map((THING,index)=>{
      return(
        <p key={index}>{THING}</p>
      )
    });
        return (
      <div className="App">

        <Header/>
        
        <h5>I PITY THE FOOL</h5>

        <input 
          value={this.state.inputText} 
          onChange={(e)=>this.handleInputChange(e)}/>
        <button onClick={()=>this.clickMeBaby()}>DONT LET YOUR MEMES BE DREAMS</button>
        {list}
        <Footer/>
      </div>
    );
  }
}

export default App;
