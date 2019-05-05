/**
 * @description Generate random phone numbers
 * @param {number} num
 * @returns {Array}
 */
export const getRandomPhoneNumbers = (num) => {
  const generatedNumbers = [];

  for (let i = 0; i < num; i++) {
    const randomNumber = Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
    generatedNumbers.push(`0${randomNumber}`);
  }

  return generatedNumbers;
}

/**
 * @description Returns maximum number from an array
 * @param {array} phoneNumbers
 * @returns {number}
 */
export const getMaximumPhoneNumbers = (phoneNumbers) => {
  const maxPhoneNumber = Math.max(...phoneNumbers)
  return maxPhoneNumber;
}

/**
 * @description Returns minumum number from an array
 * @param {array} phoneNumbers
 * @returns {number}
 */
export const getMinimumPhoneNumbers = (phoneNumbers) => {
  const minPhoneNumber = Math.min(...phoneNumbers)
  return minPhoneNumber;
}

/**
 * @description Returns phone numbers in ascending order
 * @param {array} phoneNumbers
 * @returns {array}
 */
export const sortAscending = (phoneNumbers) => {
  const ascendingFn = (a,b) => a-b;

  const ascendingPhoneNumbers = phoneNumbers.sort(ascendingFn);
  return ascendingPhoneNumbers;
}

/**
 * @description Returns phone numbers in desscending order
 * @param {array} phoneNumbers
 * @returns {array}
 */
export const sortDescending = (phoneNumbers) => {
  const descendingFn = (a,b) => b-a;

  const descendingPhoneNumbers = phoneNumbers.sort(descendingFn);
  return descendingPhoneNumbers;
}
