// src/QuoteFetcher.test.jsx
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import QuoteFetcher from "./QuoteFetcher";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("QuoteFetcher", () => {
  it("shows the quote text when the API call succeeds", async () => {
    const mockResponse = { text: "Stay focused, stay kind." };

    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    render(<QuoteFetcher />);

    // Check loading state exists
    const loading = screen.getByText(/loading quote/i);
    expect(loading).toBeTruthy();

    // Wait for the async fetch and check rendered quote
    await waitFor(() => {
      const quote = screen.getByTestId("quote-text");
      expect(quote.textContent).toContain("Stay focused, stay kind.");
    });
  });

  it("shows an error message when the API fails", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
    });

    render(<QuoteFetcher />);

    await waitFor(() => {
      const alert = screen.getByRole("alert");
      expect(alert.textContent).toContain("Failed to load quote");
    });
  });
});
