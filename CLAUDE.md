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
  - `App.jsx`: Main application component containing all state and logic
  - `index.css`: Global styles
  - `App.css`: Component-specific styles
  - `assets/`: Static assets (e.g., SVG logos)

## Architecture Overview

This is a single-page React application built with Vite. The application state is managed entirely within the `App.jsx` component using React hooks (`useState`). 

Key features:
- Transaction list with income and expense tracking
- Form to add new transactions
- Filtering by type (income/expense) and category
- Summary statistics (total income, total expenses, balance)

Data flow:
1. State variables in `App.jsx` track transactions, form inputs, and filters
2. The `handleSubmit` function adds new transactions to state
3. Filtered transactions are derived from state and displayed in a table
4. Summary cards calculate totals from the full transaction list

Styling is approached with CSS modules (though currently using plain CSS files). The application has no backend persistence—transactions are stored in memory and reset on page reload.

## Notes

- The application intentionally contains bugs and messy quality as part of a learning exercise.
- No testing framework is configured; if tests are added, they would typically be run with `npm test` (script would need to be added to package.json).
- ESLint is configured with React plugin for linting.