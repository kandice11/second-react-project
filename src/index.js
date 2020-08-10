import React from "react";
import ReactDom from "react-dom";

const fName = "Kandice";
const lName = "Everett";
const number = "7";

ReactDom.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p> Your lucky number is {number}.</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
