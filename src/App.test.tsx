import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("テキスト表示", () => {
    render(<App />);

    const element = screen.getByText("React + Webpack5 + Jest");

    expect(element).toBeDefined();
  });
});
