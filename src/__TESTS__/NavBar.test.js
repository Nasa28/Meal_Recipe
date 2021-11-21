import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

afterEach(() => {
  cleanup();
});
describe('NavBar component', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const nav = screen.getByTestId('nav');
  it('Renders the Navbar', () => {
    expect(nav).toBeInTheDocument();
  });

  it('Renders the Home', () => {
    expect(nav).toHaveTextContent('Home');
  });

  it('Renders the Title', () => {
    expect(nav).toHaveTextContent('CHOP-LIFE KITCHEN');
  });

  it('Renders the About', () => {
    expect(nav).toHaveTextContent('About');
  });

  it('Does not render Element not on the page', () => {
    expect(nav).not.toHaveTextContent('Contact');
  });
});
