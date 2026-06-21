import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../home/Hero';

describe('Hero Component', () => {

  test('renders hero image', () => {
    render(<Hero />);

    const heroImage = screen.getByAltText('Hero Image');

    expect(heroImage).toBeInTheDocument();
  });

  test('renders signup button', () => {
    render(<Hero />);

    const signupButton = screen.getByRole('button', {
      name: /signup now/i,
    });

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass('btn-primary');
  });

});

