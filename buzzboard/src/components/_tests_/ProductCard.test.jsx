import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../ProductCard";

const mockProduct = {
  id: 1,
  name: "Test headphones",
  price: 293.33,
  image: "test.jpg",
  description: "These are some of the best headphones for users!",
};

const mockAddToCart = vi.fn();

describe("ProductCard", () => {
  test("renders product info correctly", () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    expect(screen.getByText("Test headphones")).toBeInTheDocument();
    expect(screen.getByText("293.33")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  test("calls onAddToCart when button is clicked", () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
