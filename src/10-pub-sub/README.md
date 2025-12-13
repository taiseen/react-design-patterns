> 12 - December - 2025

# Pub-Sup - Pattern

## Introduction to Pub-Sub & Observer Patterns:-

- Traditional client-server model: request → response.
- Modern interaction model: **event-driven**—components **subscribe** to events and get **notified** when they occur, often with **data payloads**.
- Two key patterns enable this:
  1. **Observer Pattern**
  2. **Publisher-Subscriber (Pub-Sub) Pattern**

## Observer Pattern:-

- **Structure**:
  - **Subject**: Holds state and maintains a list of **observers**.
  - **Observers**: Dependents notified when the subject changes.
- **Relationship**: **One-to-many** (1 subject → many observers).
- **Coupling**: Subject **knows** its observers → **tight coupling**.
- **Example**: LinkedIn bio update → followers get notified.

## Pub-Sub Pattern:-

- **Structure**:
  - **Publisher**: Emits events to a **message broker** (e.g., event bus).
  - **Subscriber**: Listens to events on specific **topics/channels**.
  - **Message Broker**: Mediates communication (decouples publishers & subscribers).
- **Relationship**: **Many-to-many** (many publishers → many subscribers via topics).
- **Coupling**: **Zero knowledge** between publishers and subscribers → **loose coupling**.
- **Example**: YouTube — you subscribe to a channel; creator publishes → you get notified.

## Why Pub-Sub Over Observer in React?:-

- React favors **composition over coupling**.
- Components should be **isolated, reusable, and unaware** of each other.
- Pub-Sub enables **cross-component communication** without:
  - Prop drilling
  - Context API (which only works within a single React tree)
- Ideal for **micro-frontends** or **disjoint React apps**.

## Building a Pub-Sub System in React:-

1. **Event Bus (Message Broker)**:
   - Plain JavaScript object with:
     - `subscribe(event, handler)` → returns `unsubscribe` function.
     - `publish(event, payload)` → notifies all subscribers of that event.
   - Uses `Map<event, Set<handlers>>` for efficient topic-based routing.
2. **useEvent Hook**:
   - Custom hook to safely subscribe/unsubscribe using `useEffect`.
   - Prevents memory leaks by auto-unsubscribing on component unmount.
3. **Publisher Component**:
   - Calls `eventBus.publish('CART:ADD', { id, name })` on user action (e.g., “Add to Cart”).
4. **Subscriber Component**:
   - Uses `useEvent('CART:ADD', handler)` to receive payload.
   - Updates local state (e.g., cart item list) on notification.
5. **Demo**:
   - Publisher button adds random product.
   - Subscriber badge shows real-time count and list — **no props or context used**.

## Broadcasting Across Browser Tabs:-

- Uses the **Broadcast Channel API** (Web API).
- Steps:
  1. Create a `BroadcastChannel('app-cart-events')`.
  2. On `publish`, optionally call `channel.postMessage({ event, payload })`.
  3. ~~In `main.jsx`, import a **listener module** that:~~
     - Listens via `channel.onmessage`.
     - Republishes received events **locally** (with `broadcast: false` to avoid loops).
- Result: Adding item in **Tab 1** instantly updates **Tabs 2, 3, etc.**

## Pub-Sub vs React Context API:-

| Aspect        | Context API                    | Pub-Sub Pattern                     |
|---------------|--------------------------------|-------------------------------------|
| Scope         | Within **single React tree**   | **Global** — works across apps/tabs |
| Coupling      | Implicit via Provider          | Zero coupling                       |
| Use Case      | Theme, auth, shared UI state   | Cross-cutting events (e.g., cart, notifications) |
| Disjoint Apps | ❌ Not possible                | ✅ Works seamlessly                 |

## Use Cases for Pub-Sub in React:-

- Global notification systems (toast, alerts).
- Shopping cart synchronization.
- Micro-frontend communication.
- Analytics & logging (track user actions globally).
- Real-time chat or collaboration features.
- Cross-tab state sync (e.g., logout all tabs).

## Pitfalls & Best Practices:-

1. **Don’t overuse**: Prefer `useState`, props, or Context first.
2. **Not a global state store**: Avoid replacing Redux/Zustand with Pub-Sub for complex state.
3. **Avoid event chaos**:
   - Use **constants** for event names (e.g., `CART:ADD`).
   - Document events and payloads.
4. **Prevent circular loops**: Publisher should not re-publish what it receives as a subscriber.
5. **Clean up**: Always unsubscribe (handled via `useEvent` hook).

## Summary:-

The Pub-Sub pattern provides a **decoupled, scalable** way to handle event-driven communication in React — especially when Context falls short (e.g., multi-app or cross-tab scenarios). Used wisely, it enhances modularity without introducing global state anti-patterns.
