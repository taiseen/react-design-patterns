> 12 - December - 2025

# PUB-SUB Overview:-

- The event bus stores it in a `Map[event]` → `Set[handlers]`.
- `Handler` = your function that runs when an event occurs.
- When `publish` is called,
  - the event bus `loops` through ***all stored*** `handlers` and calls each one with the `payload`.
- That’s how your handler “auto gets” the `data` — it’s passed as a function argument.

> No magic — just functions being `stored` and `called later` (a core JavaScript concept!)

```js
eventList.get(eventName).add(handler); // 👈 Your handler is stored here
```

```js
Map {
  "cart:add" → Set{ (data) => { setItems([...items, data]) } }
}
```

## Visual Flow

```js
Subscribe("cart:add", handlerA)
          │
          ▼
Map: { } → doesn’t have "cart:add"
          │
          ▼
Map: { "cart:add" → Set() }
          │
          ▼
Map: { "cart:add" → Set{ handlerA } }
```

```js
Publish("cart:add", payload)
          │
          ▼
Map lookup: "cart:add" → Set{ handlerA, handlerB }
          │
          ▼
Call: handlerA(payload)
Call: handlerB(payload)
```

## Internal Structure with Multiple Handlers

```js
Map {
  "cart:add" → Set {
    (data) => { setItems([...items, data]) },          // ← CartBadge UI update
    (data) => { logEvent("Added to cart", data) },     // ← Analytics logger
    (data) => { toast.success("Added: " + data.name) },// ← Toast notification
    (data) => { saveToLocalStorage(data) }             // ← Persistence
  }
}
```

## 🔹 Structure of the Map in Event Bus

Event Bus Listeners Map (`Map<event: string, handlers: Set<Function>>`)

```sh
┌──────────────────────┬─────────────────────────────────────────────┐
│      Event Key       │              Set of Handler Functions       │
├──────────────────────┼─────────────────────────────────────────────┤
│ "cart:add"           │ { handlerA, handlerB, handlerC }            │
│ "user:login"         │ { handlerX, handlerY }                      │
│ "notification:show"  │ { toastHandler, logHandler }                │
└──────────────────────┴─────────────────────────────────────────────┘
```

- `Map` data structure works inside an Event Bus for the Pub/Sub pattern.
- `Set` of callback functions (subscribers) that want to be notified when that event occurs.

## 📦 Visual Box Diagram

> 🔑 Key Point: ***All handlers*** share the ***same event name***, but each does its own independent job.

```js
+----------------------------------+
|        Event Bus (Map)           |
+----------------+-----------------+
| Event Name     | Handler Set     |
+----------------+-----------------+
| "cart:add"     |  +------------+ |
|                |  | Handler 1  | | → Updates cart UI
|                |  +------------+ |
|                |  +------------+ |
|                |  | Handler 2  | | → Sends analytics
|                |  +------------+ |
|                |  +------------+ |
|                |  | Handler 3  | | → Shows toast
|                |  +------------+ |
|                |  +------------+ |
|                |  | Handler 4  | | → Saves to localStorage
|                |  +------------+ |
+----------------+-----------------+
```

## ⬇️ Visual Flow

```js
Publish("cart:add", payload)
          │
          ▼
Map lookup: "cart:add" → Set{ handlerA, handlerB }
          │
          ▼
Call: handlerA(payload)
Call: handlerB(payload)
```

## 🧠 Event Bus Internals (Multi-Event, Multi-Handler View)

```js
Map {
  "cart:add" → Set{
    (data) => { setItems([...items, data]) },               // 🛒 Cart UI
    (data) => { logEvent("Added to cart", data) },          // 📊 Analytics
    (data) => { toast.success("Added: " + data.name) },     // 💬 Toast
    (data) => { saveToLocalStorage(data) }                  // 💾 Persistence
  },

  "user:login" → Set{
    (data) => { setUser(data.user) },                       // 👤 Auth state
    (data) => { trackLogin(data) },                         // 📈 Analytics
    (data) => { resetCart() },                              // 🧹 Clear old cart
    (data) => { syncPreferences(data.user.id) }             // ⚙️ Load settings
  },

  "notification:show" → Set{
    (data) => { enqueueToast(data) },                       // 🍞 Toast queue
    (data) => { playSoundIfEnabled(data.type) },            // 🔊 Audio alert
    (data) => { logNotification(data) }                     // 📝 Debug log
  },

  "theme:change" → Set{
    (data) => { applyThemeToDOM(data.theme) },              // 🎨 CSS update
    (data) => { saveThemePreference(data.theme) },          // 💾 LocalStorage
    (data) => { sendThemeToAnalytics(data.theme) }          // 📊 Track usage
  }
}
```

## Box Diagram Format (Structured View)

