import React from 'react';
import './input.css';

const input = ({ id, name, onChange, type, element, placeholder, value, rows, ...props }) => {
  const cElement =
    element === 'input' ? (
      <input
        className={'custom-input'}
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    ) : (
      <textarea className={'custom-input'} id={id} rows={rows || 3} placeholder={placeholder} {...props} />
    );
  return <div>{cElement}</div>;
};

export default input;
