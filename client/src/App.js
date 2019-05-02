import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your Plan is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className = "form-inline" onSubmit={this.handleSubmit}>
        <label className ="my-1 mr-2">
          Pick Your Plan:
          <select className = "custom-select my-1 mr-sm-2" value={this.state.value} onChange={this.handleChange}>
            <option value="healthyme">Healthy Me</option>
            <option value="gianWeight">Gian Weight</option>
            <option value="loseWeight">Lose Weight</option>
 
          </select>
        </label>
        <input className ="btn btn-primary my-1"  type="submit" value="Submit" />
      </form>
    
    );
  }
}


export default App;
