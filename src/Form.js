import React from 'react';
import './index.css';

function Form(props) {
  const onChangeCity = (event) => {
    // Step 2: Update the value with whatever the user types in the box
    props.setCity(event.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Type your city name here"
        value={props.city}
        onChange={onChangeCity}
      />
    </div>
  );
}

export default Form;
