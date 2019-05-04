import React, { Component } from 'react';

import Form from '../Form';

class NumberGenerator extends Component{
  constructor(props){
    super(props);
    this.state = {
      numbers: [],
    }
  }

  render() {
    return (
      <div>
        <h2>Main content!</h2>
        <Form />
      </div>
    );
  }
}

export default NumberGenerator;