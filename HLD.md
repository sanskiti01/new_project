# HLD — BugLab Concepts Project

## 1. Architecture

```text
                    ┌──────────────────────┐
                    │      React UI        │
                    │      Vite App        │
                    └──────────┬───────────┘
                               │ HTTP
                               ▼
                    ┌──────────────────────┐
                    │   Express Backend    │
                    │      REST API        │
                    └───────┬────────┬─────┘
                            │        │
                ┌───────────┘        └────────────┐
                ▼                                  ▼
       ┌────────────────┐                ┌─────────────────┐
       │   MongoDB      │                │  PostgreSQL     │
       │  Mongoose      │                │  Relational DB  │
       └────────────────┘                └─────────────────┘
```

## 2. Architectural Responsibilities

### React

Responsible for:

- UI rendering
- component composition
- concept demonstrations
- user interaction
- displaying API results

### Express

Responsible for:

- HTTP routing
- request validation
- invoking services
- returning JSON responses

### MongoDB

Responsible for document-oriented bug data.

### PostgreSQL

Responsible for relational data used by users, bugs, and attempts.

## 3. Concept Architecture Mapping

| Project Score concept | Layer | Implementation |
|---|---|---|
| Event loop | Frontend + backend | `eventLoop.js`, `EventLoopDemo.jsx` |
| Hoisting | Frontend | `hoisting.js`, `HoistingDemo.jsx` |
| Promises vs callbacks | Frontend + backend | `asyncPatterns.js`, `bugService.js` |
| React composition | Frontend | `components/` |
| Mongo schema modeling | Database | Mongoose models |
| SQL JOINs | Database/backend | `joins.sql`, `sqlJoinService.js` |

## 4. Request Flow

### Mongo bug request

```text
Browser
  ↓
GET /api/bugs
  ↓
Express Route
  ↓
Bug Service
  ↓
Mongoose Bug Model
  ↓
MongoDB
  ↓
JSON response
  ↓
React
```

### SQL JOIN request

```text
Browser
  ↓
GET /api/concepts/sql-joins
  ↓
Express Route
  ↓
SQL Join Service
  ↓
PostgreSQL
  ↓
JOIN result
  ↓
JSON response
```

## 5. Data Architecture

### Mongo collections

- `users`
- `bugs`
- `attempts`

Mongo is used for flexible debugging content and nested reproduction information.

### PostgreSQL tables

- `users`
- `bugs`
- `attempts`

PostgreSQL is used where relational joins and aggregation are useful.

## 6. Security

- Database URLs are stored in environment variables.
- SQL values are parameterized.
- Mongoose validation is enabled.
- The API only exposes intended fields.
- Production deployment should add authentication, rate limiting, CORS restrictions, and HTTPS.

## 7. Scalability

The current project is intentionally educational, but the architecture supports future separation of:

- authentication service
- bug service
- attempt service
- analytics service

The frontend can consume these services through the same API boundary.

## 8. Error Handling

Backend errors are converted into JSON responses with:

- HTTP status
- error message

Frontend displays failures rather than silently ignoring them.

## 9. Deployment View

```text
User Browser
     │
     ▼
Frontend Host
     │
     ▼
API Host
 ┌───┴────┐
 ▼        ▼
Mongo    PostgreSQL
```

For a production deployment, MongoDB Atlas and a managed PostgreSQL service can replace local databases.
