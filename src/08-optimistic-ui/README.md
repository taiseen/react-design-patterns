> 08 - December - 2025

# Optimistic UI - Pattern

## 1. What is Optimistic UI?:-

- Optimistic UI is a UX pattern where the UI updates instantly assuming the server operation will succeed.
- If the server call fails, the UI rolls back to the previous state (reconciliation).
- Goal: Increase perceived performance — user feels the app is fast and responsive.
- Real round-trip time to server remains the same; only perceived speed improves.
- Classic example: Clicking "Like" → button & count update immediately (instead of waiting for server response).
- Analogy: Coffee shop gives you a token instantly after order (optimistic confirmation), even before processing begins.

## 2. Pessimistic vs Optimistic UI:-

- `Pessimistic`: User clicks `→` waits `→` server responds `→` UI updates (slow perceived speed).
- `Optimistic`: User clicks `→` UI updates immediately `→` server call runs in background `→` reconciles (commit or rollback).
- Success `→` no change needed (already updated).
- Failure `→` rollback to previous state.

## 3. useOptimistic Hook in React (Introduced in React 19):-

- New built-in hook to implement Optimistic UI declaratively.
- Syntax:
  const [`optimisticState`, `addOptimistic`] = useOptimistic(`currentState`, `updateFn`);
- Parameters:
  - `currentState`: The real source-of-truth state (from useState, Redux, etc.)
  - `updateFn`: Pure function (currentState, input) => nextOptimisticState
- Returns:
  - `optimisticState` `→` Temporary value rendered in JSX.
  - `addOptimistic` `→` function to trigger optimistic update

## 4. Anatomy of useOptimistic Hook:-

- Current State `→` real state (e.g., likes = 0)
- updateFn `→` pure function that computes next optimistic value
  - Example: (currentLikes, delta) => currentLikes + delta
- addOptimistic(input) `→` triggers updateFn with currentState + input
- optimisticState `→` instantly reflects the optimistic value in UI
- When real state updates (after server success), useOptimistic auto-reconciles

## 5. Critical Fix: Must Use startTransition or Server Actions:-

- Calling addOptimistic() directly (without transition/action) throws error:
  "optimistic state update occurred outside a transition or action"
- Fix: Wrap the handler in `startTransition(() => { ... })`
- This enables concurrent mode and instant optimistic rendering.
  - “This is not urgent—don’t block UI for it.”

## 6. Error Handling & Rollback:-

- On server success `→` update real state `→` useOptimistic auto-commits
- On server failure:
  - Do NOT update real state
  - Call setLikes(current) || setLikes(prev => prev) to trigger reconciliation
  - Optimistic value automatically rolls back
  - Optional: show toast/error message

## 7. Real-World Use Cases:-

- Social interactions: Likes, reactions, claps.
- Chat apps: Show “sending…” message instantly.
- E-commerce: Add/remove items from cart.
- Collaborative tools: Google Docs-style real-time edits.
- AI interfaces: Immediate placeholder while waiting for slow model response.
- Polls, voting systems, comment submissions.

## 8. Pitfalls & Anti-patterns:-

- Never assume 100% success — always plan rollback
- Don’t use Optimistic UI to hide fundamentally bad UX/design
- Not a replacement for proper loading states in slow flows
- Overusing it can confuse users if rollbacks happen too frequently
