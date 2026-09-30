# BugLab — Concepts Implementation Project

A full-stack debugging practice project intentionally designed to demonstrate the six concepts shown in the Project Score screenshot:

1. JavaScript — Event Loop
2. JavaScript — Hoisting
3. JavaScript — Promises vs Callbacks
4. React Component Composition
5. Schema Modeling (Mongo)
6. SQL JOINS

It also includes the requested architecture/product documents:

- `PRD.md` — Product Requirements Document
- `HLD.md` — High-Level Design
- `LLD.md` — Low-Level Design

## Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- MongoDB: Mongoose for bug/document modeling
- PostgreSQL: `pg` for relational data and JOIN demonstrations
- JavaScript ES modules

## Project structure

```text
BugLab-Concepts-Project/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── concepts/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── sql/
│   │   ├── schema.sql
│   │   └── joins.sql
│   └── package.json
├── PRD.md
├── HLD.md
├── LLD.md
└── .gitignore
```

## Setup

### 1. Start PostgreSQL

Create a database called `buglab`.

Run:

```bash
psql -U postgres -d buglab -f server/sql/schema.sql
```

Then load sample relational data:

```bash
psql -U postgres -d buglab -f server/sql/joins.sql
```

### 2. Start MongoDB

Run MongoDB locally or use MongoDB Atlas.

### 3. Backend

```bash
cd server
npm install
copy .env.example .env
npm run dev
```

Linux/macOS:

```bash
cp .env.example .env
npm install
npm run dev
```

### 4. Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

## Environment variables

See `server/.env.example`.

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/buglab
DATABASE_URL=postgresql://postgres:password@localhost:5432/buglab
CLIENT_URL=http://localhost:5173
```

## Where each concept is implemented

### 1. Event Loop

Frontend:

- `client/src/concepts/EventLoopDemo.jsx`
- `client/src/concepts/eventLoop.js`

The demo schedules synchronous work, Promise microtasks, and `setTimeout` macrotasks and displays the actual execution order.

Backend:

- `server/src/services/eventLoopService.js`

### 2. Hoisting

Frontend:

- `client/src/concepts/HoistingDemo.jsx`
- `client/src/concepts/hoisting.js`

The demo safely illustrates function declaration hoisting and explains the different behavior of `var`, `let`, and `const`.

### 3. Promises vs Callbacks

Frontend:

- `client/src/concepts/AsyncPatternsDemo.jsx`
- `client/src/concepts/asyncPatterns.js`

Backend:

- `server/src/services/bugService.js`

The same bug lookup is represented with both callback and Promise-based APIs.

### 4. React Component Composition

Frontend:

- `client/src/components/`
- `client/src/components/CompositionDemo.jsx`

The dashboard is assembled from small reusable components instead of one large component.

### 5. Mongo Schema Modeling

Backend:

- `server/src/models/Bug.js`
- `server/src/models/User.js`
- `server/src/models/Attempt.js`

The `Bug` model demonstrates nested metadata, references, enums, indexes, timestamps, validation, and relationships.

### 6. SQL JOINs

PostgreSQL:

- `server/sql/schema.sql`
- `server/sql/joins.sql`
- `server/src/services/sqlJoinService.js`
- `server/src/routes/conceptRoutes.js`

The project includes INNER JOIN, LEFT JOIN, multi-table JOIN, and aggregation examples.

## Viva-friendly evidence

You can explain the concepts without showing code:

- Event loop → `EventLoopDemo.jsx` and `eventLoop.js`
- Hoisting → `HoistingDemo.jsx` and `hoisting.js`
- Promises/callbacks → `AsyncPatternsDemo.jsx` and `asyncPatterns.js`
- Composition → `CompositionDemo.jsx` and reusable components under `components/`
- Mongo modeling → `Bug.js`, `User.js`, `Attempt.js`
- SQL JOINs → `joins.sql` and `sqlJoinService.js`

The three architecture documents explicitly map the implementation to these six Project Score concepts.
