> 19 - November - 2025

# Container Presenter - Patterns

---

WHERE TO USE THIS PATTERN

✅ Ideal for:

- Data-heavy views (user dashboards, product catalogs, analytics reports)
- Form-heavy UIs (multi-step wizards, checkout flows, settings panels)
- Any component that mixes data logic + complex rendering

✅ Success criteria:

- Container has zero JSX
- Presenter has zero API calls
- Clear separation of concerns
- Components are reusable and testable

---

**Core Idea:** Split responsibilities.

- **Container Component**:  
  • Handles data logic (API calls, state management, error/loading states).  
  • Contains NO JSX.  
  • Passes data and callbacks to Presenter via props.

- **Presenter Component**:  
  • Handles UI rendering ONLY.  
  • Receives all data and event handlers as props.  
  • Contains JSX but NO data fetching or business logic.

> Note: Avoid terms like “smart/dumb.” Use “Container/Presenter” instead.

**Additional Refinements:**

- Break large Presenters into smaller UI components (e.g., `ProfileHeader`, `PostList`, `Post`).
- Create reusable common components (e.g., `LoadingSpinner`, `ErrorMessage`).
- Follow naming conventions:
  - Props for functions: `onSave`, `onRetry`
  - Handler functions: `handleSave`, `handleRetry`

---

APPLYING THE PATTERN

**Step 1: Create Container (`UserProfileContainer.jsx`)**

- Move all data-related logic here:
  - `useState` for `user`, `posts`, `loading`, `error`
  - `useEffect` to fetch data when `userId` changes
  - Functions: `fetchUserData`, `fetchUserPosts`, `handleRetry`, `handleUpdateUser`
- Return: `<UserProfilePresenter {...props} />`

**Step 2: Create Presenter (`UserProfilePresenter.jsx`)**

- Accept props: `user`, `posts`, `loading`, `error`, `onRetry`, etc.
- Handle UI-only state: `isEditing`, `formData` (since these relate to form interaction, not data fetching)
- Render:
  - `<LoadingSpinner message="Loading user profile..." />` (if loading)
  - `<ErrorMessage title="Oops!" message={error} onRetry={onRetry} />` (if error)
  - `<ProfileHeader ... />`
  - `<PostList posts={posts} />`

**Step 3: Break Down Further**

- `ProfileHeader.jsx`: Renders user info + edit form
- `PostList.jsx`: Maps over posts → renders `<Post />` components
- `common/LoadingSpinner.jsx`, `common/ErrorMessage.jsx`: Reusable UI elements

**Step 4: Manage UI State in Presenter**

- `isEditing`, `formData` live in `UserProfilePresenter` (not Container), because they’re purely presentational concerns.
- Callbacks like `onStartEdit`, `onInputChange`, `onSaveProfile` are passed from Presenter to Container when data must be saved.

---
