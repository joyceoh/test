import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const widgetLink = screen.getByText(/widget test/i);
  expect(widgetLink).toBeInTheDocument();
});
