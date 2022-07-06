import { render, screen } from '@testing-library/react';
import App from './App';
import Country from './components/Country';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Country', () => {
  test('renders country name', () => {
    render(<Country country={{ name: 'test' }} />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
  }
  );
}
);


