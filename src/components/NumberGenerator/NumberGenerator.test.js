import React from 'react';
import { shallow, mount } from 'enzyme';

import NumberGenerator from '.';

describe('NumberGenerator component', () => {
  const numbers = ['0980507445', '0157012758', '0638520348', '0840913822'];

  const numbersPerPage = ['0980507445', '0157012758', '0638520348', '0840913822', '0619094330',
  '0781934851', '0716378174', '0968826250', '0148827183', '0448976592', '0956501930', '0308665418',
  '0764993906', '0576423299', '0749957126', '0958817661', '0602637574', '0973130220', '0713835961',
  '0879188213', '0980507445', '0157012758', '0638520348', '0840913822'];

  it('should render the component successfully', () => {
    const wrapper = shallow(<NumberGenerator />);

    expect(wrapper.find('Form').length).toBe(1);
  });

  it('should render the Results component', () => {
    const wrapper = mount(<NumberGenerator />);
    wrapper.setState({
      numbers,
    });

    expect(wrapper.find('Results').length).toBe(1);
  });

  it('it should call getPhoneNumbers function', () => {
    const wrapper = mount(<NumberGenerator />);
    const generatedNumbers = jest.spyOn(wrapper.instance(), 'getPhoneNumbers');
    wrapper.instance().getPhoneNumbers(numbers);

    expect(generatedNumbers).toBeCalledWith(numbers);
    expect(wrapper.state().numbers.length).toBe(4);
    expect(wrapper.state().maxGeneratedNumber).toBe(980507445);
    expect(wrapper.state().minGeneratedNumber).toBe(157012758);
  });

  it('should call sortPhoneNumbers and sort by ascending order', () => {
    const wrapper = mount(<NumberGenerator />);
    wrapper.setState({
      numbers,
    });
    const event = {
      target: { name: "sortBy", value: 'ascending'}
    }
    const sortNumbers = jest.spyOn(wrapper.instance(), 'sortPhoneNumbers');
    wrapper.instance().sortPhoneNumbers(event);

    expect(sortNumbers).toBeCalledWith(event);
  });

  it('should call sortPhoneNumbers and sort by descending order', () => {
    const wrapper = mount(<NumberGenerator />);
    wrapper.setState({
      numbers,
    });
    const event = {
      target: { name: "sortBy", value: 'descending'}
    }
    const sortNumbers = jest.spyOn(wrapper.instance(), 'sortPhoneNumbers');
    wrapper.instance().sortPhoneNumbers(event);

    expect(sortNumbers).toBeCalledWith(event);
  });

  it('should call onPage function', () => {
    const wrapper = mount(<NumberGenerator />);
    const page = {
      selected: 1
    }
    wrapper.setState({
      numbers
    })
    const onPageChange = jest.spyOn(wrapper.instance(), 'onPageChange');
    wrapper.instance().onPageChange(page);

    expect(wrapper.state().currentPage).toBe(2);
    expect(onPageChange).toBeCalledWith(page);
  });
});
