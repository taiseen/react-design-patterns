> 21 - November - 2025

# Controlled & Uncontrolled Forms - Pattern

## ✅ Use **Controlled Components** for

- Production applications
- Forms requiring validation, dynamic fields, or integration with global state
- Testable, maintainable, and scalable code

## ✅ Use **Uncontrolled (FormData)** for

- Simple, static forms (e.g., search bar, contact snippet)
- Quick prototypes or MVPs
- Cases where React state adds unnecessary overhead

## ❌ Avoid **Uncontrolled (with useRef)** for form values

- Only use refs for DOM interactions (e.g., `.focus()`, `.scrollIntoView()`)
- Never use refs to manage form data *alongside* state for other fields (breaks single source of truth)

## 💡 Best Practice

- `State` for data. `Refs` for DOM. `FormData` for simple submissions.
