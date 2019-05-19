import React from 'react';
import { shallow, mount } from 'enzyme';

import NumberGenerator from '.';

const numbers = ['0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822'];

const numbersPerPage = ['0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822',
  '0980507445', '0157012758', '0638520348', '0840913822'];

describe('NumberGenerator component', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<NumberGenerator />);

    expect(wrapper.find('Form').length).toBe(1);
  });

  it('should render the Results component', () => {
    const wrapper = shallow(<NumberGenerator />);
    wrapper.setState({ numbersPerPage });
    expect(wrapper.find('Results').length).toEqual(1);
  });

  it('it should call getPhoneNumbers function', () => {
    const wrapper = mount(<NumberGenerator />);
    const generatedNumbers = jest.spyOn(wrapper.instance(), 'getPhoneNumbers');
    wrapper.instance().getPhoneNumbers(numbers);

    expect(generatedNumbers).toBeCalledWith(numbers);
    expect(wrapper.state().numbers.length).toBe(24);
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
