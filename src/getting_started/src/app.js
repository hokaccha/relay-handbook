import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

class AppRoute extends Relay.Route {
  static get routeName() {
    return 'AppRoute';
  }

  static get queries() {
    return {
      app: () => Relay.QL`query { app }`,
    };
  }
}

class AppComponent extends React.Component {
  render() {
    console.log(this.props.relay);
    return <div>{this.props.app.text}</div>;
  }
}

let App = Relay.createContainer(AppComponent, {
  fragments: {
    app: () => Relay.QL`fragment on App { text }`,
  },
});

ReactDOM.render(
  <Relay.RootContainer Component={App} route={new AppRoute()} />,
  document.getElementById('app')
);
