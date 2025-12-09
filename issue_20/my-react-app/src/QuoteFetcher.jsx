// src/QuoteFetcher.jsx
import { useEffect, useState } from 'react'

function QuoteFetcher() {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadQuote() {
      try {
        setLoading(true)
        setError(null)

        // In real life this would call some API.
        // In tests, we will mock this fetch.
        const response = await fetch('/api/quote')
        if (!response.ok) {
          throw new Error('Network error')
        }
        const data = await response.json()
        setQuote(data.text)
      } catch (err) {
        setError('Failed to load quote')
      } finally {
        setLoading(false)
      }
    }

    loadQuote()
  }, [])

  if (loading) {
    return <p>Loading quote...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return <p data-testid="quote-text">{quote}</p>
}

export default QuoteFetcher