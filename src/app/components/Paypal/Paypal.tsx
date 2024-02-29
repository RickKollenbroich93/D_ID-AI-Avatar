import React from 'react';
import classes from './Paypal.module.css';

function PayPal(): JSX.Element {
  return (
    <div className={classes.modalContainerOuter}>
      <div className={classes.modalContainer}>
        <p>Some selling shit</p>
        <button>close</button>
      </div>
    </div>
  );
}

export default PayPal;
