# GitHub Repository Finder

A responsive React + TypeScript application that searches for a GitHub user by
username, displays their profile, and lists their public repositories with
pagination and a detail modal for each one.

## Motivation

This project was built as a technical challenge focused on practicing core
front-end concepts with React and TypeScript: consuming a public REST API,
client-side routing, form validation, and building a responsive
interface from a Figma design spec. The challenge requirements were:

- A search screen where the user types a GitHub username.
- On submit, fetch data from the GitHub REST API
  (`/users/{username}` and `/users/{username}/repos`, in this application) and, if the user
  exists, navigate to a profile page showing their avatar, name and bio.
- List the user's repositories as cards (name + description).
- Clicking a repository card opens a modal with more detail: visibility,
  link to the project (`html_url`), description, and language.
- The search field cannot be submitted empty, a loading state is shown
  during the request, and a clear error message is shown if the user is
  not found.
- The layout must be responsive down to tablet width.

## Features

- GitHub username search with empty-field validation
- Loading indicators for both the search and the profile page
- Error toast when a username cannot be found
- User profile view (avatar, name, bio)
- Repository cards with paginated, responsive display (adapts the
  number of cards per page to the screen size)
- Repository detail modal (visibility, link, description, language),
  closable via the close button or `Esc`.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool and dev server
- [React Router](https://reactrouter.com/) — client-side routing
- [Axios](https://axios-http.com/) — HTTP client for the GitHub API
- [React Hook Form](https://react-hook-form.com/) — search form handling and validation
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- ESLint + Prettier (with `simple-import-sort` and `prettier-plugin-tailwindcss`) for linting and formatting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/Ravii-873/Desafio-Final-M-dulo-II---TypeScript-e-React---Wtech-GitHub-Search.git
cd Desafio-Final-M-dulo-II---TypeScript-e-React---Wtech-GitHub-Search
npm install
```

### Running locally

```bash
npm run dev
```

This starts the Vite dev server (by default at `http://localhost:5173`).

### Other scripts

```bash
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

## Project Structure

```
src/
├── assets/           # images and static assets
├── components/
│   ├── Global/       # shared components (e.g. Spinner)
│   ├── Main/         # search page components (Form, Header, error toast)
│   ├── Repositories/ # repo cards, pagination, and detail modal
│   └── User/         # profile page components
├── contexts/         # React Context providers (e.g. loading state)
├── hooks/            # custom hooks (e.g. useMediaQuery)
├── pages/            # route-level pages (Main, User)
├── services/         # API client and GitHub service functions
└── App.tsx           # routes definition
```

## API Reference

This project consumes the public, unauthenticated
[GitHub REST API](https://docs.github.com/en/rest):

- `GET https://api.github.com/users/{username}`
- `GET https://api.github.com/users/{username}/repos`

## Design

The UI was implemented based on a provided Figma specification covering the
search, loading, profile, and repository detail states.

## Deliverable

This project was submitted as coursework and is not intended to be an
actively maintained open-source package — it exists to demonstrate the
required skills and to evolve the developer's front-end habilities.
