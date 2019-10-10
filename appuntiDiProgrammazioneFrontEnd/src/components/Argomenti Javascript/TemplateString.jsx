import React from "react";
import { Titolo, Sottotitolo, CodeBox } from "../Libreria/Libreria";

export default function TemplateString() {
  return (<main id="mainContent">
    <Titolo>Introduzione</Titolo>
    <hr/>
    <Sottotitolo>Caratteristiche principali</Sottotitolo>
    <p>{`
    Le template string sono utili.
    Le principali caratteristiche sono:
      1. Chiarezza
      2. Leggibilità
    `}</p>
    <CodeBox>{`
      if (a===3) {
        console.log('testo');
      }
    `}</CodeBox>
  </main>);
}
