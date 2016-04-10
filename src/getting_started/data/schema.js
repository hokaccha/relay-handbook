import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';

let appType = new GraphQLObjectType({
  name: 'App',
  fields: {
    text: { type: GraphQLString },
  },
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      app: {
        type: appType,
        resolve: () => ({ text: 'Hello Relay!' }),
      },
    },
  }),
});

export default schema;
