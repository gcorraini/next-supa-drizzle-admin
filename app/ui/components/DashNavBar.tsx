"use client"
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
//import Link from 'next/link'
import styles from "@/app/ui/styles/DashNavbar.module.css"
import { FaBootstrap } from "react-icons/fa";
import { IconContext } from "react-icons";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function DashNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const pathname = usePathname()

  // className={styles.topbar}
  return (
    <Navbar color="dark" dark expand="md" className={styles.topbar}>
      <NavbarBrand href="/">
        <IconContext.Provider value={{ size: "2em" }}>
          <FaBootstrap />
        </IconContext.Provider>
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse className="text-bg-dark" isOpen={isOpen} navbar>
        <Nav className="mr-auto p-2" navbar>
          <NavItem key="home">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
          </NavItem>
          <NavItem key="about">
            <NavLink href="/about" active={pathname === "/about"}>
              About
            </NavLink>
          </NavItem>
          <NavItem key="dash">
            <NavLink href="/dash" active={pathname === "/dash"}>
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
