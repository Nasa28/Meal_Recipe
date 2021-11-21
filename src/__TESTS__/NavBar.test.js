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

  const navElement = screen.getByTestId('nav');
  it('Renders the Title', () => {
    expect(navElement).toBeInTheDocument();
  });

  it('Renders the Title', () => {
    expect(navElement).toHaveTextContent('Home');
  });

  it('Renders the Title', () => {
    expect(navElement).toHaveTextContent('CHOP-LIFE KITCHEN');
  });

  it('Renders the Title', () => {
    expect(navElement).toHaveTextContent('About');
  });

  it('Renders the Title', () => {
    expect(navElement).not.toHaveTextContent('Contact');
  });
});
