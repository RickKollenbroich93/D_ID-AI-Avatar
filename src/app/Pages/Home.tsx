import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import classes from './Home.module.css';
import TextBox from '../components/TextBox/TextBox';
import Form from '../components/Form/Form';
import FotoBox from '../components/FotoBox/FotoBox';

function Home(): JSX.Element {
  return (
    <div className={classes.container}>
      <Header />
      <FotoBox />
      <Form />
      <TextBox />
      <Footer />
    </div>
  );
}

export default Home;
