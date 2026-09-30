# PostgreSQL JOIN Lab

Run `schema.sql` first and then `joins.sql`.

The JOIN examples intentionally use three related tables:

```text
users ──< attempts >── bugs
```

- `INNER JOIN` shows matching relationships.
- `LEFT JOIN` preserves users even when no attempt exists.
- The aggregation query groups attempts by bug.
