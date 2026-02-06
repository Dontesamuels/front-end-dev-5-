import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "../Homepage";

describe("Homepage", () => {
  test("renders the homepage correctly", () => {
    render(<Homepage />);

    // check hero title
    expect(screen.getByText(/welcome to dono-mart/i) ).toBeInTheDocument();

    // check subtitle
    expect(screen.getByText(/your one stop for major tech and snacks/i) ).toBeInTheDocument();

    // check section heading
    expect( screen.getByRole("heading", { name: /why shop with us/i }) ).toBeInTheDocument();
  });
});
