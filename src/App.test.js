import { render, screen } from '@testing-library/react';
import AppShoppingList from './AppShoppingList';

test('renders learn react link', () => {
  render(<AppShoppingList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
