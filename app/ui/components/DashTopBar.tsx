'use client'

import { 
    Nav, 
    NavItem, 
    NavLink, 
    Container,
    Form,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import Image from 'next/image'
import { IconContext } from "react-icons";
import { FaBootstrap } from "react-icons/fa";
import styles from "@/app/ui/styles/DashNavbar.module.css"


export default function DashTopBar() {
    return (
        // text-bg-secondary
        <header className={`${styles.topbar}`}>
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <IconContext.Provider value={{ size: "2em" }}>
                        <a id="Logo" href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"><FaBootstrap /></a>
                    </IconContext.Provider>

                    <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <NavItem><NavLink href="/" className="ps-4 link-body-emphasis">Home</NavLink></NavItem>
                        <NavItem><NavLink href="/about" className="ps-1 link-body-emphasis">About</NavLink></NavItem>
                    </Nav>

                    <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <Input
                            id="dashTopBarSearch"
                            name="dashTopBarSearch"
                            placeholder="Search..."
                            type="search"
                            className="form-control" />
                    </Form>

                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle caret className="nav-link d-block link-body-emphasis text-decoration-none" tag="a">
                            {/* <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"> */}
                            <Image
                                src="https://github.com/mdo.png"
                                className="rounded-circle"
                                width={32}
                                height={32}
                                alt="mdo"
                            />
                        </DropdownToggle>
                        <DropdownMenu className="text-small">
                            <DropdownItem href="#" tag="a">New project...</DropdownItem>
                            <DropdownItem href="#" tag="a">Settings</DropdownItem>
                            <DropdownItem href="#" tag="a">Profile</DropdownItem>
                            <DropdownItem><hr className="dropdown-divider" /></DropdownItem>
                            <DropdownItem href="#" tag="a">Sign out</DropdownItem>
                        </DropdownMenu>

                    </UncontrolledDropdown>

                </div>
            </Container>
        </header>
    );
};