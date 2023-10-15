import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Basic Rendering of the Component", () => {
  it("Should Render The Counter Value", () => {
    render(<Counter />);
    const counterValue = screen.getByTestId("Counter");
    expect(counterValue).toBeDefined();
  });

  it("Should equal to zero", () => {
    render(<Counter />);
    expect(screen.getByTestId("Counter")).toHaveTextContent("0");
  });

  it("It Should be able to increment", () => {
    render(<Counter />);
    expect(screen.getByTestId("Increment")).not.toHaveAttribute("disabled");
  });

  it("Should be unable to decrement", () => {
    render(<Counter />);
    expect(screen.getByTestId("Decrement")).not.toHaveAttribute("disabled");
  });
});

describe("Functionality of Counter", () => {
  it("Should Increement when Increment Button is Clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("Increment"));
    expect(screen.getByTestId("Counter")).toHaveTextContent("1");
  });
  it("Should decrement when decrement Button is Clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("Decrement"));
    expect(screen.getByTestId("Counter")).toHaveTextContent("-1");
  });
});
