import React from 'react';
import classes from './FotoBox.module.css';

function FotoBox(): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>Title</h1>
      <div className={classes.gallery}>Pictures</div>
    </div>
  );
}

export default FotoBox;
