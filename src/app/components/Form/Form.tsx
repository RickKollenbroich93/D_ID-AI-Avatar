import React from 'react';
import classes from './Form.module.css';
import Button from '../Button/Button';

function Form(): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>Title</h1>
        <h2 className={classes.titleDiscription}>Title discription</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren.
        </p>
        <p className={classes.highlight}>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur
        </p>
      </div>
      <div className={classes.contentForm}>
        <form className={classes.form}>
          <div className={classes.inputWrapper}>
            <div>
              <label>Name</label>
              <br />
              <input className={classes.input} id="name" type="text" />
            </div>
            <div>
              <label>Email</label>
              <br />
              <input className={classes.input} id="email" type="text" />
            </div>

            <div className={classes.inputCheck}>
              <input id="email" type="checkbox" />
              <br />
              <label>Lorem ipsum dele quest de fiora desto megan peris</label>
            </div>
          </div>
          <div>
            <Button>Anmeldung</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
