import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import "../App.css";
import {
  PhoneIcon,
  AddIcon,
  SunIcon,
  AttachmentIcon,
  AtSignIcon,
  HamburgerIcon,
  CalendarIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { Link } from "react-scroll";

const Navbar = ({ handleClick, theme }) => {
  const [click, setClick] = useState(false);
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const closeMenu = () => setClick(false);
  const toggleMenu = () => {
    setOpenMenuBar(!openMenuBar);
  };
  return (
    <div
      className="Navbar"
      id="nav-menu"
      style={{ backgroundColor: theme ? "black" : "#011627" }}
    >
      <div className="Navbar-child1">
        <h2>
          <AtSignIcon />
          Adarsh
        </h2>
        <Button onClick={handleClick}>
          {theme ? <SunIcon cursor="pointer" /> : <MoonIcon cursor="pointer" />}
        </Button>
      </div>
      <MenuWrapper onClick={toggleMenu}>
        <MenuButton openMenuBar={openMenuBar} />
      </MenuWrapper>
      <div
        id="nav"
        className={`section_wrapper ${openMenuBar ? "open_menu_bar" : ""}`}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 id="l" className="nav-link home">
            <CalendarIcon /> Home
          </h2>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-180}
          duration={700}
          onClick={closeMenu}
        >
          <h2 id="l" className="nav-link about">
            <HamburgerIcon /> About
          </h2>
        </Link>
        <Link
          to="SkillScroll"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 id="l" className="nav-link skills">
            <AddIcon />
            Skills
          </h2>
        </Link>
        <Link
          to="projectScroll"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 className="nav-link projects" id="l">
            <AttachmentIcon /> Projects
          </h2>
        </Link>
        <Link
          to="contactScroll"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          onClick={closeMenu}
        >
          {" "}
          <h2 className="nav-link contact" id="l">
            <PhoneIcon />
            Contact
          </h2>
        </Link>
      </div>
    </div>
  );
};

const MenuWrapper = styled.div`
  position: absolute;
  z-index: 999;
  display: none;
  @media screen and (max-width: 675px) {
    right: 15px;
    top: 15px;
    display: block;
  }
`;
export default Navbar;
