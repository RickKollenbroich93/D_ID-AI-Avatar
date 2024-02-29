import React from 'react';
import classes from './HeaderUnderText.module.css';

type HeaderUnderTextProps = {
  windowSize: number;
};

function HeaderUnderText({ windowSize }: HeaderUnderTextProps): JSX.Element {
  return (
    <div className={classes.container}>
      <p className={windowSize >= 900 ? classes.text : classes.textMob}>
        Samstag 3. August 2024 in Heusenstamm.
      </p>
    </div>
  );
}

export default HeaderUnderText;
