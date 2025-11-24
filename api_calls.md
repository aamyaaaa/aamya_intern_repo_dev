# Making API Calls with Axios

### Why is it useful to create a reusable Axios instance?
A reusable Axios instance keeps all the common setup (base URL, headers, timeouts, interceptors) in one place. This means I don’t have to rewrite the same code for every API call. It makes the code cleaner, easier to maintain, and reduces mistakes, especially if I ever need to update something like the base URL.

### How does intercepting requests help with authentication?
Request interceptors run automatically before each API call. They check localStorage for the authentication token and attach it to the headers. This means I don’t have to manually add the token every time I call the API, which avoids mistakes and keeps the code cleaner.

### What happens if an API request times out, and how can you handle it?
If an API request takes too long, Axios cancels it and throws a timeout error (ECONNABORTED). This prevents the app from hanging forever. In the frontend, I can catch this error and show a user-friendly message, or even retry the request depending on the situation.
