import React from 'react';

const Results = ({
  numbers,
  minGeneratedNumber,
  maxGeneratedNumber,
  sortPhoneNumbers,
  fileDownload
}) => (
  <div>
    <select onChange={sortPhoneNumbers}>
      <option defaultValue='sortby'>Sort by</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
    <button onClick={fileDownload}>Download</button>
    <h3>Total Phone Numbers Generated: {numbers.length}</h3>
    <h4>Min Generated Number: {`0${minGeneratedNumber}`}</h4>
    <h4>Max Generated Number: {`0${maxGeneratedNumber}`}</h4>
    {
      numbers.map((number, index) =>
        <li key={index}>{number}</li>
      )
    }
  </div>
);

export default Results;
