import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Square from "./Square";

describe("Basic Rendering of the Component", () => {
  it("Should Render The Game Value", () => {
    render(<Square />);
    const counterValue = screen.getByTestId("Square");
    expect(counterValue).toBeDefined();
  });
  it("should render with the provided value", () => {
    const squareValue = "X";
    render(<Square value={squareValue} />);
    const squareButton = screen.getByTestId("Square");
    expect(squareButton).toBeDefined();
    expect(squareButton).toHaveTextContent(squareValue);
  });
});

describe("The Functionality of Square Component", () => {
  it("should call the provided click handler when clicked", () => {
    const onSquareClick = jest.fn();
    render(<Square value="X" onSquareClick={onSquareClick} />);
    const squareButton = screen.getByTestId("Square");
    fireEvent.click(squareButton);
    expect(onSquareClick).toHaveBeenCalled();
  });

  it("should display an empty square when no value is provided", () => {
    render(<Square />);
    const squareButton = screen.getByTestId("Square");
    expect(squareButton).toHaveTextContent("");
  });
});
