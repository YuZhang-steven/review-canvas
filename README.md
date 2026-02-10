
A canvas-based review and annotation app built with Next.js, React, and Zustand. It provides an infinite canvas workspace where users can create comment threads and manage tasks.

## Features Implemented

### Canvas

- Infinite canvas with smooth pan and zoom controls

### Comment Threads

- Create a comment pin anywhere on the canvas by clicking while using the Comment tool
- Add / delete / edit comments in a thread
- Convert a comment into a To-Do item or a text item
- Add tags to a comment

### Comment Dashboard

- View all comments in a dashboard with filters (All, Open, Resolved)
- Click a comment to move the camera to the corresponding thread pin

## Getting Started

Try the live demo on Vercel:  
[review-canvas-lemon.vercel.app](https://review-canvas-lemon.vercel.app)

### 1. Clone the repository

```bash
git clone https://github.com/YuZhang-steven/review-canvas
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
└── app/                           # Next.js App Router pages and layout
    ├── (workspace)/
    │   ├── CanvasWorkspace.tsx    # Main workspace container
    │   ├── components/            # Main components
    │   │   ├── SideBar.tsx        # Sidebar layout
    │   │   ├── SideBarContent.tsx # Sidebar content switch
    │   │   ├── ToolBar.tsx        # Toolbar layout
    │   │   ├── Viewport.tsx       # Camera + viewport wrapper
    │   │   ├── World.tsx          # Canvas content container
    │   │   ├── canvasObject/      # Image / geometry objects on the canvas
    │   │   ├── messageDashBoard/  # Comment overview components
    │   │   ├── thread/            # Thread-related components
    │   │   └── toolbar/           # Toolbar-related components
    │   ├── hooks/                 # React hooks
    │   ├── lib/                   # Shared utilities and helpers
    │   ├── state/                 # Global state (Zustand stores)
    │   ├── type/                  # TypeScript type definitions
    │   └── testObjects/           # Three test objects on the canvas
```

### Inifinity Canvas

- Implements a world coordinate system on top of viewport coordinates.
- All canvas elements are rendered inside a World container. Camera pan/zoom is achieved by translating and scaling this container.

### Comment Thread

- A thread is a group that contains individual comments.
- Uses two Zustand stores to manage threads and messages separately.
- Adding a comment automatically binds it to a thread.

### Side Bar

- The sidebar works as a dynamic detail viewer.
- When no thread is selected, it shows an overview of all comments with Open/Resolved filters.
- When a thread is selected, it lists all comments in that thread and supports basic editing.
