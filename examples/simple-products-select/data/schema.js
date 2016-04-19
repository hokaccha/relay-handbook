import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
} from 'graphql';

import {
} from 'graphql-relay';

let products = {
  1: { id: 1, name: 'foo', price: 1000, description: 'foo item' },
  2: { id: 2, name: 'bar', price: 200, description: 'bar item' },
  3: { id: 3, name: 'baz', price: 50000, description: 'baz item' },
};

let productType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

let appType = new GraphQLObjectType({
  name: 'App',
  fields: {
    product: {
      type: productType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (context, args) => {
        return products[args.id];
      },
    },
  },
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      app: {
        type: appType,
        resolve: () => ({}),
      },
    },
  }),
});

export default schema;
