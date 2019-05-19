import React from 'react';

import './results.scss';

const Results = ({
  numbersPerPage,
  numbers,
  minGeneratedNumber,
  maxGeneratedNumber,
  sortPhoneNumbers,
  fileDownload
}) => (
  <div id='results'>
    <hr/>
    <div className="row">
      <div className="styled-select black rounded">
        <select onChange={sortPhoneNumbers}>
          <option defaultValue='sortby'>Sort by</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <button
        className='download'
        onClick={fileDownload}
      >
        Download
      </button>

    </div>
    <div className='row'>
      <div className="card">
        <h3 className='text'>Total Phone Numbers Generated: <span id='figure'>{numbers.length}</span></h3>
      </div>
      <div className="card">
        <h3 className='text'>Min Generated Number: <span id='figure'>{`0${minGeneratedNumber}`}</span></h3>
      </div>
      <div className="card">
        <h3 className='text'>Max Generated Number: <span id='figure'>{`0${maxGeneratedNumber}`}</span></h3>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Generated Number</th>
        </tr>
      </thead>
      <tbody>
        {
          numbersPerPage.length > 0 && numbersPerPage.map((number, index) =>
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{number}</td>
          </tr>)
        }
      </tbody>
    </table>
  </div>
);

export default Results;
