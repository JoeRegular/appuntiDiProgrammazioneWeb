import React from "react";
import { Sottotitolo } from "../Libreria/Libreria";

const BtnPrimary = props => <button type="button">{props.children}</button>;
const BtnSuccess = props => <button type="button">{props.children}</button>;

export default function Bottoni(){
 return ( 
 <div>
    <Sottotitolo>Bottoni creati con Bootstrap</Sottotitolo>
        <BtnPrimary>ciao</BtnPrimary>
        <BtnSuccess>ciao</BtnSuccess>
 </div>
    )
}