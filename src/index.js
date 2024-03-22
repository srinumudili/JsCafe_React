import React from "react";
import ReactDOM from "react-dom";

const p = React.createElement("p", {}, "Hello World");
const div = React.createElement("div", {}, p);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
