// src/MessageButton.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MessageButton from './MessageButton'

describe('MessageButton', () => {
  it('renders the initial message', () => {
    render(<MessageButton />)

    // Heading is present
const heading = screen.getByText(/Focus Bear PR Learning Component/i);    expect(heading).toBeTruthy()

    // There may be multiple MessageButton instances in the DOM,
    // so we take the last one.
    const messages = screen.getAllByTestId('message')
    const message = messages[messages.length - 1]

    expect(message.textContent).toContain(
      'You have clicked the button 0 times.'
    )
  })

  it('updates the message when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<MessageButton />)

    // Grab all buttons with label "Click me" and use the last one
    const buttons = screen.getAllByRole('button', { name: /click me/i })
    const button = buttons[buttons.length - 1]

    // Same for message element
    const messages = screen.getAllByTestId('message')
    const message = messages[messages.length - 1]

    // Click once and wait for UI update
    await user.click(button)
    await waitFor(() => {
      expect(message.textContent).toContain(
        'You have clicked the button 1 time.'
      )
    })

    // Click again and wait for UI update
    await user.click(button)
    await waitFor(() => {
      expect(message.textContent).toContain(
        'You have clicked the button 2 times.'
      )
    })
  })
})