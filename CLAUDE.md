# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev` (runs Vite at http://localhost:5173)
- Build for production: `npm run build` (outputs to `dist/`)
- Preview production build: `npm run preview`
- Lint code: `npm run lint` (uses ESLint)

## Project Structure

- `src/`: Contains all source code
  - `main.jsx`: Entry point, renders the App component into the DOM
  - `App.jsx`: Main application component containing state management and coordinating components
  - `index.css`: Global styles
  - `App.css`: Component-specific styles
  - `assets/`: Static assets (e.g., SVG logos)
  - `components/`: Reusable UI components
    - `Summary.jsx`: Displays income, expenses, and balance statistics
    - `TransactionForm.jsx`: Form for adding new transactions
    - `TransactionList.jsx`: Displays transaction list with filtering capabilities

## Architecture Overview

This is a single-page React application built with Vite. The application follows a component-based architecture where state is managed in the `App.jsx` component, and UI logic is separated into reusable components.

Key features:
- Transaction list with income and expense tracking
- Form to add new transactions
- Filtering by type (income/expense) and category
- Summary statistics (total income, total expenses, balance)

Data flow:
1. State variables in `App.jsx` track transactions, form inputs, and filters
2. The `handleSubmit` function adds new transactions to state
3. State is passed down as props to child components:
   - `Summary` receives transactions to calculate and display statistics
   - `TransactionForm` receives form state and submit handler for adding transactions
   - `TransactionList` receives transactions and filter state to display filtered lists
4. User interactions in child components trigger callbacks that update state in `App.jsx`

Styling is approached with CSS modules (though currently using plain CSS files). The application has no backend persistence—transactions are stored in memory and reset on page reload.

## Notes

- The application intentionally contains bugs and messy quality as part of a learning exercise.
- No testing framework is configured; if tests are added, they would typically be run with `npm test` (script would need to be added to package.json).
- ESLint is configured with React plugin for linting.