import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Button  from './components/Button'
import Textfield from "./components/Textfield";

function App() {

  function getEncrypt () {
   const enc = document.getElementById("input");  
   console.log(enc.value)
    }
  function getDecrypt () {
    
    }





  return (
  <div className = "container">
    <Header/>
    <Textfield/>
    <div className = 'text-container'><input className = "pw" type="text" placeholder = "Passwort"/></div>
    <div className = 'btn-container'> 
    <Button onClick={() => getEncrypt()} color={'green'} >Verschlüsseln</Button>
    <Button onClick={() => getDecrypt()} color={'red'}>Entschlüsseln</Button>
    </div>
  </div>
  );
}

export default App;
