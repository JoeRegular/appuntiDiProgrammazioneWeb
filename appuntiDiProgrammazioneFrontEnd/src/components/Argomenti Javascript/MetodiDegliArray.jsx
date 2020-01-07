import React from "react";
import { Sottotitolo, CodeBox } from "../Libreria/Libreria";

export default function MetodiDegliArray() {
  return (<main id="mainContent">
  
    <hr />
    <Sottotitolo>Array.indexOf</Sottotitolo>
    <p>{`
    Da come risultato il primo indice dell’elemento cercato.
    Esempio: 
    
    `}</p>
    <CodeBox>{`
     const characters = [
        'ironman',
        'black_widow',
        'hulk',
        'captain_america',
        'hulk',
        'thor',
      ];
      
      console.log(characters.indexOf('hulk'));
      // 2
      console.log(characters.indexOf('batman'));
      // -1
           
    `}</CodeBox>

    <hr />
    <Sottotitolo>Array.findIndex</Sottotitolo>
    <p>{`
    Restituisce l'indice del primo elemento in un’array che supera un test (fornito come funzione).
    Il metodo findIndex() esegue la funzione una volta per ciascun elemento presente nell'array:
    Se trova un elemento dell'array dove la funzione restituisce un valore true, findIndex() restituisce l'indice di quell'elemento dell'array (e non controlla i valori rimanenti)
    Altrimenti restituisce -1
    Nota: findIndex () non esegue la funzione per gli elementi dell'array senza valori.
    Nota: findIndex () non modifica l’array originale.
        
    `}</p>


    <hr />
    <Sottotitolo>Array.include</Sottotitolo>
    <p>{`
    Risponde con un booleano se l’array contiene o meno l’elemento cercato.
    Esempio:
        
    `}</p>
    <CodeBox>{`
     const characters = [
      'ironman',
      'black_widow',
      'hulk',
      'captain_america',
      'hulk',
      'thor',
    ];
    
    console.log(characters.includes('hulk'));
    // true
     
    `}</CodeBox>

    <hr />
    <Sottotitolo>Array.filter</Sottotitolo>
    <p>{`
    Crea un nuovo array con tutti gli elementi  che soddisfano i criteri.
    Nota: filter() non esegue la funzione per gli elementi dell'array senza valori.
    Nota: filter() non cambia l’array originale.
    
    
    Esempio:
        
    `}</p>
    <CodeBox>{`
     var ages = [32, 33, 16, 40];

     function checkAdult(age) {
       return age >= 18;
     }
     
     function myFunction() {
       document.getElementById("demo").innerHTML = ages.filter(checkAdult);
     }
               
    `}</CodeBox>

    <hr />
    <Sottotitolo>Array.find</Sottotitolo>
    <p>{`
    Restituisce il valore del primo elemento in un array che supera un controllot (forito come funzione).
    Il metodo find() esegue la funzione una volta per ogni elemento presente nell’array:
    Se trova un elemento dell’array in cui la funzione restituisce un valore true, find() restituisce il valore di quell'elemento di matrice (e non controlla i valori rimanenti)
    Altrimenti restituisce undefined
    Nota: find() non esegue la funzione per gli array vuoti.
    Nota: find() non cambia la matrice originale.
        
    `}</p>

    <hr />
    <Sottotitolo>Array.some</Sottotitolo>
    <p>{`
    Il metodo some() verifica se uno qualsiasi degli elementi di un array supera un test (fornito come funzione).
    Il metodo some() esegue la funzione una volta per ogni elemento presente nell'array:
    Se trova un elemento dell’ array in cui la funzione restituisce un valore true, some() restituisce true (e non controlla i valori rimanenti)
    Altrimenti restituisce false
    Nota: some() non esegue la funzione per gli elementi dell'array senza valori.
    Nota: some() non cambia l’array originale.
        
    `}</p>


    <hr />
    <Sottotitolo>Array.map</Sottotitolo>
    <p>{`
    Il metodo map() crea un nuovo array con i risultati della chiamata di una funzione per ogni elemento dell'array.
    Il metodo map() chiama la funzione fornita una volta per ciascun elemento in un array, nell'ordine.
    Nota: map() non esegue la funzione per gli elementi dell'array senza valori.
    Nota: map() non cambia l’array originale.
    
    `}</p>
    <CodeBox>{`
       var persone = [
        {
          nome: "Giovanni",
          età: 26,
          occhiali: false
        },
        {
          nome: "Pietro",
          età: 52,
          occhiali: true,
        },
        {
          nome: "Lucia",
          età: 57,
          occhiali: false
        }
      ];
      
      persone.map( p => p.nome );
      // ["Giovanni", "Pietro", "Lucia"];
               
    `}</CodeBox>

    <hr />
    <Sottotitolo>Array.reduce</Sottotitolo>
    <p>{`
        riduce l’array a un singolo valore.
        Il metodo reduce() esegue una funzione fornita per ogni valore dell'array (da sinistra a destra).
        Il valore di ritorno della funzione è memorizzato in un accumulatore (risultato / totale).
        Nota: reduce() non esegue la funzione per gli elementi di matrice senza valori.
        
    `}</p>

  </main>);
}

