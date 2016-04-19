import React from 'react';

export default class ProductSelect extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onSelect(1)}>1</button>
        <button onClick={() => this.props.onSelect(2)}>2</button>
        <button onClick={() => this.props.onSelect(3)}>3</button>
      </div>
    );
  }
}
