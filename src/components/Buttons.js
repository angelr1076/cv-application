import React from 'react';

const Button = ({ text, handleClick, type }) => {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
