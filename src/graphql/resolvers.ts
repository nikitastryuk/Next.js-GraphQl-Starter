// _parent: the return value of the resolver for this field's parent. Since it's not being used in the resolver, you are prefixing with an underscore.

// _args: an object that contains all GraphQL arguments provided for a field. For example, when executing query { link(id: "4") }, the args object passed to the user resolver is { "id": "4" }. Since it's not being used in the resolver, you are prefixing with an underscore.

// The context argument is helpful for passing things that any resolver might need, like authentication scope, database connections, and custom fetch functions. Here we are using it to access Prisma Client.

// TODO: Types
export const resolvers = {
  Query: {
    links: (_parent: any, _args: any, ctx: any) => {
      return ctx.prisma.link.findMany();
    },
  },
};
