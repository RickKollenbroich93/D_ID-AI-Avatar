import React from 'react';
import classes from './Countdown.module.css';

type CountdownProps = {
  days: number;
  hours: number;
  minutes: number;
};

function Countdown({ days, hours, minutes }: CountdownProps): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.countContainer}>
        <p className={classes.number}>{days < 10 ? '0' + days : days}</p>
        <p className={classes.text}>Tage</p>
      </div>
      <p className={classes.number}>:</p>
      <div className={classes.countContainer}>
        <p className={classes.number}>{hours < 10 ? '0' + hours : hours}</p>
        <p className={classes.text}>Stunden</p>
      </div>
      <p className={classes.number}>:</p>
      <div className={classes.countContainer}>
        <p className={classes.number}>
          {minutes < 10 ? '0' + minutes : minutes}
        </p>
        <p className={classes.text}>Minuten</p>
      </div>
    </div>
  );
}

export default Countdown;
