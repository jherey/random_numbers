import React, { Fragment } from 'react';

import NumberGenerator from '../NumberGenerator';
import { Header } from '../Header';

import './home.scss';

const Home = () => (
  <Fragment>
    <Header />
    <NumberGenerator />
  </Fragment>
);

export default Home;