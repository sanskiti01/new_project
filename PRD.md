# PRD — BugLab Concepts Project

## 1. Product Overview

**Product name:** BugLab

BugLab is a debugging practice platform where learners inspect buggy JavaScript/full-stack behavior, run controlled demonstrations, and understand why the behavior occurs.

This version is intentionally scoped to make six Project Score concepts observable in one real project.

## 2. Problem Statement

Students often know the names of JavaScript, React, MongoDB, and SQL concepts but struggle to explain where those concepts appear in a real application.

BugLab solves this by connecting each concept to an executable feature rather than keeping it as isolated theory.

## 3. Target Users

- Beginner software-development students
- Developers practicing debugging
- Students preparing for a technical viva

## 4. Goals

1. Demonstrate JavaScript Event Loop behavior.
2. Demonstrate JavaScript hoisting.
3. Compare callback and Promise-based asynchronous APIs.
4. Demonstrate React component composition.
5. Demonstrate MongoDB schema modeling.
6. Demonstrate SQL JOINs.
7. Keep each concept traceable to a concrete file.
8. Provide PRD, HLD, and LLD documentation.

## 5. Non-goals

- Production-scale authentication
- Payments
- Real-time multiplayer debugging
- AI-generated solutions
- Cloud deployment automation

## 6. Functional Requirements

### FR-01 Event Loop Lab

The user can run an event-loop experiment and see the order in which:

- synchronous statements execute
- Promise microtasks execute
- timer callbacks execute

### FR-02 Hoisting Lab

The user can inspect examples showing:

- function declaration hoisting
- `var` declaration hoisting
- `let`/`const` temporal-dead-zone behavior conceptually

### FR-03 Async Patterns Lab

The user can execute the same simulated bug lookup through:

- callback style
- Promise style

The UI reports success/error state.

### FR-04 Composition Dashboard

The application uses reusable React components composed into a page:

- `PageShell`
- `Panel`
- `StatCard`
- `BugCard`
- `Button`

### FR-05 Mongo Bug Model

The backend stores bugs using a Mongoose schema containing:

- title
- description
- difficulty
- category
- tags
- nested reproduction steps
- expected result
- actual result
- author reference
- timestamps

### FR-06 SQL JOIN Lab

The backend can query relational data using:

- INNER JOIN
- LEFT JOIN
- multi-table JOIN
- GROUP BY aggregation

## 7. Non-functional Requirements

- Clear separation of frontend/backend responsibilities
- Validation at data boundaries
- Reusable React components
- Database indexes for common Mongo queries
- Parameterized PostgreSQL queries
- Environment variables for secrets/configuration
- Documentation for viva/demo traceability

## 8. User Flow

1. User opens BugLab.
2. Dashboard displays concept cards.
3. User selects a concept.
4. User runs the demonstration.
5. Frontend displays the result.
6. User can inspect the related source file during development/viva.
7. Backend demonstrations can be invoked through API endpoints.

## 9. Acceptance Criteria

### Event Loop

Given the event-loop demo is run, the displayed result must show synchronous work before Promise microtasks and timer callbacks.

### Hoisting

The demo must distinguish function declaration hoisting from `var`, `let`, and `const` behavior.

### Promises vs Callbacks

Both asynchronous styles must return the same logical bug data while exposing different control-flow APIs.

### React Composition

The dashboard must be built from multiple reusable components rather than one monolithic component.

### Mongo

The Bug model must validate required fields and represent nested and referenced data.

### SQL JOINs

The JOIN service must return relational information across users, bugs, and attempts.

## 10. Success Measurement

For a viva/demo, the project is successful when each of the six concepts can be:

- located in a named file
- executed or inspected
- explained in simple terms
- connected to a real product feature

## 11. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Student can explain theory but not implementation | Keep concept-to-file mapping in README/HLD/LLD |
| Database unavailable during demo | Frontend concepts remain executable without databases |
| JOIN query misunderstood | Keep separate readable SQL examples |
| React composition hidden by abstraction | Use simple named components |
