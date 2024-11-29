import React from "react";

const Keypad = () => {
  const handleInputChange = (event) => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleInputChange} />
    </div>
  );
};

export default Keypad;
