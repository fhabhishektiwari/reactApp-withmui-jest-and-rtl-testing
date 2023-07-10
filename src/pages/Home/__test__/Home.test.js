import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "../Home";
describe("Home", () => {
  it("renders correctly with the initial state", () => {
    const { getByLabelText, getByText } = render(<Home />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nameLabel = getByText("Name");
    expect(nameLabel).toBeInTheDocument();

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nameInput = getByLabelText("Name");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput.value).toBe("");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = getByText("Click me ");
    expect(button).toBeInTheDocument();
  });

  it("updates the name input value correctly", () => {
    const { getByLabelText } = render(<Home />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nameInput = getByLabelText("Name");

    fireEvent.change(nameInput, { target: { value: "John" } });
    expect(nameInput.value).toBe("John");
  });

  it("logs the name correctly on button click", () => {
    const { getByLabelText, getByText } = render(<Home />);

    const nameInput = getByLabelText("Name");
    const button = getByText("Click me ");

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.click(button);

    // Replace the console.log with your desired assertion or mock
    expect(console.log).toHaveBeenCalledWith("John");
  });
});
