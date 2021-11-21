import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../components/Loading';

describe('Loading Component', () => {
  it('Renders Loading', () => {
    render(<Loading />);
    expect(screen.getByText('loading...')).toBeInTheDocument();
  });
});
