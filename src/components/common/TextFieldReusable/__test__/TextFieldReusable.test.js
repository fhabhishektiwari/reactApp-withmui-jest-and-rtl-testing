import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextFieldReusable from "../TextFieldReusable";

describe('TextFieldReusable', () => {
  it('renders correctly with provided props', () => {
    const label = 'Test Label';
    const value = 'Test Value';
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <TextFieldReusable
        label={label}
        value={value}
        onChange={onChange}
      />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputElement = getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(value);
  });
  it("triggers the onChange handler correctly", () => {
    const label = "Test Label";
    const value = "Test Value";
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <TextFieldReusable label={label} value={value} onChange={onChange} />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputElement = getByLabelText(label);
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
})