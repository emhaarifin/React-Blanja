import React from 'react';
import './CustomRadio.css';

function CustomRadio({ id, nameLabel, styling, name, ...props }) {
  return (
    <div>
      <label htmlFor={id} className={`custom-radio ${styling}`}>
        {nameLabel}
        <input type="radio" name={name} id={id} {...props}></input>
        <span className="checkmark-radio"></span>
      </label>
    </div>
  );
}

export default CustomRadio;
