import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';

import './main.css';

render(
  <Greeter hello="react" />,
  document.getElementById('app')
);
