# lucca-analytics
scripts to synchronize data fetched from Scaleway (postgres dump) to a postgres database to be accessible on a metabase

## Crons

Scalingo is responsible to run crons in this repo (defined in `cron.json`). 

Full documentation is available [here](https://doc.scalingo.com/platform/app/task-scheduling/scalingo-scheduler).

## Commands

Check crons runs logs:

```bash
scalingo --app lucca-analytics cron-tasks
```

