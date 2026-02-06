import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders footer content correctly', () => {
    render(
      <Footer
        storeName="Dono-Mart 👾"
        email="support@donomart.com"
        year={2026}
      />
    );

    // Store name (heading)
    expect( screen.getByRole('heading', { name: /dono-mart/i })).toBeInTheDocument();

    // Navigation links
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();

    // Email
    expect(
      screen.getByRole('link', { name: /support@donomart.com/i })
    ).toBeInTheDocument();
  });
});
