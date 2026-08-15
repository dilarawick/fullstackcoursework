# Full Stack Coursework

This repository contains full-stack coursework projects, including **Syncboard** - a modern task management application.

## Projects

### Syncboard

A responsive kanban-style task management application built with React and Vite.

**Features:**
- Kanban board with multiple columns
- Task creation and management
- Task filtering and search
- Detailed task views
- Responsive design
- Real-time updates with React Context

**Tech Stack:**
- Frontend: React, Vite, JavaScript/JSX
- State Management: React Context API & useReducer
- Routing: React Router
- Styling: CSS

**Getting Started:**

Navigate to the `syncboard-client` directory:

```bash
cd syncboard-client
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

**Project Structure:**
```
syncboard-client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── board/          # Board-specific components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # General UI components
│   ├── pages/              # Page components
│   ├── context/            # React Context providers
│   ├── reducers/           # State reducers
│   ├── constants/          # App constants
│   └── data/               # Mock data
└── public/                 # Static assets
```

## How to Contribute

1. Navigate to the project directory
2. Install dependencies
3. Make your changes
4. Test thoroughly before pushing