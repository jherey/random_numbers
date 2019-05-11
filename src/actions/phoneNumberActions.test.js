import {
  getRandomPhoneNumbers, getMaximumPhoneNumbers, getMinimumPhoneNumbers,
  sortAscending, sortDescending,
} from './phoneNumberActions';

describe('Actions test', () => {
  let numbers;

  it('getRandomPhoneNumbers function', () => {
    numbers = getRandomPhoneNumbers(20);

    expect(numbers.length).toEqual(20);
  });

  it('getMaximumPhoneNumbers function', () => {
    const maxNumber = getMaximumPhoneNumbers(numbers);

    expect(maxNumber).toEqual(Math.max(...numbers));
  });

  it('getMinimumPhoneNumbers function', () => {
    const minNumber = getMinimumPhoneNumbers(numbers);

    expect(minNumber).toEqual(Math.min(...numbers));
  });

  it('sortAscending function', () => {
    const ascendingPhoneNumbers = sortAscending(numbers);

    expect(ascendingPhoneNumbers).toHaveLength(20);
  });

  it('sortDescending function', () => {
    const descendingPhoneNumbers = sortDescending(numbers);

    expect(descendingPhoneNumbers).toHaveLength(20);
  });
});
