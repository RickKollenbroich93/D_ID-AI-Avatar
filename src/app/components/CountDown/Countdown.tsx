import React from 'react';
import classes from './Countdown.module.css';

type CountdownProps = {
  days: number;
  hours: number;
  minutes: number;
  windowSize: number;
};

function Countdown({
  windowSize,
  days,
  hours,
  minutes,
}: CountdownProps): JSX.Element {
  return (
    <div
      className={windowSize >= 500 ? classes.container : classes.containerMob}
    >
      <div
        className={
          windowSize >= 900 ? classes.countContainer : classes.countContainerMob
        }
      >
        <p className={classes.number}>{days < 10 ? '0' + days : days}</p>
        <p className={classes.text}>Tage</p>
      </div>
      {windowSize >= 900 && <p className={classes.number}>:</p>}
      <div
        className={
          windowSize >= 900 ? classes.countContainer : classes.countContainerMob
        }
      >
        <p className={classes.number}>{hours < 10 ? '0' + hours : hours}</p>
        <p className={classes.text}>Stunden</p>
      </div>
      {windowSize >= 900 && <p className={classes.number}>:</p>}
      <div
        className={
          windowSize >= 900 ? classes.countContainer : classes.countContainerMob
        }
      >
        <p className={classes.number}>
          {minutes < 10 ? '0' + minutes : minutes}
        </p>
        <p className={classes.text}>Minuten</p>
      </div>
    </div>
  );
}

export default Countdown;
