import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Test app....',
    };
  }

  render() {
    return (
      <p>{this.state.text}</p>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
