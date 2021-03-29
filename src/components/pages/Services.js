import React from 'react';
import '../../App.css';
import CardsServices from '../CardsServices';
import Footer from '../Footer';
import NavbarServices from '../NavbarServices';


export default function Services() {
  return (
    <>
      <NavbarServices/>
      <CardsServices/>
      <Footer />
    </>
  );
}

