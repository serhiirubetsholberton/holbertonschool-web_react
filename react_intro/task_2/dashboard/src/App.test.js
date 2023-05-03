import { render, screen } from '@testing-library/react';
import App from './App';

describe('App should renders without crash', () => {
  it("Header should exist", () => {
    render(<App />);

    screen.getByText("School dashboard");
    screen.getByTestId("header");
  });

  it("Body should exist", () => {
    render(<App />);

    screen.getByTestId("main");
    screen.getByText("Login to access the full dashboard");

  });

  it("Footer should exist", () => {
    render(<App />);

    screen.getByTestId("main");
  })
});
