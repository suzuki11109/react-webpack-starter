import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';

render(
  <Greeter hello="react" />,
  document.getElementById('root')
);
