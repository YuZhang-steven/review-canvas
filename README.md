# Review Canvas

A canvas-based review and annotation application built with Next.js, React, and Zustand. This application provides an infinite canvas workspace where users can create comment threads, manage tasks.

## Features Implemented

### Canvas

- infinite canvas with
- smooth zoom and pan controls

### Comment Threads

- Create comment pin at any location on the canvas by clicking with the comment tool
- Add/Delete/Edit comments in a thread
- Change comment to a To-Do item, or text item
- Add tags to a comment

### Comment DashBoard

- View all comments in a dashboard with filtering capabilities (All, Open, Resolved)
- Click a comment and move camera to the thread pin

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **State Management**: Zustand 5.0.11
- **Icons**: Lucide React
- **Runtime**: React 19.2.3 / React DOM 19.2.3

## Project Structure

```text
review-canvas/
├── app/
│   ├── (worksspace)/
│   │   ├── CancasWorkapace.tsx        # Main workspace container
│   │   ├── components/
│   │   │   ├── SideBar.tsx            # Collapsible sidebar (right side)
│   │   │   ├── SideBarContent.tsx     # Sidebar content router
│   │   │   ├── ToolBar.tsx            # Bottom toolbar with tool buttons
│   │   │   ├── Viewport.tsx           # Canvas viewport wrapper
│   │   │   ├── World.tsx              # Infinite canvas world container
│   │   │   ├── canvasObject/
│   │   │   │   ├── CanvasObject.tsx         # Object wrapper with position
│   │   │   │   ├── CanvasObjectBase.tsx     # Bounding box visualizer
│   │   │   │   └── ObjectCollection.tsx     # Collection of test objects
│   │   │   ├── messageDashBoard/
│   │   │   │   ├── MessageDashBoard.tsx     # All comments dashboard
│   │   │   │   ├── MessageList.tsx           # Filtered message list
│   │   │   │   ├── MessageListCard.tsx      # Individual message card
│   │   │   │   ├── FilterBar.tsx            # Filter tabs (All/Open/Resolved)
│   │   │   │   └── FilterBarBtn.tsx        # Filter button component
│   │   │   ├── thread/
│   │   │   │   ├── CommentThread.tsx        # Pin/marker on canvas
│   │   │   │   ├── ThreadCollection.tsx     # All threads collection
│   │   │   │   ├── ThreadContent.tsx        # Thread detail view in sidebar
│   │   │   │   ├── FocusThreadButton.tsx    # Camera focus button
│   │   │   │   ├── AddMessageCard.tsx       # Message input form
│   │   │   │   ├── MessageCardWrapper.tsx   # Message card container
│   │   │   │   ├── MessageCardWraper.tsx    # Alternative wrapper
│   │   │   │   └── messageCard/
│   │   │   │       ├── MessageCard.tsx      # Main message card
│   │   │   │       ├── MsgText.tsx          # Text message display
│   │   │   │       ├── MsgTextEdit.tsx      # Text editing component
│   │   │   │       ├── MsgImage.tsx         # Image message display
│   │   │   │       ├── MsgTodo.tsx          # Todo message display
│   │   │   │       ├── MsgTagsHead.tsx      # Tags management header
│   │   │   │       └── MsgCardFoot.tsx      # Message card footer
│   │   │   └── toolbar/
│   │   │       ├── ToolBar.tsx              # Bottom toolbar container
│   │   │       ├── selectToolButton.tsx     # Select tool button
│   │   │       └── commentToolButton.tsx    # Comment tool button
│   │   ├── hooks/
│   │   │   ├── useViewPortControls.ts       # Viewport input handlers
│   │   │   ├── useLeftClickHandle.ts        # Left click handler
│   │   │   ├── useRightClickHandle.ts      # Right click pan handler
│   │   │   └── toolClick/
│   │   │       └── useCommentToolClick.ts   # Comment placement logic
│   │   ├── lib/
│   │   │   ├── cameraHelper.ts              # Camera zoom/focus helpers
│   │   │   ├── viewScreenCoordTrans.ts      # Screen/world coordinate conversion
│   │   │   ├── dom.ts                       # DOM utilities
│   │   │   └── generateId.ts                # ID generation utilities
│   │   ├── state/
│   │   │   ├── useCanvasCameraStore.ts      # Camera position/scale state
│   │   │   ├── useThreadStore.ts            # Thread data management
│   │   │   ├── useMessageStore.ts           # Message data management
│   │   │   ├── useCurrToolStore.ts          # Current selected tool
│   │   │   ├── useCurrentSelectedStore.ts   # Currently selected item
│   │   │   └── useSideBarOpenStore.ts       # Sidebar open state
│   │   ├── type/
│   │   │   ├── CanvasCamera.ts              # Camera type definitions
│   │   │   └── Thread.ts                    # Thread type definitions
│   │   ├── testObjects/
│   │   │   ├── Circle.tsx                   # Test circle object
│   │   │   ├── TestImage.tsx               # Test image object
│   │   │   └── Triangles.tsx               # Test triangle object
│   │   └── lib/
│   │       └── generateId.ts               # ID generation utilities
│   ├── globals.css                          # Global styles (Tailwind)
│   ├── layout.tsx                           # Root layout
│   └── page.tsx                             # Home page
├── next.config.ts                           # Next.js configuration
├── postcss.config.mjs                       # PostCSS configuration
├── tailwind.config.ts                       # Tailwind configuration
├── tsconfig.json                            # TypeScript configuration
├── package.json                             # Dependencies
└── README.md                                # This file
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

| Store                     | Purpose                             |
|---------------------------|-------------------------------------|
| `useCanvasCameraStore`     | Camera position (x, y) and scale    |
| `useThreadStore`          | Thread CRUD operations              |
| `useMessageStore`         | Message CRUD operations             |
| `useCurrToolStore`        | Current active tool                 |
| `useCurrentSelectedStore` | Currently selected item            |
| `useSideBarOpenStore`     | Sidebar visibility                  |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

### Environment Variables

No environment variables required for local development.

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

The project uses TailwindCSS 4 with a custom color scheme:

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
