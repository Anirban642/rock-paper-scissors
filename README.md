# Rock Paper Scissors Game Documentation

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Game Logic](#game-logic)
- [Styling](#styling)
- [State Management](#state-management)
- [Usage](#usage)
- [Customization](#customization)
- [Browser Support](#browser-support)

## Overview

A modern, interactive Rock-Paper-Scissors game built with React and styled with Tailwind CSS. The game features a clean glassmorphism design, smooth animations, and classic gameplay mechanics where players compete against an AI opponent.

## Features

### Core Gameplay
- **Classic Rules**: Rock beats Scissors, Scissors beats Paper, Paper beats Rock
- **AI Opponent**: Computer makes random choices for fair gameplay
- **Score Tracking**: Real-time score updates for both player and computer
- **Game Results**: Clear win/lose/tie notifications

### User Interface
- **Modern Design**: Glassmorphism effect with gradient backgrounds
- **Responsive Layout**: Works on desktop and mobile devices
- **Smooth Animations**: Hover effects, scaling, and transitions
- **Visual Feedback**: Emoji-based choice representation
- **Loading States**: Visual indication during computer's turn

### Interactive Elements
- **Choice Buttons**: Three interactive buttons for Rock, Paper, Scissors
- **Reset Functionality**: Start a new game anytime
- **Disabled States**: Prevents multiple clicks during processing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Create Vite React Project**
```bash
npm create vite@latest rock-paper-scissors -- --template react
cd rock-paper-scissors
```

2. **Install Dependencies**
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
```

3. **Initialize Tailwind CSS**
```bash
npx tailwindcss init -p
```

4. **Configure Tailwind** (tailwind.config.js)
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. **Add Tailwind Directives** (src/index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. **Replace App Component** with the Rock-Paper-Scissors component

7. **Start Development Server**
```bash
npm run dev
```

## Project Structure

```
rock-paper-scissors/
├── public/
├── src/
│   ├── components/
│   │   └── RockPaperScissors.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Component Architecture

### Main Component: `RockPaperScissors`

The game is built as a single React functional component using hooks for state management.

#### State Variables
- `playerChoice`: Current player's choice (string)
- `computerChoice`: Computer's choice (string)
- `playerScore`: Player's current score (number)
- `computerScore`: Computer's current score (number)
- `result`: Game result message (string)
- `isPlaying`: Game processing state (boolean)

#### Key Functions
- `getRandomChoice()`: Generates random computer choice
- `determineWinner()`: Implements game logic
- `playGame()`: Main game flow handler
- `resetGame()`: Resets all game state
- `getChoiceDisplay()`: Maps choice names to emojis

## Game Logic

### Choice System
```javascript
const choices = [
  { name: 'rock', emoji: '🪨', label: 'Rock' },
  { name: 'paper', emoji: '📄', label: 'Paper' },
  { name: 'scissors', emoji: '✂️', label: 'Scissors' }
];
```

### Win Conditions
```javascript
const winConditions = {
  rock: 'scissors',      // Rock crushes Scissors
  paper: 'rock',         // Paper covers Rock
  scissors: 'paper'      // Scissors cuts Paper
};
```

### Game Flow
1. Player selects choice
2. Game enters "playing" state (prevents multiple inputs)
3. Computer generates random choice after 1-second delay
4. Winner is determined using win conditions
5. Scores are updated
6. Result is displayed
7. Game returns to ready state

## Styling

### Design System

#### Colors
- **Background**: Purple to blue gradient (`from-purple-900 via-blue-900 to-indigo-900`)
- **Glass Effect**: White with 10% opacity (`bg-white/10`)
- **Borders**: White with 20% opacity (`border-white/20`)
- **Text**: White primary, gray-300 secondary

#### Layout
- **Container**: Centered with max-width constraint
- **Cards**: Rounded corners with backdrop blur
- **Grid**: 3-column layout for choice buttons
- **Flexbox**: Used for score display and choice comparison

#### Animations
- **Hover Effects**: Scale and background color changes
- **Active States**: Scale down effect on click
- **Transitions**: Smooth 300ms duration for all interactions

### Responsive Design
- Uses Tailwind's responsive utilities
- Flexible container sizing
- Touch-friendly button sizes

## State Management

### React Hooks Used
- `useState`: All game state management
- No external state management library needed

### State Flow
```
User Action → State Update → Re-render → UI Update
```

### Key State Patterns
- **Optimistic Updates**: Immediate UI feedback
- **Async Operations**: Delayed computer choice for suspense
- **Derived State**: Result calculated from choices
- **Reset Pattern**: All states return to initial values

## Usage

### Basic Gameplay
1. Click any of the three choice buttons (Rock, Paper, Scissors)
2. Wait for computer to make its choice
3. View the result and updated scores
4. Continue playing or reset the game

### Button States
- **Normal**: Available for selection
- **Hover**: Visual feedback on mouse over
- **Active**: Pressed state animation
- **Disabled**: During computer's turn

### Score System
- Win: +1 point to player
- Lose: +1 point to computer  
- Tie: No points awarded

## Customization

### Styling Modifications
```javascript
// Change gradient colors
className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900"

// Modify glass effect opacity
className="bg-white/20 backdrop-blur-lg"

// Adjust animations
className="transition-all duration-500 hover:scale-110"
```

### Game Logic Extensions
```javascript
// Add new choices
const choices = [
  // ... existing choices
  { name: 'lizard', emoji: '🦎', label: 'Lizard' },
  { name: 'spock', emoji: '🖖', label: 'Spock' }
];

// Update win conditions
const winConditions = {
  // ... existing rules
  lizard: ['paper', 'spock'],
  spock: ['scissors', 'rock']
};
```

### Visual Customization
- **Emojis**: Change choice emojis in the choices array
- **Colors**: Modify Tailwind classes for different themes
- **Layout**: Adjust grid columns or flexbox arrangements
- **Typography**: Update text sizes and font weights

## Browser Support

### Minimum Requirements
- Modern browsers supporting ES6+
- CSS Grid and Flexbox support
- CSS Custom Properties support

### Tested Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Support
- iOS Safari 14+
- Chrome Mobile 90+
- Responsive design works on all screen sizes

## Performance Considerations

### Optimization Features
- **Single Component**: Minimal re-renders
- **Local State**: No prop drilling
- **Efficient Updates**: Only necessary state changes
- **CSS Transitions**: Hardware-accelerated animations

### Best Practices Implemented
- **Debounced Actions**: Prevents rapid clicking
- **Conditional Rendering**: Reduces DOM updates
- **Semantic HTML**: Accessible button elements
- **Clean Code**: Readable and maintainable structure

## Accessibility

### Features Included
- **Semantic HTML**: Proper button elements
- **Keyboard Navigation**: Tab through interactive elements
- **Visual Feedback**: Clear state changes
- **Color Contrast**: Sufficient contrast ratios

### Potential Improvements
- ARIA labels for screen readers
- Keyboard shortcuts for choices
- High contrast mode support
- Reduced motion preferences

---

**Version**: 1.0.0  
**Last Updated**: June 2025  
**License**: MIT
