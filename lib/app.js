import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Skeleton from 'react-skeleton-boilerplate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Test app....',
    };
  }

  render() {
    return (
      <div>
        <Skeleton />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
