> 25 - November - 2025

# Compound Components

## What is the Compound Components Pattern?

- It lets you build small, reusable sub-components that compose together under a parent component.
- The parent shares logic/state (e.g., open/close), while children define their own content freely.

```sh
✅ Golden rule:
Use compound components for composable UI structures, not for every tiny element. 
```

## Attach Sub-Components to Parent

```js
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
```

### 💡 Why keep them in one file?

- These sub-components only make sense inside Modal.
- They’re tiny helpers with no standalone use.
- Keeps related logic co-located → easier discovery and maintenance.
- ✅ Rule of thumb:
  - One file, one exported component. Sub-components are properties of the main export.
- ⚠️ Exception:
  - If a sub-component grows complex or becomes reusable elsewhere, move it to its own file.

## 📦 Separated Responsibilities

```sh
                ┌───────────────────────────────────┐
                │           Modal (Parent)          │
                ├───────────────────────────────────┤
                │ • Renders backdrop                │
                │ • Manages open/close state        │
                │ • Composes Header + Body + Footer │
                └───────────────────────────────────┘
                                  │                        
        ┌─────────────────────────┼────────────────────────┐
        │                         │                        │
        ▼                         ▼                        ▼
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   Modal.Header   │     │   Modal.Body     │     │  Modal.Footer    │
├──────────────────┤     ├──────────────────┤     ├──────────────────┤
│ Just a <div>     │     │ Just a <div>     │     │ Just a <div>     │
│ with styling     │     │ with styling     │     │ with styling     │
│ Waits for        │     │ Waits for        │     │ Waits for        │
│ children         │     │ children         │     │ children         │
└──────────────────┘     └──────────────────┘     └──────────────────┘
```

