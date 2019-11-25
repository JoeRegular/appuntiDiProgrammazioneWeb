import React from "react";
import { Sottotitolo, Button } from "../Libreria/Libreria";

export default function Bottoni() {

  return (<main id="mainContent">
    <br/>    
  <Sottotitolo> Bottone Success </Sottotitolo>
    <Button type="success" >Success</Button>
    <Button type="success" size="big">Success</Button>
    <Button type="success" size="medium">Success</Button>
    <Button type="success" size="small">Success</Button>
    <Button type="success" disabled={true}>Success</Button>
    <Button type="success" canLoad={true}>Success</Button>
    <hr/>

  <Sottotitolo>  Bottone Error </Sottotitolo>
    <Button type="Error" >Error</Button>
    <Button type="Error" size="big">Error</Button>
    <Button type="Error" size="medium">Error</Button>
    <Button type="Error" size="small">Error</Button>
    <Button type="Error" type="success" disabled={true}>Error</Button>
    <Button type="Error" canLoad={true}>Error</Button>
    <hr/>

  <Sottotitolo> Bottone Warning </Sottotitolo>
    <Button type="Warning" >Warning</Button>
    <Button type="Warning" size="big">Warning</Button>
    <Button type="Warning" size="medium">Warning</Button>
    <Button type="Warning" size="small">Warning</Button>
    <Button type="Warning" disabled={true}>Warning</Button>
    <Button type="Warning" canLoad={true}>Warning</Button>
    <hr/>

  <Sottotitolo> Bottone Primary </Sottotitolo> 
    <Button type="button">Primary</Button>
    <Button type="Primary" size="big">Primary</Button>
    <Button type="Primary" size="medium">Primary</Button>
    <Button type="Primary" size="small">Primary</Button>
    <Button type="Primary" disabled={true}>Primary</Button>
    <Button type="Primary" canLoad={true}>Primary</Button>
    <hr/>

  <Sottotitolo> Bottone Secondary </Sottotitolo>
    <Button type="Secondary" >Secondary</Button>
    <Button type="Secondary" size="big">Secondary</Button>
    <Button type="Secondary" size="medium">Secondary</Button>
    <Button type="Secondary" size="small">Secondary</Button>
    <Button type="Secondary" disabled={true}>Secondary</Button>
    <Button type="Secondary" canLoad={true}>Secondary</Button>
    <hr/>

    <Button disabled={true}>Non puoi cliccarmi</Button>

  </main>);
}