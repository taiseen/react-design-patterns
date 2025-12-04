> 03 - December - 2025

# Custom Hook - Pattern

## Why Hooks?

- Before React 16.8, logic reuse relied on Higher-Order Components (HOCs) and Render Props.
- Problems with HOCs/Render Props:
  - Prop drilling
  - Deep/wrapper hell (hard to debug)
  - Poor developer experience
- Hooks (introduced in React 16.8) enable:
  - State, side effects, context, and more in functional components
  - Reusable logic without component nesting
  - Cleaner separation: components handle UI, hooks handle logic

## What is a Hook in React?

- A Hook is a special JavaScript function that lets you "hook into" React features (state, effects, context, etc.).
- Unlike plain utility functions, Hooks are React-aware (they understand React’s state and lifecycle).
- Main purpose: Extract reusable stateful logic (e.g., data fetching, theme toggling) into independent functions.

## Built-in Hooks

Commonly used built-in Hooks:

- `useState`: Manage local state
- `useEffect`: Handle side effects (e.g., API calls, subscriptions)
- `useRef`: Access DOM elements or persist mutable values
- `useContext`: Consume context values
- `useReducer`: Manage complex state logic
- `useMemo` / `useCallback`: Optimize performance (though less critical with React Compiler in React 19+)
- New React 19 hooks: `useActionState`, `useFormStatus`, `useOptimistic` (for forms)

## Rules of Hooks

1. **Only call Hooks at the top level**  
   → Never inside loops, conditions, or nested functions.
2. **Only call Hooks from React functions**  
   → Either from:
      - React functional components, or
      - Other custom Hooks  
   → Never from plain JavaScript/utility functions.

- Why? React relies on consistent hook order during renders (uses a linked list internally per component).

## Custom Hooks

- A custom Hook is a JavaScript function whose name starts with **`use`** (e.g., `useToggle`).
- It can call other Hooks inside it.
- Goal: Encapsulate and reuse stateful logic across components.
- Returns values (data, functions) — **not JSX**.
- Keeps components focused on presentation; hooks handle behavior.

## Example: `useToggle`

- Manages a boolean state (`true`/`false`) and a toggle function.
- Accepts an optional initial value (default: `false`).
- Returns `[value, toggle]`.
- Used in a `ThemeSwitcher` component to toggle light/dark mode.
- Demonstrates reusability: same hook can control visibility, themes, etc.

## Use Cases for Custom Hooks

- `useLocalStorage`: Sync state with browser localStorage
- `useDebounce`: Limit rate of expensive operations (e.g., search input)
- `usePrevious`: Access previous state value
- `useScrollPosition`: Track window scroll
- `useOnlineStatus`: Detect network connectivity
- `useClipboard`: Copy text to clipboard
- `useMediaQuery`: Handle responsive design logic
- `useKeyPress`: Listen for keyboard events
- `useClickOutside`: Close modals/dropdowns on outside click
- `useInterval`: Manage `setInterval` with cleanup

## Pitfalls & Best Practices

1. **Don’t over-engineer**  
   → Only extract logic into a hook if it’s reused or complex.
2. **Avoid unnecessary re-renders**  
   → Use `useMemo`/`useCallback` when returning objects/functions from hooks.
3. **Handle cleanup properly**  
   → In `useEffect`, return cleanup functions for subscriptions, event listeners, etc., to prevent memory leaks.
4. **Be mindful of dependencies**  
   → Keep `useEffect`/`useMemo` dependency arrays accurate and complete.
