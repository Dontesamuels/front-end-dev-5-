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

describe ("Productcard", () => {
    render(<ProductCard product={{mockProduct}} onAddToCart={{mockAddToCart}}/>);

    // checks to see if the product name appears
    expect (screen.getByText("test headphones ")).toBeInTheDocument();
    // checks for product price 
    expect (screen.getByText("293.33")).toBeInTheDocument();
    // checks if the add to cart buttion exist 
    expect(screen.getByRole("button",{name:/add to cart/i})).toBeInTheDocument();

    test("calls onAddToCart when button is clicked", () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    const button = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

});

