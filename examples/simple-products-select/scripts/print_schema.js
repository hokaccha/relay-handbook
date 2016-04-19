import fs from 'fs';
import path from 'path';
import { graphql, printSchema } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import schema from '../data/schema';

fs.writeFileSync(path.join(__dirname, '../data/schema.graphql'), printSchema(schema));
console.log('wrote: data/schema.graphql');

graphql(schema, introspectionQuery).then(result => {
  if (result.errors) return console.error(result.errors);
  fs.writeFileSync(path.join(__dirname, '../data/schema.json'), JSON.stringify(result, null, 2));
  console.log('wrote: data/schema.json');
});
