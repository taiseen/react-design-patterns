> 29 - December - 2025
>
# useCallBack:-

##> Why Inline Functions Break Memoization in React

When a parent component renders for the first time, a function is created in memory.  
Let’s say its reference is **X**.

Now, when you click a button and update state in the parent component, React re-renders the parent.  
During this re-render, **a brand-new function is created**, even if the code looks exactly the same.

So now the function reference becomes **Y**, not **X**.

---

## Why This Matters

In JavaScript, **functions are reference types**, just like objects.  
React does not compare how a function looks.  
It compares **where the function lives in memory**.

Because the function reference changes:

- React thinks the prop has changed  
- The child component re-renders  
- This happens **even if the child is wrapped with `React.memo`**

> `That’s why` `inline arrow functions` `break memoization`.

---

## The Core Mental Model

- Every render creates new inline functions  
- New function reference = prop changed  
- Prop changed = child re-render  

Keep this mental model clear.

---

## The Solution: `useCallback`

React provides the `useCallback` hook to solve this problem.

### What `useCallback` does

- Memoizes the function  
- Keeps the **same function reference** between renders  
- Recreates the function **only when dependencies change**

Because the reference stays stable:

- The child component sees no prop change  
- The child does **not** re-render unnecessarily

---

## Final NOTE (Thumb Rule)

- **Inline arrow functions create new references on every render.**  
- **New references break memoization.**  
- **Use `useCallback` to stabilize function references and avoid unnecessary re-renders.**
