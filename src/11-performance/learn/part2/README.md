> 02 - January - 2026

# React Performance Patterns – (Part 2)

## 1. React Compiler (React 19+)

- React Compiler automatically memoizes components, stabilizes function references, and prevents unnecessary re-renders.
- Eliminates manual use of useMemo, useCallback, and React.memo in most cases.
- Setup:
  - Install: `yarn add -D babel-plugin-react-compiler`
  - Configure in build tool (e.g., Vite: add plugin to `vite.config.js`)
- Verification: React DevTools shows “memo” tags on all components.
- Opt-out: Use `useNoMemo` directive if a component needs to bypass auto-memoization.
- Note: Still works with React 17/18 but best with React 19+.

## 2. Lazy Loading & Suspense

- Problem: Large bundles slow down initial load, especially on slow networks.
- Solution: Load components only when needed using `React.lazy()` and `Suspense`.
- Example:
  - Non-lazy: Heavy component loaded upfront → slows initial render.
  - Lazy: Heavy component imported dynamically → loads only on user interaction.
- Benefits:
  - Faster Time to Interactive (TTI)
  - Smaller initial bundle
  - Better perceived performance with loading fallbacks

## 3. Component Isolation (Render Boundaries)

- Issue: Parent re-renders cause unnecessary child re-renders, even if props unchanged.
- Best Practice: Wrap frequently used child components with `React.memo` to create render boundaries.
- Result: Only components with changed props re-render.

## 4. Context Optimization

- Problem: Single "fat" context causes unnecessary re-renders across unrelated consumers.
- Solutions:
  1. **Split contexts**: Create separate contexts (e.g., UserContext, ThemeContext).
  2. **Narrow provider scope**: Wrap only the subtree that needs the context—avoid wrapping entire app unless necessary.
- Benefit: Prevents cascading re-renders when unrelated context values change.

## 5. Virtualization

- Problem: Rendering large lists (e.g., 10,000+ items) causes DOM bloat, jank, and memory issues.
- Solution: Render only visible items using virtualization (e.g., `react-window`).
- Benefits:
  - Drastic reduction in DOM nodes
  - Smooth scrolling
  - Faster initial load and scripting (e.g., 8s → 2s in demo)
- Recommendation: Always virtualize long lists.

## 6. Concurrency & useTransition()

- Problem: Heavy updates (e.g., filtering large lists) block UI responsiveness.
- Solution: Use `useTransition()` to mark non-urgent updates.
  - `startTransition()`: Wraps low-priority state updates (e.g., filtering).
  - `isPending`: Shows loading state while transition is in progress.
- Keeps high-priority tasks (e.g., typing) responsive.

## 7. useDeferredValue vs useTransition

- Similar goal: Defer non-critical updates.
- Difference:
  - `useTransition`: Controls the **state update function**.
  - `useDeferredValue`: Controls the **value derived from state**.
- Both leverage React’s concurrent rendering.

## 8. Keys in Lists

- Anti-pattern: Using array index as key → breaks memoization, causes unnecessary re-renders when list mutates.
- Best Practice: Use stable, unique IDs from data as keys.
- Benefit: Enables efficient reconciliation and DOM reuse.

## 9. Performance Tools

- Essential tools:
  - **React Developer Tools**: Inspect component memoization, re-renders.
  - **React Profiler / Performance Tracks**: Analyze render cascades and bottlenecks.
  - **React Scan**: Detect unnecessary re-renders.
- Recommendation: Learn and integrate these into dev workflow.
