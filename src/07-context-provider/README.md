> 06 - December - 2025

# Context Provider - Pattern

## Provider Pattern Overview:-

- The Provider Pattern solves **prop drilling**: passing data through multiple intermediate components that don’t need it.
- It enables **sharing data or functionality** (e.g., theme, user auth, brand info) across a component tree **without manual prop passing**.
- Built on **React Context API**: creates a "broadcast" system where any descendant component can "tune in" to provided values.
- Ideal for **global or semi-global state** that spans multiple levels of the component hierarchy.

## Core Concepts: Context vs Provider:-

- **Context**: Defines a *boundary* or scope within which data is available. Created using `React.createContext()`.
- **Provider**: A React component (`.Provider`) that *delivers* data/functionality into the context boundary.
- Together, they allow components deep in the tree to access shared values directly via `useContext` (or `use` in React 19).

## Implementation Steps:-

1. **Create a Context**  
   - Use `React.createContext()` (e.g., `ThemeContext`, `BrandContext`).
   - Export it for use in providers and consumers.

2. **Create a Provider Component**  
   - A functional component that:
     - Manages state (e.g., `theme`, `brand`) using hooks like `useState`, `useEffect`.
     - Exposes data and methods (e.g., `toggleTheme`, `login`) via the `value` prop of the context provider.
     - Wraps children (`{children}`) to pass context down.

3. **Wrap Component Hierarchy**  
   - Place the provider high in the tree (e.g., in `main.jsx` or near the root) to cover all consumers.
   - Multiple providers can be **nested** for different contexts (e.g., `<ThemeProvider><BrandProvider>...</BrandProvider></ThemeProvider>`).

4. **Consume Context via Custom Hook**  
   - Create a custom hook (e.g., `useTheme`, `useBrand`) that:
     - Uses `useContext(YourContext)` to access values.
     - Returns structured data (e.g., `{ theme, toggleTheme }`).
   - Improves reusability and avoids repeating `useContext` calls.

5. **Use in Components**  
   - Import and call the custom hook to get data/functionality.
   - No prop drilling needed—values are available anywhere within the provider’s subtree.

## React 19 Updates:-

- **Context as Provider**:  
  - `MyContext.Provider` → now just use `MyContext` directly as the provider component.
- **New `use` Hook**:  
  - Replaces `useContext(MyContext)` → now use `const value = use(MyContext)`.
  - Also handles Promises (e.g., for async data).

## Real-World Use Cases:-

- **Theming**: Light/dark mode toggle.
- **Authentication**: User object, login/logout methods, auth status.
- **Internationalization (i18n)**: Current language, translation functions.
- **Shopping Cart**: Cart items, add/remove actions.
- **Brand Configuration**: Logo, colors, typography.
- **Feature Flags / A/B Testing**: Toggle UI features based on user segment.

## Pitfalls & Best Practices:-

1. **Scope Context Narrowly**  
   - Only wrap the *smallest necessary subtree*—not always the entire app.
2. **Separate Concerns**  
   - Avoid one "god" context. Use multiple contexts (e.g., `AuthContext`, `ThemeContext`, `CartContext`).
3. **Avoid Frequent Updates**  
   - Context updates **re-render all consumers**, even if they use only part of the value.
   - Split context values if needed (e.g., separate `user` and `theme`) to prevent unnecessary re-renders.
4. **Don’t Overuse**  
   - Not every state needs context. Use local state (`useState`) when data is used in only 1–2 components.
