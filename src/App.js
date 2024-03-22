import React from "react";
import Button from "./Button";

const App = () => {
  const handleOnClick = () => {
    console.log("Button Clicked from Parent");
  };
  return (
    <>
      <Button click={handleOnClick} />
    </>
  );
};

export default App;
