import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../CartItem";

const mockItem = {
  id: 1,
  name: "🍎 MacBook Air",
  price: 899.5,
};

describe("CartItem", () => {
  test("renders item name and formatted price", () => {
    render(<CartItem item={mockItem} onRemove={() => {}} />);

    // name appears
    expect(screen.getByText(/macbook air/i)).toBeInTheDocument();

    // price formatted to 2 decimals
    expect(screen.getByText("$899.50")).toBeInTheDocument();

    // remove button exists
    expect(
      screen.getByRole("button", { name: /remove/i })
    ).toBeInTheDocument();
  });

  test("clicking Remove calls onRemove with item id", () => {
    const mockRemove = vi.fn();

    render(<CartItem item={mockItem} onRemove={mockRemove} />);

    fireEvent.click(screen.getByRole("button", { name: /remove/i }));

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});
