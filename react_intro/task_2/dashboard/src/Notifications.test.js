import { render, screen } from '@testing-library/react';
import App from './App';
import { Notifications } from './Notifications';

describe('App should renders without crash', () => {
  it("Notifications component should render properly", () => {
    render(<Notifications />);

    screen.getByTestId("notifications");

    screen.getByText("New course available");
    screen.getByText("New resume available");
    screen.getByText("Urgent requirement");
  });
});
