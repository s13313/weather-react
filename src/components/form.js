import React, { Component } from 'react';
import '../index.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: '',
    };
  }

  handleceChange = (event) => {
    this.setState({
      cityName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { cityName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Type your city name here"
            value={cityName}
            onChange={this.handleceChange}
          />
        </div>

        <button className="button" type="submit">
          {/* <button className="button" onClick={() => { return cityName}> */}
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
