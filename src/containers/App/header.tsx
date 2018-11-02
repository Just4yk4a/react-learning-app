import * as React from "react";
import {MenuItem, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar>
            <Nav>
                <NavDropdown eventKey={1} title="Files" id="basic-nav-dropdown">
                    <MenuItem eventKey={1.1}>Action</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
};