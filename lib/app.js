import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Skeleton from 'react-skeleton-boilerplate';

class App extends Component {
  render() {
    return <Skeleton />
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
