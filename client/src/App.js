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
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick Your Plan:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="healthyme">Healthy Me</option>
            <option value="gianWeight">Gian Weight</option>
            <option value="loseWeight">Lose Weight</option>
 
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default App;
