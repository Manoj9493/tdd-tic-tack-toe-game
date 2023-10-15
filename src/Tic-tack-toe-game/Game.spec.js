import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Game from "./Game";

describe("Basic Rendering of the Component", () => {
  it("Should Render The Game Value", () => {
    render(<Game />);
    const counterValue = screen.getByTestId("Game");
    expect(counterValue).toBeDefined();
  });
  it("Inital move should be Go to game Start", () => {
    render(<Game />);
    expect(screen.getByTestId("moves")).toHaveTextContent("Go to game start");
  });
  it("Should Render an Empty Board", () => {
    render(<Game />);
    const squares = screen.getAllByTestId("Square");
    squares.forEach((square) => {
      expect(square).toHaveTextContent("");
    });
  });
});

describe("Game Functionality", () => {
  const makeMove = (squareIndex) => {
    const square = screen.getAllByTestId("Square")[squareIndex];
    fireEvent.click(square);
  };

  it("Should Allow Making Moves and Update Status", () => {
    render(<Game />);
    const status = screen.getByText("Next player is: X");

    makeMove(0);
    expect(status).toHaveTextContent("Next player is: O");

    makeMove(1);
    expect(status).toHaveTextContent("Next player is: X");
  });

  it("Should Declare a Draw and Update Status", () => {
    render(<Game />);
    const status = screen.getByText("Next player is: X");

    makeMove(0);
    makeMove(1);
    makeMove(2);
    makeMove(4);
    makeMove(7);
    makeMove(3);
    makeMove(6);
    makeMove(8);
    makeMove(5);
    expect(status).toHaveTextContent("Match is Drawn");
  });

  it("Should Declare Winner is X and Update Status", () => {
    render(<Game />);
    const status = screen.getByText("Next player is: X");
    makeMove(0);
    makeMove(1);
    makeMove(2);
    makeMove(3);
    makeMove(4);
    makeMove(6);
    makeMove(5);
    makeMove(7);
    makeMove(8);
    expect(status).toHaveTextContent("Winner is : X");
  });

  it("Should Allow Jumping of Moves", () => {
    render(<Game />);
    const status = screen.getByText("Next player is: X");

    makeMove(0);
    makeMove(1);
    makeMove(2);

    const goToMoveButton = screen.getByText("Go to move 1");
    fireEvent.click(goToMoveButton);
    expect(status).toHaveTextContent("Next player is: O");
  });
});
