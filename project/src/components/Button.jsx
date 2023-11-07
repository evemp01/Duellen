import React from "react";
import '../styles/Button.css'

function Button(props) {
  return (
    <button name={props.name} onClick={props.onClick}>{props.label}</button>
  );
}

export default Button;
