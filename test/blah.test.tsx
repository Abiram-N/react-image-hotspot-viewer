import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ImageHotspotViewer } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageHotspotViewer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
