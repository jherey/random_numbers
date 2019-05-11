import React from 'react';
import { shallow } from 'enzyme';

import Home from '.';

describe('Home component', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('Fragment').length).toBe(1);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('NumberGenerator').length).toBe(1);
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
