import React from "react";
import ReactDOM from "react-dom/client";

const isMorning = true;
const morningUser = "Good Morning!!";
const afternoonUser = "Good Afternoon";

const FirstComponent = () => {
  return (
    <>
      <p>{isMorning ? morningUser : afternoonUser}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirstComponent />);
