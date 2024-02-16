import React from 'react';
import classes from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.linkContainer}>
        <a className={classes.link}>Link</a>
        <a className={classes.link}>link</a>
      </div>
      <div>
        <a className={classes.impressum}>Impressum</a>
      </div>
    </div>
  );
}

export default Footer;
