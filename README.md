# football-data-v2
Node js service for football-data.org V2 rest api

Very simple node package for interacting with the new football-data.org rest api

For more information about the methods responses and parameters, look at [football-data.org docs](https://www.football-data.org/documentation/quickstart)

## Basic usage
```
const myApiToken = '123412341234';
const footballData = new FootballData(myApiToken);
footballData.competitions().then(res => {
  console.log({res})
}).catch(e => {
  console.log({e})
})
```

## Available Methods
- **competitions({area} = {})** - List all competitions.
  - area - Will list only competitions within this area
- **competition(competitionId)** - Get data for the specified competitionId
- **teams(competitionId, {stage} = {})** - Get all the teams in the specified competition
  - stage - will get all the teams that appears in the specified stage
- **standings(competitionId)** - Get the standings for the specified competitionId
- **competitionMatches(competitionId, {dateFrom, dateTo, stage, status, matchday, group} = {})** - Get all matches for the specified competitionId
  - dateFrom - get only matches after at this date. e.g. 2018-06-22
  - dateTo - get only matches until at this date. e.g. 2018-06-22
  - stage - get only matches in this stage
  - status - get only matches in this status. Available values: [SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED]
  - matchday - get only matches in this match day
  - group - get only matches in this group
-  **matches({competitions, dateFrom, dateTo, status} = {})** - Get all matches that apply the passed filters
  - competitions - An array of competition Ids
  - dateFrom - get only matches after at this date. e.g. 2018-06-22
  - dateTo - get only matches until at this date. e.g. 2018-06-22
  - status - get only matches in this status. Available values: [SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED]
- **match(id)** - Get all data for the specified match id
- **teamMatches(id,{dateFrom, dateTo, status, venue} = {})** - Get all matches for the specified team id.
  - dateFrom - get only matches after at this date. e.g. 2018-06-22
  - dateTo - get only matches until at this date. e.g. 2018-06-22
  - status - get only matches in this status. Available values: [SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED]
  - venue - get only matches in this venue. Available values: HOME | AWAY
- **team(id)** - Get data for the specified team id
- **areas(id)** - Get data for the specified area id.
