import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

class AppRoute extends Relay.Route {
  static routeName = 'AppRoute';

  static queries = {
    app: () => Relay.QL`query { app }`,
  };
}

class AppComponent extends React.Component {
  render() {
    return <div>{this.props.app.text}</div>;
  }
}

let AppContainer = Relay.createContainer(AppComponent, {
  fragments: {
    app: () => Relay.QL`fragment on App { text }`,
  },
});

ReactDOM.render(
  <Relay.RootContainer Component={AppContainer} route={new AppRoute()} />,
  document.getElementById('app')
);
