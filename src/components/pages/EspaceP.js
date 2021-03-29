import React from 'react';
import '../../App.css';
import Profil from '../Profil';
import CssSideBar from "../CssSideBar";
import mesTrocs from '../mesTrocs';
import mesFavoris from '../mesFavoris';
import SideBar from '../SideBar';
import Calendrier from '../Calendrier';


function EspaceP() {
  return (
    <>
    <SideBar/>
      <Profil/>
      <mesMessages />
      <mesTrocs />
      <mesFavoris />
      <Calendrier />
      <CssSideBar/>
    </>
  );
}

export default EspaceP;