"use client";

import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from '@/app/ui/styles/DashSidebar.module.css';
import { MdDashboard, MdPerson, MdSettings, MdLogout, MdFeedback } from "react-icons/md";
import { LuCupSoda } from "react-icons/lu";
import { hrtime } from "process";


export default function DashSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/dash", label: "Dashboard", icon: (<MdDashboard />) },
    { href: "/dash/feedbacks", label: "Feedbacks", icon: (<MdFeedback />) },
    { href: "hr", label: null, icon: null },
    { href: "/dash/profile", label: "Profile", icon: (<MdPerson />) },
    { href: "/dash/settings", label: "Settings", icon: (<MdSettings />) },
    { href: "/logout", label: "Logout", icon: (<MdLogout />) },
  ];

  const createLinks = (routes: any) => {
    return routes.map((link: any, key: any) => {
      if (link.href === 'hr') {
        return (<hr />);
      }
      return (
        <NavItem key={key} active={pathname === link.href}>
            <NavLink href={link.href} active={pathname === link.href}>
                {link.icon} {link.label}
            </NavLink>
        </NavItem>
      );
    });
  };
//    <div className={`d-flex flex-column flex-shrink-0 p-3 bg-dark mb-auto ${styles.sidebar}`} >

  return (
    <div className={`bg-dark text-white ${styles.sidebar}`} >
      <div id="sidebarBrand" className={`${styles.sidebarBrand}`}>
        <span><LuCupSoda /> Cubata</span>
      </div>
      <hr />
      <Nav vertical pills card color="dark">{createLinks(navLinks)}</Nav>
    </div>
  );
}
