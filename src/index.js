// import classes from modules
import React from "react";
import ReactDom from "react-dom";

// React component
function TodoItem() {
  // wrap expression in parentheses to avoid the pitfalls of automatic semicolon insertion
  return (
    // jsx syntax
    // React element
    <span>Drink Coffee</span>
  );
}

function TodoList() {
  return (
    <ul>
      <li><TodoItem /></li>
      <li><TodoItem /></li>
      <li><TodoItem /></li>
    </ul>
  );
}

// React element, parent node
ReactDom.render(<TodoList />, document.getElementById('root'));