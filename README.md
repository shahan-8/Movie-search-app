# Movie Search App

A movie search application built with React. Search for a movie title, retrieve matching results from a movie data API, and display the results in a reusable movie list.

## Features

- Search movies by title
- Fetch search results asynchronously
- Display matching movies in a list
- Show a friendly message when no movies are found
- Separate search form and movie-list components
- API request logic kept in a dedicated module

## Tech Stack

- React 19
- JavaScript (JSX)
- Vite
- External movie search API

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/shahan-8/Movie-search-app.git
cd Movie-search-app
npm install
npm run dev
```

Open the local URL printed by Vite.

## API Configuration

The app uses the movie search function in `src/api.js`. Check that file for the API provider and required key configuration before running the application. If the provider requires a private API key, store it in a local environment file and configure it in your deployment environment. Do not commit private keys.

## Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run lint` | Run Oxlint |
| `npm run preview` | Preview the production build |

## Project Structure

```text
Movie-search-app/
├── src/
│   ├── components/   # Search form and movie list components
│   ├── api.js        # Movie search request
│   ├── App.jsx       # Search state and app composition
│   └── main.jsx      # React entry point
├── public/
└── package.json
```

## What This Project Practices

- React component composition
- State management with `useState`
- Passing callbacks through props
- Async/await and API requests
- Conditional rendering and empty states

## Author

Built by [Shahan](https://github.com/shahan-8).