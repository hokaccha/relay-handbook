```
$ npm install
$ BABEL_ENV=node node_modules/.bin/babel-node scripts/print_schema.js
$ BABEL_ENV=browser node_modules/.bin/browserify -t babelify src/app.js -o public/bundle.js
$ BABEL_ENV=node node_modules/.bin/babel-node server.js
$ open http://localhost:3000/
```
