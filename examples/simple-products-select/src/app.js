import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import App from './components/app';

class AppRoute extends Relay.Route {
  static routeName = 'AppRoute';

  static queries = {
    app: () => Relay.QL`query { app }`,
  };
}

ReactDOM.render(
  <Relay.RootContainer Component={App} route={new AppRoute()} />,
  document.getElementById('app')
);
