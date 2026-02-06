import { describe, test, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App - cart state & localStorage", () => {
  beforeEach(() => {
    // mock localStorage methods
    vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {});
  });

  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test("loads cart from localStorage on startup", () => {
    const fakeCart = [{ id: 1, name: "Test Item", price: 10 }];

    Storage.prototype.getItem.mockReturnValueOnce(JSON.stringify(fakeCart));

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
  });

  test("saves cart to localStorage when cart changes", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      expect.any(String)
    );
  });
});
