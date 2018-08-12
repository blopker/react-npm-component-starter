import React from 'react';
import { render } from 'react-dom';
import Link from '../../lib/Link';
import './styles.css';

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component, hello </h1>
      <br/>
      <Link page='http://www.facebook.com'>Evil</Link>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
