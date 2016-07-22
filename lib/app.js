import React from 'react';
import reactCSS from 'reactcss';

export default class Skeleton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello, world!',
    };
  }

  render() {
    const styles = reactCSS({
      default: {
        card: {
          backgroundColor: '#03A9F4',
          boxShadow: '0 2px 4px rgba(0,0,0,.15)',
        },
      },
    });

    return (
      <div style={styles.card}>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
