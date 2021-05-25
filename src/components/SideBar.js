import React from "react";
import "./Side.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if (!location) return false;
  const { pathname } = location;
  console.log(pathname);
  return pathname === "/";
};

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "#55d3e8" }}
          >
            {" "}
            Menu{" "}
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <li>
              <NavLink
                exact
                to="/espaceP"
                activeClassName="active-link"
                isActive={checkActive}
              >
                <CDBSidebarMenuItem icon="user" style={{ color: "#55d3e8" }}>
                  Profil
                </CDBSidebarMenuItem>
              </NavLink>
            </li>

            <NavLink exact to="/mesTrocs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" style={{ color: "#55d3e8" }}>
                Mes Trocs
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mesMessages" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" style={{ color: "#55d3e8" }}>
                Mes Messages
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/DemandesReçues" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" style={{ color: "#55d3e8" }}>
                Demandes Reçues
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mesFavoris" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heart" style={{ color: "#55d3e8" }}>
                Mes Favoris
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mesContacts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" style={{ color: "#55d3e8" }}>
                Mes Contactes
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/calendrier" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="calculator"
                style={{ color: "#55d3e8" }}
              >
                {" "}
                Calendrier{" "}
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ajouterAnnonce" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus" style={{ color: "#55d3e8" }}>
                {" "}
                Ajouter une annonce{" "}
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
