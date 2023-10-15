import React from "react";

export default function Square(props) {
  return (
    <button
      className="square"
      data-testid="Square"
      onClick={props.onSquareClick}
    >
      {props.value}
    </button>
  );
}
