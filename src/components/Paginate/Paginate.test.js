import React from 'react';
import { mount } from 'enzyme';

import Paginate from '.';

describe('Paginate component', () => {
  it('should render the component successfully', () => {
    const props = {
      pageChange: jest.fn(),
      perPage: 20,
      currentPage: 1,
      totalPages: 2,
    }

    const wrapper = mount(<Paginate { ...props } />);

    expect(wrapper.props().perPage).toEqual(props.perPage);
    expect(wrapper.props().currentPage).toEqual(props.currentPage);
    expect(wrapper.props().totalPages).toEqual(props.totalPages);
  });
});
