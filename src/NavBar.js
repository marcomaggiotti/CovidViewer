import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const NavBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href="https://github.com/pcm-dpc/COVID-19" active>Dati PCM</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Località
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Seleziona Città</DropdownItem>
            <DropdownItem disabled>Emilia Romagna</DropdownItem>
            <DropdownItem>Rimini</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Bergamo</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="https://aqicn.org/city/italy/emilia-romagna/san-clemente/">PM10</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#"> Link solo per gente incazzata</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
