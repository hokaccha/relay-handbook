import graphqlHTTP from 'express-graphql';
import express from 'express';
import schema from './data/schema';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.babel';
import './scripts/print_schema';

let app = express();

let compiler = webpack(webpackConfig);
let webpackOpts = {
  stats: {
    colors: true,
    version: false,
    hash: false,
    chunkModules: false,
  },
};

app.use(webpackMiddleware(compiler, webpackOpts));
app.use('/graphql', graphqlHTTP({ schema, pretty: true }));
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('listen: http://localhost:3000');
});
