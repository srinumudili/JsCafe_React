import React from "react";

const Button = (props) => {
  const { click } = props;
  return (
    <>
      <button onClick={click}>Click Here</button>
    </>
  );
};

export default Button;