```js
+--------------------------------------------------+
|                Event Bus (Map)                   |
+---------------------+----------------------------+
| Event Name          | Handler Set                |
+---------------------+----------------------------+
| "cart:add"          |  +----------------------+  |
|                     |  | Handler 1: Cart UI   |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 2: Analytics |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 3: Toast     |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 4: Storage   |  |
|                     |  +----------------------+  |
+---------------------+----------------------------+
| "user:login"        |  +----------------------+  |
|                     |  | Handler 1: Auth      |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 2: Analytics |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 3: Reset Cart|  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 4: Preference|  |
|                     |  +----------------------+  |
+---------------------+----------------------------+
| "notification:show" |  +----------------------+  |
|                     |  | Handler 1: Toast Q   |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 2: Sound     |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 3: Logger    |  |
|                     |  +----------------------+  |
+---------------------+----------------------------
| "theme:change"      |  +----------------------+  |
|                     |  | Handler 1: DOM Theme |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 2: Save Pref |  |
|                     |  +----------------------+  |
|                     |  +----------------------+  |
|                     |  | Handler 3: Analytics |  |
|                     |  +----------------------+  |
+---------------------+----------------------------+
```

## 🟡 User Interaction:- Starting Point + Publisher: Emit Event Locally

```js
User
  │
  ▼
[AddToCartButton] —(click)→ handleClick()

handleClick()
  │
  ▼
eventBus.publish("cart:add", { id, name }, { broadcast: true })
  │
  ├─▶ Step A: Notify **local subscribers**
  │      │
  │      ▼
  │   listeners.get("cart:add") → Set[CartBadge.handler]
  │      │
  │      ▼
  │   CartBadge.handler({ id, name })
  │      │
  │      ▼
  │   setItems([...items, data]) → UI re-renders (✅ Local update)
  │
  └─▶ Step B: Broadcast to **other tabs** (since broadcast=true)
         │
         ▼
   crossTabChannel.postMessage({ eventName: "cart:add", payload: { id, name } })
```

## 🔵 Cross-Tab Propagation (Other Browser Tabs Auto-Update)

> Assumes another tab has the same app open and has run `main.jsx`

```js
Other Tab(s)
  │
  ▼
crossTabChannel.onmessage → triggered by postMessage()
  │
  ▼
Receives: { eventName: "cart:add", payload: { id, name } }
  │
  ▼
eventBus.publish("cart:add", payload, { broadcast: false })
  │
  ├─▶ Notify **local subscribers in this tab**
  │      │
  │      ▼
  │   CartBadge.handler({ id, name })
  │      │
  │      ▼
  │   setItems([...items, data]) → UI re-renders (✅ Cross-tab sync)
  │
  └─▶ broadcast=false → **NO** postMessage() → avoids infinite loop
```

## 📡 Publisher-Subscriber (Pub-Sub) Pattern

```js
+----------------+       publish("cart:add", item)
|  Publisher     | ────────────────┐
| (AddToCartBtn) |                 │
+----------------+                 ▼
                         +---------------------+
                         |     Event Bus       |
                         | (subscribe/publish) |
                         +----------+----------+
                                    │
                                    │ notify with payload
                +-------------------+-------------------+
                ▼                   ▼                   ▼
+------------------+  +-------------------+  +------------------+
|  Subscriber A    |  |  Subscriber B     |  |  Subscriber C    |
| (CartBadge)      |  | (AnalyticsLogger) |  | (ToastNotifier)  |
+------------------+  +-------------------+  +------------------+
```

## 📡 Pub-Sub with Cross-Tab Broadcast

```js
Tab 1: Publisher → Event Bus → BroadcastChannel("app-events")
                                 │
Tab 2: ← Listener ← BroadcastChannel ← Event Bus ← Subscriber
                                 │
Tab 3: ← Listener ← BroadcastChannel ← Event Bus ← Subscriber
```

## 🔗 Component & Module Connection Map

```sh
+-------------------+        publishes       +------------------+
| AddToCartButton   | ────────────────────▶  |     eventBus     |
| (Publisher)       |   "cart:add" + data    | (Map<Event,Set>) |
+-------------------+                        +--------+---------+
                                                        │
                                                        │ notifies
                                                        ▼
+-------------------+        subscribes      +------------------+
| CartBadge         | ◀───────────────────── |     eventBus     |
| (Subscriber)      |   via useEvent()       |                  |
+-------------------+                        +--------+---------+
                                                        │
                                                        │ if broadcast=true
                                                        ▼
                                           +--------------------------------+
                                           | crossTabChannel (Web API)      |
                                           | BroadcastChannel("app-events") |
                                           +------------+-------------------+
                                                        │
                     (same channel name)                │ posts message
                     ┌──────────────────────────────────┘
                     ▼
+-------------------+--------+     +-------------------+--------+
| Tab 2: App        |        |     | Tab 3: App        |        |
| - eventBus        |        |     | - eventBus        |        |
| - CartBadge       |        |     | - CartBadge       |        |
|                   |        |     |                   |        |
| crossTabChannel   | ◀──────┘     | crossTabChannel   | ◀──────┘
| .onmessage →      |              | .onmessage →      |
| re-publishes      |              | re-publishes      |
| (broadcast:false) |              | (broadcast:false) |
+-------------------+              +-------------------+
```
