# Prisma series

GraphQL server for series querying built with [new prisma 2](https://www.prisma.io/), [graphql-yoga](https://github.com/prisma-labs/graphql-yoga) and [nexus](https://nexus.js.org/).

## Run project

1. Install dependencies -> `yarn install`
2. Create _.env_ file in _prisma_ folder
3. Add **DATABASE_URL** key to _.env_ to your **PostgreSQL** database
4. Apply migrations toy your empty db -> `yarn migrate:up`
5. Seed database -> `yarn seed`
6. Run server -> `yarn dev`

## Deploy to Zeit now

1. Log in **Zeit** platform with **now CLI** -> `now login`
2. Add **environment variable** to now -> `now secrets add db_url "$DATABASE_URL"`
3. Deploy -> `now`