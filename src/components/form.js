import React, { Component } from 'react';
import '../index.css';

function Form(props) {
  return (
    <form
      onSubmit={(event) => {
        alert(`${props.city} `);
        return props.city;
        event.preventDefault();
      }}
    >
      <div>
        <input
          className="input"
          type="text"
          placeholder="Type your city name here"
          value={props.city}
          onChange={(event) => {
            props.setCity(event.target.value);
          }}
        />
      </div>

      <button
        className="button"
        type="submit"
        onClick={() => {
          return props.city;
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
