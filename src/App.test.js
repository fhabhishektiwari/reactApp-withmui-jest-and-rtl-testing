import { render, screen } from '@testing-library/react';
import App from './App';

describe("app components render properly",()=>{
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/FormTest/i);
    expect(linkElement).toBeInTheDocument();
  });
})

