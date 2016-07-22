jest.unmock('../lib/app.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../lib/app.js';

describe('App', () => {

  it('should have passing tests', () => {
    // Render skeleton component into the document
    const app = TestUtils.renderIntoDocument(
      <App />
    );

    const appNode = ReactDOM.findDOMNode(app);

    // Verify the rendered content
    expect(appNode.textContent).toEqual('Hello, world!');
  });

});
