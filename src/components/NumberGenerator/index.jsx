import React, { Component } from 'react';
import FileDownload from 'js-file-download';

import Form from '../Form';
import Results from '../Results';
import Paginate from '../Paginate';

import {
  getMaximumPhoneNumbers, getMinimumPhoneNumbers, sortAscending, sortDescending,
} from '../../actions/phoneNumberActions';

class NumberGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      numbers: [],
      numbersPerPage: [],
      maxGeneratedNumber: null,
      minGeneratedNumber: null,
      currentPage: 1,
      perPage: 20,
      totalPages: 2,
    }
  }

  getPhoneNumbers = (phoneNumbers) => {
    const { currentPage, perPage } = this.state;
    const minGeneratedNumber = getMinimumPhoneNumbers(phoneNumbers);
    const maxGeneratedNumber = getMaximumPhoneNumbers(phoneNumbers);
    const offset = (currentPage - 1) * perPage;
    const totalPages = Math.ceil(phoneNumbers.length / perPage);
    const numbersPerPage = phoneNumbers.slice(offset).slice(0, perPage);

    this.setState({
      numbers: phoneNumbers,
      numbersPerPage,
      minGeneratedNumber,
      maxGeneratedNumber,
      totalPages,
    });
  }

  sortPhoneNumbers = ({ target: { value } }) =>{
    const { numbersPerPage } = this.state;
    const sortedNumbers = value === 'ascending' ? sortAscending(numbersPerPage) : sortDescending(numbersPerPage);

    this.setState({
      numbersPerPage: sortedNumbers,
    });
  }

  fileDownload = () => {
    const { numbers } = this.state;

    FileDownload(numbers, 'numbers.csv');
  }

  onPageChange= (page) => {
    const { numbers,  perPage } = this.state;
    const currentPage = page.selected + 1;
    const offset = (currentPage - 1) * perPage;
    const numbersPerPage = numbers.slice(offset).slice(0, perPage);

    this.setState({
      numbersPerPage,
      currentPage
    });
  }

  render() {
    const {
      numbers, minGeneratedNumber, maxGeneratedNumber, perPage, currentPage, totalPages, numbersPerPage,
    } = this.state;

    return (
      <div className='form'>
        <Form getPhoneNumbers={this.getPhoneNumbers} />
        {
          numbersPerPage.length > 0 &&
            <Results
              numbersPerPage={numbersPerPage}
              numbers={numbers}
              sortPhoneNumbers={this.sortPhoneNumbers}
              fileDownload={this.fileDownload}
              minGeneratedNumber={minGeneratedNumber}
              maxGeneratedNumber={maxGeneratedNumber}
            />
        }
        {
          numbers.length > 20 &&
            <Paginate
              pageChange={this.onPageChange}
              perPage={perPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
        }
      </div>
    );
  }
}

export default NumberGenerator;
