import React, { Fragment } from 'react';

import NumberGenerator from '../NumberGenerator';
import { Header } from '../Header';
import Footer from '../Footer';

import './home.scss';

const Home = () => (
  <Fragment>
    <Header />
    <NumberGenerator />
    <Footer />
  </Fragment>
);

export default Home;
