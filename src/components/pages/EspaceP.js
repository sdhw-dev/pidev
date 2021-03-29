import React from 'react';
import '../../App.css';
import Profil from '../Profil';
import CssSideBar from "../CssSideBar";
import mesTrocs from '../mesTrocs';
import mesFavoris from '../mesFavoris';
import mesMessages from '../mesMessages' ;
function EspaceP() {
  return (
    <>
      <Profil/>
      <mesMessages />
      <mesTrocs />
      <mesFavoris />
      <Calendrier />
    </>
  );
}

export default EspaceP;