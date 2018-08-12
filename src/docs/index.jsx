import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../lib';
import Link from '../../lib/Link';
import './styles.css';

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component, hello </h1>
      <MyComponent color='brown'>Wow what a button</MyComponent>
      <br/>
      <Link page='http://www.facebook.com'>Evil</Link>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
