import React from "react";
import ReactDOM from 'react-dom'
const heading = React.createElement(
  "div",
  {
    id: "heading",
    xyz: "abc",
  },
  [React.createElement("div", {}, [React.createElement("h1", {}, "fsfsdf"), React.createElement("h2", {}, "dfsd")]), React.createElement("div", {}, [React.createElement("h1", {}, "fsfsdf"), React.createElement("h2", {}, "dfsd")])]
);

console.log(heading); // an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
