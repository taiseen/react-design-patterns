> 28 - November - 2025

# Render Props Pattern

```js
=============================================
Notes
=============================================

🎯 What is it?
A React pattern where a component accepts a PROP
whose VALUE is a FUNCTION that RETURNS JSX.

This lets:
  • The component handle the LOGIC (e.g., mouse position).
  • The parent decide the UI (e.g., show 🚗 or 🏍️).

💡 Core Idea:
"Separate HOW (logic) from WHAT (rendering)."

─────────────────────────────────────────────
DIAGRAM 1: BEFORE (Duplication)
─────────────────────────────────────────────

  ┌──────────────────┐     ┌──────────────────┐
  │   CarTracker     │     │   BikeTracker    │
  │                  │     │                  │
  │ - Tracks mouse   │     │ - Tracks mouse   │
  │ - State: {x,y}   │     │ - State: {x,y}   │
  │ - Renders "🚗"   │     │ - Renders "🏍️"   │
  └──────────────────┘     └──────────────────┘
        ❌ Same logic copied twice!


─────────────────────────────────────────────
DIAGRAM 2: AFTER (Render Props)
─────────────────────────────────────────────

  ┌───────────────────────────────────────┐
  │          MouseTracker (Logic)         │
  │                                       │
  │ - Manages state: {x, y}               │
  │ - Listens to mouse move               │
  │ - Calls: this.props.render({x, y})    │
  └───────────────────┬───────────────────┘
                      │
                      ▼
  ┌─────────────────────────────┐   ┌─────────────────────────────┐
  │ Parent: Passes render prop  │   │ Parent: Passes render prop  │
  │                             │   │                             │
  │ <MouseTracker               │   │ <MouseTracker               │
  │   render={({x,y}) => (      │   │   render={({x,y}) => (      │
  │     <p>🚗 at ({x},{y})</p>  │   │     <p>🏍️ at ({x},{y})</p>  │
  │   )}                        │   │   )}                        │
  │ />                          │   │ />                          │
  └─────────────────────────────┘   └─────────────────────────────┘

✅ One logic component → Many UIs!


─────────────────────────────────────────────
ALTERNATIVE: Using `children` as render prop
─────────────────────────────────────────────

Instead of a named prop like `render`,
you can use the special `children` prop:

  <MouseTracker>
    {({x, y}) => <p>Boat 🚤 at ({x},{y})</p>}
  </MouseTracker>

Why? Cleaner syntax! No need to write `render={...}`.

📝 Note: `children` is just another prop—but React lets you pass it
       between opening/closing tags. It’s still a "render prop"!


─────────────────────────────────────────────
⚠️ Pitfalls for Beginners
─────────────────────────────────────────────
1. 🚫 Harder to debug:
   - The function doesn’t show as a component in React DevTools.

2. 🐢 Performance:
   - Inline functions (e.g., `render={() => ...}`) create a new
     function on every render → may cause unnecessary re-renders
     if misused.

3. 🌀 Nested render props get messy fast:
   <A render={() => <B render={() => <C ... />} />}
   → Avoid! Use Custom Hooks instead.

4. 🔁 Don’t mix with HOCs (Higher-Order Components):
   It becomes confusing quickly.


─────────────────────────────────────────────
✅ When Should You Use It?
─────────────────────────────────────────────
• Working with legacy code that uses it.
• Building a highly flexible utility component (e.g., for a design system).
• You can’t use Hooks (very rare in 2025).

❌ When NOT to use it?
• In new projects → Prefer **Custom Hooks**!
  Example: useMousePosition() → returns {x, y}
  Then use it in any component without render props fuss.


─────────────────────────────────────────────
💡 Key Takeaway for Beginners
─────────────────────────────────────────────
Render Props = Reusable logic + Custom UI.

But in modern React (2025):
  → Use **Custom Hooks** for logic reuse.
  → Keep components simple and explicit.
  → Avoid render props unless maintaining old code.

They’re great to understand—but not great to write today.
```
