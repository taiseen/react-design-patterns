> 16 - November - 2025

# React - Design Patterns


| #  | Pattern Name                          | Description                                                                             |
|----|---------------------------------------|-----------------------------------------------------------------------------------------|
| 1  | Container-Presenter                   | Separates business logic (Container) from UI rendering (Presenter)                      |
| 2  | Controlled vs Uncontrolled            | Controlled: state managed by props/callbacks. Uncontrolled: uses refs for DOM access    |
| 3  | Compound Components                   | Parent component shares state with named children (e.g., `Dropdown.Menu`)               |
| 4  | Render Props                          | Shares logic via a function prop (`render` or `children`) that returns JSX              |
| 5  | Higher-Order Component (HOC)          | A function that wraps a component to enhance it (e.g., `withAuth`, `withLogging`)       |
| 6  | Custom Hooks                          | Encapsulates reusable logic in a function starting with `use` (e.g., `useLocalStorage`) |
| 7  | Provider (Context API)                | Uses `createContext()` to pass data through the tree without prop drilling              |
| 8  | Optimistic UI                         | updating the UI immediately as if an operation succeeded — before the server confirms it|
| 9  | State Reducer                         | Uses `useReducer` to manage complex state; allows parent to override reducer behavior   |
| 10 | Observer / Pub-Sub                    | Event-driven communication using emitters (e.g., `EventTarget`, `mitt`)                 |

## 🎯 Recommended Focus (80/20 Rule)

The following **5 patterns cover ~80% of real-world React development needs**:

- ✅ **Custom Hooks**
- ✅ **Compound Components**
- ✅ **State Reducer**
- ✅ **Controlled Component**
- ✅ **Provider (Context API)**
