import './App.css';
import React from 'react';
import logo from "../src/assests/image/bridgelabz.png"

class App extends React.Component{
  url="https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state={
      userName:"",
      nameError:""
    }
  }
  onClick=($event) =>{
    console.log("button is clicked!",$event);
    window.open(this.url);
  }

  onNameChange=(event)=>{
    console.log("value is ",event.target.value);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({userName:event.target.value});
    if(nameRegex.test(event.target.value)){
      this.setState({nameError:""})
    }
    else{
      this.setState({nameError:"Invalid Name"})
    }
  }
  render(){
    return(
      <div>
      <div>
      <h1>Hello {this.state.userName}</h1>
        <img src={logo} onClick={this.onClick} alt="loaded"/>
        </div>
        <input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
        </div>
    );
}
}

export default App;
