import React from 'react';
import Relay from 'react-relay';
import ProductSelect from './product_select';

class App extends React.Component {
  handleSelect(id) {
    this.props.relay.setVariables({ id });
  }

  render() {
    let { name, price, description } = this.props.app.product;
    return (
      <div>
        <ProductSelect onSelect={id => this.handleSelect(id)} />

        <h1>{name}</h1>
        <div>{price}円</div>
        <div>{description}</div>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  initialVariables: {
    id: 1,
  },
  fragments: {
    app: () => Relay.QL`
      fragment on App {
        product(id: $id) {
          name,
          price,
          description,
        }
      }
    `,
  },
});
