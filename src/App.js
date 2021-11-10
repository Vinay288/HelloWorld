import './App.css';
import React from 'react';
import logo from "../src/assests/image/bridgelabz.png"

class App extends React.Component{
  url="https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state={
      userName:"Vinay"
    }
  }
  onClick=($event) =>{
    console.log("button is clicked!",$event);
    window.open(this.url);
  }

  render(){
    return(
      <div>
      <h1>Hello {this.state.userName}</h1>
        <img src={logo} onClick={this.onClick} alt="loaded"/>
        </div>
    );
}
}

export default App;
