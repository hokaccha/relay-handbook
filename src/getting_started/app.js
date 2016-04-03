import graphqlHTTP from 'express-graphql';
import express from 'express';
import schema from './schema/schema';

let app = express();

app.use('/graphql', graphqlHTTP({ schema, pretty: true }));
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('listen: http://localhost:3000');
});
