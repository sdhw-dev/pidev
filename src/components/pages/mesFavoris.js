import React from 'react';
import { Route } from "react-router-dom";
import Sidebar from "../SideBar";
import Footer from "../Footer";

function mesFavoris() {
  return (
    <div className='mesfavoris'>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div style={{ flex: "1", flexDirection: "row" }}>


        </div>
      </div>
    
      <Footer />
    </div>
  );
}

export default mesFavoris;
