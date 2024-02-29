import type { ReactNode } from 'react';
import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  active: boolean;
  onClick?: () => void;
};
function Button({ children, active, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={active ? false : true}
      className={active ? classes.button : classes.buttonInactive}
    >
      {children}
    </button>
  );
}

export default Button;
