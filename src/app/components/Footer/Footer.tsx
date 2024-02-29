import React from 'react';
import classes from './Footer.module.css';
import HeartIcon from './../../assets/icons/Heart';
import CameraIcon from '../../assets/icons/Camera';

type FooterProps = {
  windowSize: number;
};

function Footer({ windowSize }: FooterProps): JSX.Element {
  return (
    <div className={classes.container}>
      <div
        className={
          windowSize >= 900 ? classes.linkContainer : classes.linkContainerMob
        }
      >
        <div className={classes.linkWrapper}>
          <HeartIcon />
          <a href="https://www.brennraum.de/" className={classes.link}>
            brennraum.de
          </a>
        </div>
        {windowSize >= 900 && (
          <div className={classes.linkWrapper}>
            <CameraIcon />
            <a
              href="https://www.instagram.com/original.lovegin/?hl=de"
              className={classes.link}
            >
              original.lovegin
            </a>
          </div>
        )}
      </div>
      <div>
        <a
          className={
            windowSize >= 900 ? classes.impressum : classes.impressumMob
          }
        >
          Impressum
        </a>
      </div>
    </div>
  );
}

export default Footer;
