import React from 'react';
import { mount } from 'enzyme';

import Form from '.';

describe('Form component', () => {
  const props = {
    values: {},
    touched: {},
    errors: { number: true },
    isSubmitting: false,
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  }

  it('should render the component successfully', () => {
    const wrapper = mount(<Form { ...props } />);

    expect(wrapper.props().errors.number).toEqual(props.errors.number);
    expect(wrapper.props().isSubmitting).toEqual(props.isSubmitting);
    expect(wrapper.props().touched).toEqual({});
  });

  it('should submit form', (done) => {
    const getPhoneNumbers = jest.fn().mockResolvedValueOnce({});
    const wrapper = mount(<Form getPhoneNumbers={getPhoneNumbers} />);

    const setSubmitting = jest.fn();
    const resetForm = jest.fn();
    const values = {
      number: 'abc',
    };

    // Submit form
    wrapper.find('Formik').instance().props.onSubmit(values, { setSubmitting, resetForm });

    setTimeout(() => {
      expect(getPhoneNumbers).toBeCalled();
      expect(resetForm).toHaveBeenCalled();
      expect(setSubmitting).toHaveBeenCalledWith(false);
      done();
    }, 500);
  });
});
