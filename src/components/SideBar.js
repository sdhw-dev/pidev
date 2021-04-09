import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/"  className="text-decoration-none" style={{ color: 'inherit' }} >  Menu </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
             <li >
            <NavLink exact to="/profil" activeClassName="active-link" isActive={checkActive}>
              <CDBSidebarMenuItem icon="user">Profil</CDBSidebarMenuItem>
            </NavLink></li>
           
            <NavLink exact to="/mesTrocs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Mes Trocs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mesMessages" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope">Mes Messages</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mesFavoris" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heart">Mes Favoris</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/calendrier" target="_blank"  activeClassName="activeClicked"     >
              <CDBSidebarMenuItem icon="calculator">    Calendrier  </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>


        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{   padding: '20px 5px', }} >   E.TROC </div>
        </CDBSidebarFooter>
       
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;