import React, { useEffect, useState } from 'react';
import { differenceInDays, getHours, getMinutes } from 'date-fns';
import classes from './Header.module.css';
import Countdown from '../CountDown/Countdown';
import HeaderUnderText from './HeaderUnderText';

type HeaderProps = {
  windowSize: number;
};

function Header({ windowSize }: HeaderProps): JSX.Element {
  const [time, setTime] = useState(Date.now());
  console.log(time);
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
      {windowSize >= 900 && <div className={classes.imgContainerLogo}></div>}

      <h1 className={classes.title}>
        ORIGINAL {windowSize <= 700 && <br />} Klappi-Treffen
      </h1>

      <Countdown
        windowSize={windowSize}
        days={days}
        hours={hours}
        minutes={minutes}
      />
      <HeaderUnderText windowSize={windowSize} />
    </div>
  );
}

export default Header;
