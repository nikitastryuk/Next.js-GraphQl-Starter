# Next.js GraphQl Starter

### Tech stack

1. [Next.js](https://nextjs.org)
2. [Prisma](https://prisma.io)
3. [Nexus](https://nexusjs.org)
4. [GraphQL Codegen](https://www.graphql-code-generator.com/)
5. [Urql](https://formidable.com/open-source/urql/)
6. [Apollo-server-micro](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-micro)
7. Eslint + Prettier
8. Lint-staged + Simple-git-hooks

### Initial setup

1. **Copy `.env.example` to `.env`** and fill out the `.env` file with your environment variables:

```sh
cp .env.example .env
```

1. **Install Docker** by following their [installation instructions for your OS](https://docs.docker.com/get-docker/). Docker is used to start the local development database.

2. **Install the dependencies** with `npm`:

```sh
npm install
```

3. **Start the local development database** with `docker-compose`:

```sh
docker-compose up
```

4. **Migrate your local development database** to the base schema:

```sh
npx prisma migrate dev
```

### Development workflow

1. **Start the development database** with:

```sh
docker-compose up
```

2. **Start the development process**, which also runs all the necessary code generators:

```sh
npm run dev
```

Now you should have project running locally and should be able to visit http://localhost:3000 🎉

### Scripts

The **three most important commands** you'll run frequently during development:

- `npm run generate`: Generates the Prisma client ([docs](https://www.prisma.io/docs/concepts/components/prisma-client)), which Nexus uses and generates the GraphQL schema ([docs](https://nexusjs.org/docs/guides/generated-artifacts)), which GraphQL Codegen uses and generates the urql hooks ([docs](https://graphql-code-generator.com/docs/plugins/typescript-urql)). Run this whenever you change the database schema, GraphQL schema or GraphQL queries.

- `npm run prisma:migrate`: Creates migration files from your Prisma schema changes and runs those migrations on your local dev db ([docs](https://www.prisma.io/docs/concepts/components/prisma-migrate)). Run this whenever you change your database schema.

- `npm run prisma:studio`: Starts [Prisma Studio](https://prisma.io/studio) on `localhost:5555` where you can inspect your local development database.
