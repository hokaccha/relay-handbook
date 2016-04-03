import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';

import {
} from 'graphql-relay';

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      text: {
        type: GraphQLString,
        resolve: () => 'Hello relay!',
      },
    },
  }),
});

export default schema;
