import "./App.css"
import React from 'react';
import logo from "../src/assests/image/bridgelabz.png"

class App extends React.Component {
  url = "https://www.bridgelabz.com/"
  constructor() {
    super()
    this.state = {
      userName: "",
      nameError: ""
    }
  }
  onClick = ($event) => {
    console.log("button is clicked!", $event);
    window.open(this.url);
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: "" })
    }
    else {
      this.setState({ nameError: "Invalid Name" })
    }
  }
  render() {
    return (
<>
      <div>
        <h1>Hello {this.state.userName}</h1>
        <img src={logo} onClick={this.onClick} alt="loaded" />
        <br/>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
        <p>At Bridgelabz,we're a techie community of</p>
        <ul>
          <li>technologists</li>
          <li>thinkers</li>
          <li>builders</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestiae cum non eos sit, fuga vitae ipsa itaque
          reprehenderit omnis nam, suscipit voluptas! Dolorum, autem laboriosam exercitationem non necessitatibus alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium placeat nostrum optio.
          Exercitationem tempora consectetur libero natus impedit omnis, hic nihil accusantium, amet asperiores quod
          voluptates cumque, reprehenderit animi?
        </p>
        <p>
          To know about us,visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about our mission
          i.e <strong> Employability to all</strong>
        </p>
      </div>
      </>
    );
  }
}

export default App;
