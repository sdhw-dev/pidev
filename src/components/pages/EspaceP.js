import React from 'react';
import '../../App.css';
import Profil from '../Profil';
import SideBar from '../SideBar';
import Calendrier from '../Calendrier';
import mesMessages from '../mesMessages';
import mesFavoris from '../mesFavoris';
import NavbarServices from '../NavbarServices';

function EspaceP() {
  return (
    <>
    <NavbarServices/>
    <SideBar/>
      <Profil/>
      <mesMessages/>
      <mesTrocs/>
      <mesFavoris />
      <Calendrier />
     <CssSideBar/>
    </>
  );
}

export default EspaceP;