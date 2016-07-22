jest.unmock('../lib/app.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Skeleton from '../lib/app.js';

describe('Skeleton', () => {

  it('should have passing tests', () => {
    // Render skeleton component into the document
    const skeleton = TestUtils.renderIntoDocument(
      <Skeleton />
    );

    const skeletonNode = ReactDOM.findDOMNode(skeleton);

    // Verify the rendered content
    expect(skeletonNode.textContent).toEqual('Hello, world!');
  });

});
