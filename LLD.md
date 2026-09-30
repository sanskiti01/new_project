# LLD — BugLab Concepts Project

## 1. Frontend Components

### `App.jsx`

Root component. Composes the concept panels and dashboard.

### `PageShell.jsx`

Provides the main page structure and accepts children.

### `Panel.jsx`

Reusable bordered content container.

### `StatCard.jsx`

Displays a metric using props.

### `BugCard.jsx`

Displays bug information using props.

### `CompositionDemo.jsx`

Demonstrates nested component composition.

```text
PageShell
 ├── Panel
 │    ├── StatCard
 │    └── StatCard
 └── Panel
      └── BugCard
```

## 2. Event Loop Implementation

`client/src/concepts/eventLoop.js`

The experiment performs:

1. synchronous push
2. Promise microtask
3. second synchronous push
4. timer callback

The result is returned as an ordered array.

`EventLoopDemo.jsx` renders this array.

## 3. Hoisting Implementation

`client/src/concepts/hoisting.js`

The module demonstrates:

- a function declaration callable before its declaration
- a `var` declaration whose variable exists before assignment
- explanations for why `let` and `const` are not safely readable before initialization

The demo avoids intentionally crashing the React application.

## 4. Promises vs Callbacks

`client/src/concepts/asyncPatterns.js`

Two APIs represent the same logical operation.

### Callback version

```text
findBugWithCallback(id, callback)
             ↓
setTimeout
             ↓
callback(error, bug)
```

### Promise version

```text
findBugWithPromise(id)
             ↓
setTimeout
             ↓
resolve/reject
```

This makes the control-flow difference observable.

## 5. Mongo Models

### User

Fields:

- `name`
- `email`
- `role`
- timestamps

### Bug

Fields:

- `title`
- `description`
- `difficulty`
- `category`
- `tags`
- `reproduction.steps`
- `reproduction.expected`
- `reproduction.actual`
- `author`
- timestamps

Indexes:

- category + difficulty
- tags

### Attempt

Fields:

- `user`
- `bug`
- `status`
- `timeSpentSeconds`
- `notes`
- timestamp

References are used for user/bug relationships while reproduction data is embedded because it belongs naturally to the bug document.

## 6. PostgreSQL Schema

### users

- id
- name
- email

### bugs

- id
- title
- difficulty

### attempts

- id
- user_id
- bug_id
- status
- time_spent_seconds
- created_at

Foreign keys enforce relationships.

## 7. SQL JOIN Details

### INNER JOIN

Returns only users with matching attempts.

### LEFT JOIN

Returns all users, including users without attempts.

### Three-table JOIN

Connects:

```text
users → attempts → bugs
```

### Aggregation

Groups attempts by bug and calculates attempt count and average time.

## 8. API Endpoints

### `GET /api/health`

Checks server status.

### `GET /api/bugs`

Reads bugs from MongoDB.

### `GET /api/concepts/event-loop`

Returns backend event-loop demonstration data.

### `GET /api/concepts/sql-joins`

Runs the multi-table PostgreSQL JOIN example.

## 9. Error Handling

Services throw errors. Controllers catch errors and send a consistent JSON response.

## 10. Data Validation

Mongoose validates required fields and enum values.

PostgreSQL validates:

- foreign keys
- non-null constraints
- status checks

## 11. Concept-to-Viva Evidence

| Concept | File to point at | What to explain |
|---|---|---|
| Event loop | `EventLoopDemo.jsx` | synchronous stack, microtasks, macrotasks |
| Hoisting | `hoisting.js` | declarations vs initialization |
| Promises/callbacks | `asyncPatterns.js` | two asynchronous control-flow styles |
| Composition | `CompositionDemo.jsx` | children/props and reusable components |
| Mongo schema | `Bug.js` | embedded data, references, validation, indexes |
| SQL JOINs | `joins.sql` | how related relational rows are combined |