```js
================================================================================
       COMPOUND COMPONENTS PATTERN IN REACT – CLEAN TEXT GUIDE FOR BEGINNERS
================================================================================

This is a complete, section-wise, beginner-friendly summary of the entire lecture.
All original content is preserved – nothing deleted, just re-organized and highlighted.

================================================================================
SECTION 1: Why the "Messy" Prop-Driven Modal is BAD (The Problems)
================================================================================

1. Lack of Flexibility
   → Forces exact structure: title + body + 2 actions only
   → Want no title? Want image instead of <p>? Want 3+ buttons? → Impossible without adding new props
   → Every new requirement = add more props + conditional logic = code smell

2. Violates Separation of Concerns
   → One component does TWO jobs:
        • Layout / Shell (container role)
        • Content & Variations (presenter role)
   → Modal starts "knowing" it is a delete modal / signup modal etc.
   → Ideal modal = dumb shell only

3. Hard to Use & Poor Reusability
   → New use-case → more props → ugly if/else → technical debt
   → Example: want image + description → add new prop → component becomes messy

4. Zero Scalability (especially in Design Systems)
   → End up with 20+ props OR fork the component → maintenance nightmare
   → Cannot cleanly have InfoModal, ConfirmModal, FormModal etc.

5. Testing Nightmare
   → Tightly coupled props → unit tests need hundreds of combinations

Key Learning Box for Beginners
╔══════════════════════════════════════════════════════════════════╗
║  Prop-driven "smart" components = short-term win, long-term pain ║
║  Adding props forever is an anti-pattern                         ║
╚══════════════════════════════════════════════════════════════════╝

================================================================================
SECTION 2: The Secret – Build DUMB, Composable Lego Bricks
================================================================================

Best components are presentational ("dumb") building blocks.
Compound Components Pattern = Lego-style composition

Visual Box Diagram – How Compound Components Work

╔═══════════════════ Modal (Parent) ═══════════════════╗
║  • Handles backdrop, open/close state                ║
║  • Renders {children} only                           ║
║                                                      ║
║  Modal.Header   ← sub-component (Lego brick)         ║
║  Modal.Body     ← sub-component                      ║
║  Modal.Footer   ← sub-component                      ║
╚══════════════════════════════════════════════════════╝

Consumer composes freely:
<Modal>
  <Modal.Header> ...anything... </Modal.Header>
  <Modal.Body>    ...anything... </Modal.Body>
  <Modal.Footer>  ...any buttons... </Modal.Footer>
</Modal>

Key Learning Box
╔══════════════════════════════════════════════════════════════╗
║  Compound Components = Parent + children + static sub-parts  ║
║  Consumer decides the content → maximum flexibility          ║
╚══════════════════════════════════════════════════════════════╝

================================================================================
SECTION 3: Full Modal Implementation (Compound Pattern)
================================================================================

// modal.jsx – one file, one default export (golden rule)
function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

// Sub-components (Lego bricks)
function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}
function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}
function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}

// Attach them – this is the magic!
Modal.Header = ModalHeader;
Modal.Body   = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

Usage Example (App.jsx)
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>
    <h1>Any heading, image, custom component...</h1>
  </Modal.Header>

  <Modal.Body>
    <p>Any content</p>
    <AccordionDemo />          {/* nesting other compound components! */}
  </Modal.Body>

  <Modal.Footer>
    <button>Help</button>
    <button>Cancel</button>
    <button>Delete</button>
    {/* any number, any order */}
  </Modal.Footer>
</Modal>


================================================================================
SECTION 4: Extra Props Are Still Allowed (Shell Behavior Only)
================================================================================

Allowed:
• isOpen
• onClose
• size, centered, etc.

These control the outer shell → perfectly fine!
Never pass props to control children appearance.

================================================================================
SECTION 5: When to Use Compound Components (Use-Case Table)
================================================================================

Perfect when layout & nesting matters

┌────────────────────┬──────────────────────────────────────────────┐
│ Component          │ Sub-components example                       │
├────────────────────┼──────────────────────────────────────────────┤
│ Modal              │ Header, Body, Footer                         │
│ Accordion          │ Item                                         │
│ Tabs               │ Tab, TabPanel                                │
│ Dropdown           │ Trigger, Menu, MenuItem                      │
│ Table              │ Thead, Tbody, Tr, Th, Td                     │
│ Stepper            │ Step, StepLabel, StepContent                 │
│ Carousel           │ Slide                                        │
└────────────────────┴──────────────────────────────────────────────┘

Real libraries that use it heavily:
→ Radix UI, shadcn/ui, Material UI, Headless UI

Key Learning Box
╔═══════════════════════════════════════════════════════════════╗
║  If you are building a design system → compound components    ║
║  are NON-NEGOTIABLE                                           ║
╚═══════════════════════════════════════════════════════════════╝

================================================================================
SECTION 8: Pitfalls & Anti-Patterns (Must Avoid)
================================================================================

1. Don’t attach random sub-components
   → Only what semantically belongs to parent

2. NEVER re-export sub-components separately
   Bad → export { ModalHeader, ModalBody }
   → Juniors will use them outside Modal → future refactor disaster

3. Don’t make everything compound
   → Only when child structure/order matters

4. Simple components (Button, Input) → regular props are fine

================================================================================
FINAL CHEAT SHEET FOR BEGINNERS
================================================================================

┌─────────────────────────────────────────────────────────────────┐
│               COMPOUND COMPONENTS QUICK REFERENCE               │
├─────────────────────────────────────────────────────────────────┤
│ When?        → Layout + nesting is important                    │
│ Core idea    → Parent + {children} + static sub-components      │
│ Props        → Only for shell behavior (open/close, size)       │
│ Sub-parts    → Accept {children} → unlimited flexibility        │
│ Export rule  → ONE default export per file                      │
│ Benefits     → Flexible | Reusable | Scalable | Testable        │
│ Real world   → Radix, shadcn/ui, Material UI                    │
└─────────────────────────────────────────────────────────────────┘

You now understand one of the most powerful & professional React patterns!
Happy building flexible components!
```
