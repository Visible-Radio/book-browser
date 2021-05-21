import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation buttons and search input', () => {
  render(<App />);
  const searchBtn = screen.getByRole('button', {name: /Search/i});
  expect(searchBtn).toBeInTheDocument();

  const optionsBtn = screen.getByRole('button', {name: /Options/i});
  expect(optionsBtn).toBeInTheDocument();

  const FirstBtn = screen.getByRole('button', {name: /First/i});
  expect(FirstBtn).toBeInTheDocument();

  const previousBtn = screen.getByRole('button', {name: /previous/i});
  expect(previousBtn).toBeInTheDocument();

  const nextBtn = screen.getByRole('button', {name: /next/i});
  expect(nextBtn).toBeInTheDocument();

  const lastBtn = screen.getByRole('button', {name: /last/i});
  expect(lastBtn).toBeInTheDocument();

  const searchInput = screen.getByRole('searchbox', {type: "search"});
  expect(searchInput).toBeInTheDocument();
});