import React from 'react';
import classes from './TextBox.module.css';

type TextBoxProps = {
  windowSize: number;
};

function TextBox({ windowSize }: TextBoxProps): JSX.Element {
  return (
    <div
      className={windowSize >= 900 ? classes.container : classes.containerMob}
    >
      <h2>HAFTUNGSAUSSCHLUSS FÜR DRAUFGÄNGER BEIM ORIGINAL KLAPPI-RENNEN!</h2>
      <p>
        <b>Beim ORIGINAL Klappi-Rennen gilt: Du bist dein eigener Boss</b> –
        immer! Wir sind kein Club mit schicken Versicherungen für Sach- oder
        Personenschäden. Also, wenn ihr an den Start geht, seid euch bewusst:
        Das Ganze läuft auf euer eigenes Risiko und eure eigene Kappe. Falls ihr
        euer Klapprad oder sogar jemand anderen zerkratzt, seid ihr selbst dafür
        verantwortlich. Kein Jammern, keine Forderungen an den Veranstalter –
        das zieht hier nicht. Aber, Leute, mal ehrlich: Ein kluger Kopf denkt
        auch an den eigenen Schutz. Unabhängig vom Rennen sollte jeder von euch
        eine ordentliche Haftpflicht- und Unfallversicherung in petto haben.
        Denn Unfälle passieren, und da ist Vorsorge besser als Nachsicht. In
        diesem Sinne, ab auf eure Klappis und ab die Post! Aber vergesst nicht,
        ihr seid auf eurem eigenen Trip – <b>keep it cool und ride safe!</b>
      </p>
      <p>
        Ich bin dabei beim ORIGINAL Klappi-Rennen und bin damit einverstanden,
        dass während des Events Fotos und Videos von mir gemacht werden dürfen.
        Dem Veranstalter erteile ich die Erlaubnis, diese Fotos und Videos von
        mir für diverse Zwecke zu nutzen, wie Presse, Werbung, Social Media und
        ähnliches, damit alle sehen können, wie cool das Rennen war.
        <br />
        <b>
          Das Ganze läuft ohne Bezahlung von deren Seite an mich. Sie dürfen die
          Bilder frei nutzen, um das Rennen zu bewerben und darüber zu berichten
          – voll okay für mich!
        </b>
      </p>
      <p>
        Nur diejenigen mit dem nötigen Schuss an geistiger Fitness sind hier am
        Start erlaubt. Denn wir wollen nicht nur rasant, sondern auch
        <b>verantwortungsbewusst unterwegs sein</b>. Was die Räder betrifft:
        Klapprad ja, aber nur die echten Eisen- und Stahl-Dinger. Keine modernen
        Faltmöglichkeiten, die nicht ins klassische Bild passen. Hier zählt
        nicht nur das Tempo, sondern auch der Style auf zwei Rädern!
        <b>Verkleidung: Jaaaa und voll gewünscht!</b> Und Leute,
        Schaltungsfreude? Eher nicht! Klappradfahrer sind schaltfaul und lieben
        ihre Freiheit. Duomatic-Naben sind okay, aber wer hier denkt, mit
        überkomplizierten Schaltungen zu glänzen, ist leider auf dem falschen
        Parcours.
      </p>
      <p>
        <b>
          ORIGINAL Klappi-Rennen zählt nicht nur das Finish, sondern auch die
          Attitüde! Seid klassisch, seid cool, und vor allem seid ihr selbst auf
          eurem Klappi!
        </b>
      </p>
    </div>
  );
}

export default TextBox;
