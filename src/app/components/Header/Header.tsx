import React, { useEffect, useState } from 'react';
import { differenceInDays, getHours, getMinutes } from 'date-fns';
import classes from './Header.module.css';
import Countdown from '../CountDown/Countdown';
import HeaderUnderText from './HeaderUnderText';

function Header(): JSX.Element {
  const [time, setTime] = useState(Date.now());
  const date = Date();

  const days = differenceInDays(new Date(2024, 7, 3, 0, 0), new Date(date));
  const hours = 24 - getHours(new Date(date));
  const minutes = 60 - getMinutes(new Date(date));

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Title</h1>
      <Countdown days={days} hours={hours} minutes={minutes} />
      <HeaderUnderText />
    </div>
  );
}

export default Header;
