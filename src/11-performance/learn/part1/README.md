# React Performance Patterns – (Part 1)

## 1. Re-Rendering in React

- Re-rendering occurs when:
  - Component state changes
  - Props change
  - Context value changes
  - Parent component re-renders
- Child components re-render even if they don't use the changed state from the parent.
- This can lead to unnecessary performance overhead.
- Example shown: Parent input updates cause child component to re-render on every keystroke.

## 2. Memoization

Memoization avoids redundant computations or re-renders by caching results based on input.

### a. React.memo()

- Higher-order component that memoizes a React component.
- Prevents re-render if props haven’t changed.
- Example: ProfileCard component wrapped in `memo` stops re-rendering when parent state changes but props remain static.

### b. useCallback()

- Memoizes function references to prevent breaking `React.memo`.
- Inline arrow functions create new references on every render → break memoization.
- `useCallback` stabilizes function identity across renders unless dependencies change.
- Fix: Wrap event handlers in `useCallback` before passing to memoized child components.

### c. useMemo()

- Memoizes expensive computed values (e.g., sorting, filtering large arrays).
- Caches result and recomputes only when dependencies change.
- Avoid overusing for trivial computations—can add overhead.
- Example: Sorting 100K+ users only when the input list changes.

## 3. Derived State (Anti-Pattern)

- Derived state = any value computable from props or existing state.
- **Never store derived state in `useState`**:
  - Causes unnecessary re-renders.
  - Requires manual sync logic → bugs & complexity.
- **Correct approach**: Compute derived values directly in render (or with `useMemo` if expensive).
- Examples:
  - ❌ Storing cart total in state with `useEffect`.
  - ✅ Compute total inline or with `useMemo`.
  - ❌ Using state for form validation (`isValid`).
  - ✅ Compute `isValid` as a const variable.

## 4. Debouncing

- Debouncing is a technique
  - through which you can delay the execution of a function to certain time.
- Delays execution of a function until after a specified idle time.
- Ideal for:
  - Search inputs (avoid API calls on every keystroke)
  - Auto-save features
- Implementation:
  - Custom `useDebounce` hook using `setTimeout` and `clearTimeout`.
  - Returns debounced value after delay (e.g., 500–600ms).
- Result: One API call after user stops typing, instead of one per keystroke.

## 🔍 What is Debouncing?

Debouncing is a performance optimization technique that delays the execution of a function until after a specified period of inactivity.

## 🎯 Why Use It?

- In a search input, typing fast triggers an API call on every keystroke (e.g., "T", "TA", "TAP"...).
- This leads to too many expensive network requests, which can:
  - Hit API rate limits
  - Increase costs
  - Slow down the app

## ⚙️ How It Works

- The input event (e.g., onChange) still fires on every keystroke — you can’t stop that.
- But the actual function (e.g., API call) is delayed.
- If the user keeps typing, the timer resets.
- The function only runs once — after the user stops typing for the set delay (e.g., 500ms).

## ✅ Key Point

> Debouncing doesn’t stop events — it defers the side effect (like API calls) until the user is done interacting.

## 💡 Use Case Example

- Search-as-you-type: Wait until the user pauses typing before fetching results.
- Result: 1 API call instead of 10+.

## 5. Throttling

- Ensures a function executes **at most once** per specified time interval.
- Ideal for:
  - Scroll handlers
  - Resize listeners
  - Frequent UI updates
- Implementation:
  - Custom `useThrottle` hook tracking last execution time.
  - Only updates value if enough time has passed since last update.
- Example: Scroll position updates only once every 3 seconds, reducing DOM manipulations.

⏱️ What is Throttling?
Throttling is a performance technique that limits how often a function can execute—ensuring it runs at most once per specified time interval, no matter how frequently the triggering event (like scrolling) occurs.

## 🎯 Why Use Throttling?

Events like scrolling, resizing, or mouse movement fire hundreds of times per second.

If you perform heavy operations (e.g., DOM updates, calculations) on every event, your app becomes slow and unresponsive.

- Example: Scrolling slowly triggered 28+ re-renders—unnecessary and inefficient.

## 🔧 How Throttling Works

- Tracks the last time the function was executed.
- Before running the function again, it checks:
  - > current time – last executed time ≥ delay?
  - ✅ Yes → Run the function and update last executed time.
  - ❌ No → Skip execution.
- This guarantees at most one execution per interval (e.g., once every 3 seconds).

## 🛠️ Implementation in React

- Create a custom hook: useThrottle(value, delay)
- Internally uses Date.now() to track time.
- Returns a throttled version of the value that updates only once per delay.

Usage:

```jsx
const throttledScrollY = useThrottle(scrollY, 3000); // update at most every 3 sec
```

- Result: Instead of updating on every scroll, the UI updates only every 3 seconds, drastically reducing workload.

## ✅ Key Takeaway
>
> Use throttling when you need regular but limited updates during high-frequency events. It prevents performance overload while keeping the UI responsive.

## Key Takeaways

- Control re-renders using `React.memo`, `useCallback`, and `useMemo`.
- Avoid derived state in `useState`—compute values directly.
- Use debouncing for input-driven async operations (search, save).
- Use throttling for high-frequency events (scroll, resize).
- Don’t over-optimize: Apply these patterns only when performance is measurably impacted.
