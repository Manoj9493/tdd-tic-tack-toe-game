import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Board from "./Board";

describe("Rendering the Board", () => {
  it("Should Render the Board Component", () => {
    render(
      <Board xIsNext={true} squares={Array(9).fill(null)} onPlay={() => {}} />
    );
    const boardComponent = screen.getByTestId("board");
    expect(boardComponent).toBeDefined();
  });
  it("Inital status should be [next Player is X]", () => {
    const onPlayMock = jest.fn();
    render(
      <Board xIsNext={true} squares={Array(9).fill(null)} onPlay={onPlayMock} />
    );
    expect(screen.getByTestId("Status")).toHaveTextContent("Next player is: X");
  });
});
