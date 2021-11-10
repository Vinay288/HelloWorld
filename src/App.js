import './App.css';
import React from 'react';
import logo from "../src/assests/image/bridgelabz.png"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      title:"hello world"
    }
  }

  render(){
    return(
      <div>
      <h1>{this.state.title}</h1>
        <img src={logo} alt="loaded"/>
        </div>
    );
}
}

export default App;
