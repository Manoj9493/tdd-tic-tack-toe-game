import { render, screen, act } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });
});
