# My Project Webapp

Full‑stack web application with a Node/Express backend (Prisma + SQLite) and a React‑TS frontend built with Vite.

## Scripts

### Backend
- `npm run dev --prefix backend` – start development server with hot‑reload (ts-node-dev).
- `npm run build --prefix backend` – compile TypeScript.
- `npm start --prefix backend` – run compiled server.

### Frontend
- `npm run dev --prefix frontend` – start Vite dev server.
- `npm run build --prefix frontend` – production build.
- `npm run preview --prefix frontend` – preview production build.

## Database
Prisma ORM with SQLite (dev.db). Run migrations with `npx prisma migrate dev`.

## License
MIT
