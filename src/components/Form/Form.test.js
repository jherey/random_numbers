import React from 'react';
import { mount } from 'enzyme';

import Form from '.';

describe('Form component', () => {
  it('should render the component successfully', () => {
    const props = {
      values: {},
      touched: {},
      errors: { number: true },
      isSubmitting: false,
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
    }

    const wrapper = mount(<Form { ...props } />);

    expect(wrapper.props().errors.number).toEqual(props.errors.number);
    expect(wrapper.props().isSubmitting).toEqual(props.isSubmitting);
    expect(wrapper.props().touched).toEqual({});
  });
});
