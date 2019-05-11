import React from 'react';
import { mount } from 'enzyme';

import Results from '.';
import {
  getRandomPhoneNumbers, getMinimumPhoneNumbers, getMaximumPhoneNumbers,
} from '../../actions/phoneNumberActions';

describe('Results component', () => {
  const numbers = getRandomPhoneNumbers(5);

  const props = {
    numbers,
    minGeneratedNumber: getMinimumPhoneNumbers(numbers),
    maxGeneratedNumber: getMaximumPhoneNumbers(numbers),
  }

  it('should render the component successfully', () => {
    const wrapper = mount(<Results { ...props } />);

    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(2);
  });

  it('should render results', () => {
    const wrapper = mount(<Results { ...props } />);

    expect(wrapper.props().maxGeneratedNumber).toEqual(props.maxGeneratedNumber);
    expect(wrapper.props().minGeneratedNumber).toEqual(props.minGeneratedNumber);
  });
});
