> 30 - November - 2025

# Higher Order Component - Pattern

## Higher Order Function (HOF)  

- A higher-order function in JavaScript is a function that:
  1. Takes one or more functions as arguments, OR
  2. Returns a function as its result, OR
  3. Does both.
- Example: `withLogging(fn)` takes a function `fn`, returns a new function that executes `fn` and adds logging behavior.
- Purpose: Enables reusable logic (e.g., logging, timing, validation) without duplicating code across functions.

## Higher Order Component (HOC)  

- A HOC is a React pattern derived from HOFs.
- Definition: A function that takes a component as input and returns an enhanced component.
- Naming convention: Usually prefixed with "with" (e.g., `withDataFetching`).
- Purpose: Share common logic (e.g., data fetching, loading/error handling, auth) across multiple components.

## Movie App Example with HOC  

- Two components:
  - `MovieList`: Renders list of movies (title and year).
  - `MovieAnalytics`: Shows total movies and average rating.
- Both need the same movie data but should not duplicate fetch logic.
- Solution: Create HOC `withDataFetching` that:
  - Fetches data from API (`/api/movies`).
  - Manages `loading`, `error`, and `data` states.
  - Renders loading/error UI when needed.
  - Injects fetched `data` as a prop to the wrapped component.
- Usage:
  - `const MovieListWithData = withDataFetching(MovieList);`
  - `const MovieAnalyticsWithData = withDataFetching(MovieAnalytics);`
- Centralizes data-fetching logic, improves reusability and maintainability.

## Use Cases for HOCs  

- Cross-cutting concerns across components:
  - Data fetching
  - Loading & error states
  - Authentication & authorization (e.g., role/permission checks)
  - Logging or analytics
  - Theming or styling wrappers

## Pitfalls and Alternatives

- Pitfalls:
  - "Wrapper hell": Deep nesting of HOCs makes debugging hard.
  - Static methods on wrapped components are not automatically copied.
  - Props can become opaque (prop drilling or naming conflicts).
- Alternatives:
  - Modern React favors **Custom Hooks** over HOCs for logic reuse.
  - Hooks avoid nesting, preserve component identity, and are easier to test.
- HOCs are still common in legacy codebases and libraries (e.g., Redux’s `connect`).
