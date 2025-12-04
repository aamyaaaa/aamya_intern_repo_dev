// src/MessageButton.test.jsx
import React from "react";
import { describe, test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessageButton from "./MessageButton";

// 👇 clear the DOM after each test
afterEach(() => {
  cleanup();
});

describe("MessageButton", () => {
  test("renders the initial message", () => {
    render(<MessageButton />);

    // Check heading
    expect(
      screen.getByText(/Focus Bear Test Component/i)
    ).toBeInTheDocument();

    // Check initial message text
    expect(
      screen.getByTestId("message")
    ).toHaveTextContent("You have clicked the button 0 times.");
  });

  test("updates the message when the button is clicked", async () => {
    const user = userEvent.setup();
    render(<MessageButton />);

    const button = screen.getByRole("button", { name: /click me/i });
    const message = screen.getByTestId("message");

    // Click once
    await user.click(button);
    expect(message).toHaveTextContent("You have clicked the button 1 time.");

    // Click again
    await user.click(button);
    expect(message).toHaveTextContent("You have clicked the button 2 times.");
  });
});
