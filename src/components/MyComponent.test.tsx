import { render, screen } from "@testing-library/react";
import React from "react";

import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("should render without throwing an error", function () {
    render(<MyComponent />);
    const text = screen.getByText("Hello");
    expect(text).toHaveTextContent("Hello");
  });
});
