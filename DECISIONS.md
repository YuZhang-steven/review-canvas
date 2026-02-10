# DECISIONS.md

This document summarizes the key product and technical decisions I made, along with the trade-offs.

---

## 1) DOM + CSS transforms (instead of R3F + Orthographic camera)

### Context
The core requirement is an “infinite canvas” with smooth pan/zoom and pinned comment threads. Most content on the canvas is 2D (images, text, rectangles) and the UI is heavily DOM-driven (sidebar, inputs, editable comments).

### Options considered
1. **DOM + CSS transforms**  
   Render all objects inside a `World` div and implement a simple camera model `{ tx, ty, scale }`. Pan/zoom is achieved by transforming the world container.

2. **React Three Fiber + Orthographic camera**  
   Use Three.js coordinates and camera controls. 2D UI would either be rendered as meshes or via overlays like `@react-three/drei` `<Html>` / manual projection.

### Decision
I chose **DOM + CSS transforms**.

### Why
- The product surface is mostly **2D UI**, and DOM makes it straightforward to render and edit text, inputs, and images.
- DOM keeps the comment/thread UI (editing, tagging, filtering) simple and accessible.
- The required “camera” math is small: `screenToWorld`, `worldToScreen`, and cursor-centered zoom (`zoomAt`).

### Trade-offs / future
- If the app becomes 3D-heavy, a WebGL-first approach could be more suitable.
- A hybrid path is still possible: keep the DOM world as the base and embed 3D “tiles” when needed.

---

## 2) Zustand object stores for threads/messages (instead of external Map)

### Context
I needed fast reads/writes for threads and comments, plus predictable UI updates (e.g., selecting a thread, adding a comment, resolving, filtering).

### Initial approach
I first stored threads/messages in a **Map** and kept only ID lists in Zustand.

### What went wrong
 Some UI updates required extra work to ensure components re-rendered (e.g., adding a comment to a thread), because React components weren’t subscribing to the data structure that actually changed.

### Decision
I moved thread/message storage fully into Zustand as normalized objects:

- `threadsById: Record<string, Thread>`
- `messagesById: Record<string, Message>`
- plus ID lists for ordering

Components subscribe via selectors (and shallow comparison where appropriate) so updates re-render only the parts that changed.

### Why
- UI updates become **predictable** because the source of truth lives in the store.
- Normalized state makes it easier to update one thread or message without rebuilding everything.
- Selectors allow components to subscribe to a small slice of state.

### Trade-offs / future
- Store update functions become more verbose than Map mutations (must update immutably).

---

## 3) Sidebar thread view (instead of an in-canvas popup near the pin)

### Context
A comment thread is anchored to a location on the canvas, but reviewing a large diagram often requires moving the camera around to compare areas or inspect other parts of the design.

### Options considered
1. **Popup near the pin (world-anchored UI)**  
   Shows the thread close to the pin location, but moves with the camera and can be inconvenient when navigating.

2. **Sidebar thread panel (screen-anchored UI)**  
   The thread view stays fixed while the user pans/zooms around the canvas.

### Decision
I chose the **sidebar panel**.

### Why
- Better supports a real review workflow: users can keep the thread visible while navigating to other regions of the canvas.

### Trade-offs / mitigation
- The sidebar weakens the spatial connection between the pin and the thread content.
- To reduce this, I added a “Locate” action that recenters the camera on the thread pin when needed.

### Future
- A nice enhancement would be a split behavior: quick preview tooltip near the pin + full thread in sidebar on click.