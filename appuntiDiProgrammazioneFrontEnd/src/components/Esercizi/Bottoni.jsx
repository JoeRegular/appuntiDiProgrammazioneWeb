import React from "react";
import { Titolo, Sottotitolo } from "../Libreria/Libreria";

const BtnPrimary = props => <button type="button" className="btn btn-primary">{props.children}</button>;
const BtnSuccess = props => <button type="button" className="btn btn-success">{props.children}</button>;

export default function Bottoni(){
 return ( 
 <div>
    <Sottotitolo>Bottoni creati con Bootstrap</Sottotitolo>
        <BtnPrimary>ciao</BtnPrimary>
        <BtnSuccess>ciao</BtnSuccess>
 </div>
    )
}