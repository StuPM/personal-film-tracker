import React from "react";

const ControlledInput = ({ name, checked }) => {
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={`rating-${name}`}
        disabled
        checked={checked}
      />
    </>
  );
};

export default ControlledInput;
