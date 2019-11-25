import React from "react";
import { Sottotitolo, CodeBox } from "../Libreria/Libreria";

export default function FunctionalComponent() {
  return (<main id="mainContent">
    <br/>
    <Sottotitolo>Caratteristiche principali</Sottotitolo>
    <p>{`
    I functional component sono utili.
    Le principali caratteristiche sono:
      1. Chiarezza
      2. Prestazioni
    `}</p>
    <CodeBox>{`
      if (a===3) {
        console.log('testo');
      }
    `}</CodeBox>
  </main>);
}
