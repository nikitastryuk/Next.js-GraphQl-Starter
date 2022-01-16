import { join } from 'path';

import { connectionPlugin, makeSchema } from 'nexus';

import * as types from './types';

// types: an array which will include all of the different object types.

// outputs: an object where you specify the location of the generated types of your GraphQL API and the schema which is written in SDL. Here the types will be generated in a file located in the node_modules directory and the schema will be generated in the /graphql directory.

// contextType: an object for including the context type. You are importing the exported Context type, defined in /graphql/context.ts file.
export const schema = makeSchema({
  types,
  plugins: [connectionPlugin()],
  outputs: {
    typegen: join(
      process.cwd(),
      'node_modules',
      '@types',
      'nexus-typegen',
      'index.d.ts',
    ),
    schema: join(process.cwd(), 'src/graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'src/graphql', 'context.ts'),
  },
});
