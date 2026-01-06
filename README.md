# Cyber-Grooming Awareness Website

A modern, responsive educational website about Cyber-Grooming with an integrated interactive learning environment built with React + TypeScript.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer, PageLayout)
│   ├── learning/        # Learning modules (Quiz, Chat, Decision Game, Warning Signs)
│   └── ui/              # Reusable UI components (Button, Card, Alert, etc.)
├── data/                # Data files (quiz questions, scenarios, etc.)
├── pages/               # Page components
├── types/               # TypeScript interfaces and models
├── App.tsx              # Main app component with routing
└── main.tsx             # Entry point
```

## Features

### Pages
- **Home** - Landing page with hero section and overview
- **Cyber-Grooming** - Educational content about cyber-grooming
- **Warning Signs** - Comprehensive list of red flags
- **Protection** - Strategies for children, parents, and guardians
- **Learning Area** - Interactive learning modules
- **Get Help** - Resources and emergency contacts
- **Contact** - Contact form and information

### Interactive Learning Modules
- **Quiz Module** - Multiple-choice questions with feedback
- **Chat Simulator** - Realistic chat scenarios with selectable responses
- **Decision Game** - Scenario-based choices with scoring
- **Warning Signs Training** - Learn to identify warning signs

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Design System

### Colors
- **Primary**: #1D4ED8 (Royal Blue)
- **Secondary**: #2DD4BF (Mint)
- **Background**: #F8FAFC
- **Danger**: #EF4444

### Typography
- System font stack for optimal performance
- Clear hierarchy with bold headings
- High contrast for accessibility

## TypeScript Models

All data structures are fully typed:
- `QuizQuestion` - Quiz question structure
- `ChatScenario` - Chat simulation data
- `DecisionScenario` - Decision game scenarios
- `WarningSign` - Warning sign information

## Component Architecture

- **Reusable UI Components**: Button, Card, Alert, QuizCard, ChatBubble
- **Layout Components**: Navbar, Footer, PageLayout
- **Learning Modules**: Self-contained interactive components
- **Pages**: Route-based page components

## Development

The project uses:
- TypeScript for type safety
- React Hooks for state management
- Tailwind CSS for styling
- React Router for navigation

## Notes

- All emergency numbers are placeholders (110, 116 111)
- No backend required - all state is client-side
- Prepared for easy extension with additional modules or features
# Jeremy-Allenbach-m219-cypergromming
