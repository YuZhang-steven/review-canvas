# Review Canvas

A canvas-based review and annotation application built with Next.js, React, and Zustand. This application provides an infinite canvas workspace where users can create comment threads, manage tasks.

## Features Implemented

### Canvas

- Infinite canvas with smooth zoom and pan controls

### Comment Threads

- Create comment pin at any location on the canvas by clicking with the comment tool
- Add/Delete/Edit comments in a thread
- Change comment to a To-Do item, or text item
- Add tags to a comment

### Comment Dashboard

- View all comments in a dashboard with filtering capabilities (All, Open, Resolved)
- Click a comment and move camera to the thread pin

## Getting Started

Try the live demo on Vercel:
[review-canvas-lemon.vercel.app](https://review-canvas-lemon.vercel.app)

### 1. Clone the Repository

```bash
# first
git clone https://github.com/YuZhang-steven/review-canvas
# then
cd review-canvas
```

### 2. Run the development server

```bash
# using npm
npm install
npm run dev

# using yarn
yarn install
yarn dev

# using pnpm
pnpm install
pnpm dev

# using bun
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Zustand 5.0.11

## Project Structure

### Basic Folder Structures

```text
review-canvas/
└── app/                          # Next.js App Router pages and Layout
    ├── (worksspace)/
    │   ├── CancasWorkapace.tsx   # Main workspace container
    │   ├── components/           # Major Component folder
    │   │   ├── SideBar.tsx       # Sidebar Layout
    │   │   ├── SideBarContent.tsx # Sidebar content switch
    │   │   ├── ToolBar.tsx       # Toolbar layout
    │   │   ├── Viewport.tsx      # Camera and view related wrapper
    │   │   ├── World.tsx         # Canvas content container
    │   │   ├── canvasObject/     # Image or geometry objects on canvas
    │   │   ├── messageDashBoard/ # Comment Overview Components
    │   │   ├── thread/           # Thread related Component
    │   │   └── toolbar/          # Tool Bar related component
    │   ├── hooks/                # React Hooks
    │   ├── lib/                  # Shared utilities, helpers
    │   ├── state/                # Global State (Zustand stores)
    │   ├── type/                 # TypeScript type definitions
    │   └── testObjects/          # Three test objects on the canvas
```

## Features

### Canvas Navigation

- **Zoom**: Mouse wheel to zoom in/out (10% - 500%)
- **Pan**: Right-click and drag to pan the canvas
- **Smooth Transitions**: Camera movements are animated with cubic easing
- **Zoom at Point**: Zoom centers around the cursor position
- **Zoom Indicator**: Current zoom level displayed in top-left corner

### Tools

1. **Select Tool** (default)

   - Click on threads to select them
   - Click on empty canvas to deselect
   - Displays object bounding boxes on hover

2. **Comment Tool**

   - Click anywhere on the canvas to create a new thread
   - Automatically switches to select mode after creation
   - Thread appears as a pin with message count

### Thread System

- **Pin Markers**: Visual pins on canvas showing thread location
- **Message Count**: Number badge on each pin
- **Focus Navigation**: Click to center camera on thread
- **Position Tracking**: Threads can be linked to canvas objects
- **Metadata**: Title, description, and linked item support

### Message Types

1. **Text Messages**

   - Rich text editing with auto-save
   - Markdown-style line break support
   - Enter to save, Shift+Enter for new line

2. **Image Messages**

   - Image attachment support
   - Scaled display in message cards

3. **Todo Messages**

   - Checkbox for completion status
   - Toggle between todo and text types
   - Line-through for completed items

### Message Features

- **Tags**: Add custom tags to messages (max 3 visible)
- **Editing**: Inline text editing
- **Deletion**: Remove messages with confirmation
- **Type Conversion**: Convert between text, image, and todo
- **Timestamps**: Creation and update dates
- **Filtering**: Filter by All / Open / Resolved

### Sidebar

- **Collapsible**: Hidden by default, expands on selection
- **Thread View**: Shows messages in selected thread
- **Dashboard View**: Shows all messages with filters
- **Animations**: Smooth width transitions
- **Trigger Strip**: Visible strip when closed for quick access

### State Management (Zustand)

The application uses 6 Zustand stores:

| Store                     | Purpose                            |
|---------------------------|------------------------------------|
| `useCanvasCameraStore`     | Camera position (x, y) and scale   |
| `useThreadStore`          | Thread CRUD operations             |
| `useMessageStore`         | Message CRUD operations            |
| `useCurrToolStore`        | Current active tool                |
| `useCurrentSelectedStore` | Currently selected item            |
| `useSideBarOpenStore`     | Sidebar visibility                 |

## Architecture

### Camera System

The canvas uses a camera metaphor for navigation:

```text
CanvasCamera {
  tx: number  // Translation X (camera offset)
  ty: number  // Translation Y (camera offset)
  scale: number  // Zoom level (1 = 100%)
}
```

**Coordinate Systems**:

- **Screen Coordinates**: Pixels on screen (clientX, clientY)
- **World Coordinates**: Position in infinite canvas

**Transformations**:

```typescript
// Screen to World
worldX = (screenX - tx) / scale
worldY = (screenY - ty) / scale

// World to Screen
screenX = worldX * scale + tx
screenY = worldY * scale + ty
```

### Animation

Camera movements use `requestAnimationFrame` with cubic easing:

```typescript
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const ANIMATION_DURATION = 400; // ms
```

### ID Generation

Unique IDs are generated with timestamp and random suffix:

```typescript
// Format: {prefix}-{timestamp36}-{random10}
"thread-2026abc123-def4567890"
"message-2026def456-abc1234567"
```

## Styling

The project uses TailwindCSS with a custom color scheme:

- **Primary**: Amber/Orange (brand color)
- **Accent**: Blue (interactive elements)
- **Background**: Clean white/gray scale
- **Typography**: Geist Sans/Mono fonts

### Design Patterns

- Component-scoped styles via Tailwind classes
- CSS transforms for canvas positioning
- CSS transitions for UI animations
- Backdrop blur for overlay elements

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Considerations

- Zustand for efficient state updates
- React 19 concurrent features
- requestAnimationFrame for smooth animations
- Pointer events for better touch support
- CSS transforms for hardware acceleration

## Future Enhancements

- Undo/Redo history
- Real-time collaboration
- Object dragging and positioning
- Image/video upload
- Export functionality
- Keyboard shortcuts
- Touch gesture support

## License

Private project.
