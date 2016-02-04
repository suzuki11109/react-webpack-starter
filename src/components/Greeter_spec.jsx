import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Greeter from './Greeter';

describe('Greeting', () => {
  it('renders a greeting words', () => {
    const component = shallow(<Greeter hello="react" />);
    expect(component.find('div').text()).to.equal('react');
  });
});


