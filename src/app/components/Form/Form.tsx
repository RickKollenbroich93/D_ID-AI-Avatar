import React, { useEffect, useRef, useState } from 'react';
import classes from './Form.module.css';
import Button from '../Button/Button';
import type { WithId } from 'mongodb';

type FormProps = {
  windowSize: number;
};
export type newStarter = {
  name: string;
  email: string;
  startnumber: string;
};

declare const window: any;

function Form({ windowSize }: FormProps): JSX.Element {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [check, setCheck] = useState(false);
  const [wantPay, setWantPay] = useState(false);
  const [payed, setPayed] = useState(false);
  const [data, setData] = useState<WithId<Document>[]>();

  // Get data from DB
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // New starter
  const newStarter = {
    name: name,
    email: mail,
    startnumber: ((data?.length ?? 0) + 1).toString(),
  };
  // New starter will added here
  function addStarter(newStarter: newStarter) {
    fetch('/api/addStarter', {
      method: 'POST',
      body: JSON.stringify(newStarter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  //PayPal function
  const paypal = useRef(null);
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data: any, actions: any, err: any) => {
          console.log(data || err);
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                discription: 'Startnummer Klappi-Rennen',
                amount: {
                  currency_code: 'EUR',
                  value: 5.0,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          console.log(data);
          const order = await actions.order.capture();
          addStarter(newStarter);
          setPayed(true);
          console.log(order + 'Hat gezahlt');
        },
        onError: (err: string) => {
          console.log(err + 'Hat nicht gezahlt');
        },
      })
      .render(paypal.current);
  }, [wantPay]);

  return (
    <div
      className={windowSize >= 900 ? classes.container : classes.containerMob}
    >
      <div className={windowSize >= 900 ? classes.content : classes.contentMob}>
        <h1 className={classes.title}>ORIGINAL Klappi-Rennen</h1>
        <h2 className={classes.titleDiscription}>
          MACH DICH STARTKLAR FÜR DAS ORIGINAL KLAPPI-RENNEN!
        </h2>
        <p>
          Schnapp dir dein Klapprad und schwing dich in die Welt der
          Drahtesel-Ritter! Aber halt, bevor es losgeht, check erstmal die
          Teilnahmebedingungen weiter unten.
          <br />
          <b className={classes.highlight}>Die Startgebühr beträgt 5€.</b>
          <br />
          (Ein Teil des Geldes geht in die Denkmalpflege des Torbaues in
          Hessenstamm.)
        </p>
        <p className={classes.highlight}>
          Denn bei uns gilt: Sicherheit und Style gehen Hand in Hand. Lies sie
          dir durch, damit du weißt, was Sache ist!
        </p>
      </div>
      <div className={windowSize >= 900 ? classes.content : classes.contentMob}>
        <form className={classes.form}>
          <div className={classes.inputWrapper}>
            <div>
              <label>Name</label>
              <br />
              <input
                className={classes.input}
                id="name"
                type="text"
                onInput={(e) => setName((e.target as HTMLInputElement).value)}
              />
            </div>
            <div>
              <label>Email</label>
              <br />
              <input
                className={classes.input}
                id="email"
                type="text"
                onInput={(e) => setMail((e.target as HTMLInputElement).value)}
              />
            </div>

            <div className={classes.inputCheck}>
              <input
                onClick={() => setCheck(!check)}
                id="checkBox"
                type="checkbox"
              />
              <br />
              <label>
                Ich habe die Teilnahmebedingungen gelesen und verstanden und
                stimme diesen vollumfänglich zu.
              </label>
            </div>
          </div>
          <div>
            <Button
              onClick={() => setWantPay(true)}
              active={
                check &&
                name !== '' &&
                mail !== '' &&
                mail.length >= 5 &&
                mail.includes('@')
                  ? true
                  : false
              }
            >
              Anmeldung
            </Button>
          </div>
        </form>
      </div>
      {wantPay && (
        <div className={classes.modalContainerOuter}>
          <div className={classes.modalContainer}>
            {!payed ? (
              <>
                <p>
                  <b>Die Startgebühr beträgt 5€.</b>
                  <br /> Ein Teil des Geldes geht an den Erhalt und
                  Restaurierung des Stadttores in Heusenstamm.
                </p>
                <div className={classes.paypalContainer} ref={paypal}></div>
                <button onClick={() => setWantPay(false)}>Abbrechen</button>
              </>
            ) : (
              <>
                <h1> Vielen Dank!</h1>
                <p>Habe viel Spaß auf dem Klappi-Rennen.</p>
                <p>
                  Deine Startnummer ist die:<b> {(data?.length ?? 0) + 1}</b>
                </p>
                <button
                  onClick={() => {
                    setWantPay(false);
                    window.location.reload(false);
                  }}
                >
                  Schließen
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
