import React from 'react';

export default class Skeleton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello, world!',
    };
  }

  render() {
    return (
      <p>{this.state.text}</p>
    );
  }
}
