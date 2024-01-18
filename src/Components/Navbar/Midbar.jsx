import React, { useState } from "react";
import "./Navbar.css";
import MidbarList from "./MidbarList";
import { GrLinkTop } from "react-icons/gr";
import { Link } from "react-router-dom";
import {HiMenu} from 'react-icons/hi'
import {BiSearchAlt} from 'react-icons/bi'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Search from "./Search";

const Midbar = ({ filters, changeFilters }) => {
  const [searchToggle,setSearchToggle] = useState(false);
  return (
    <div className="midBar">
        <div className='hamburgerMenu'>
        <Menu >
          <MenuButton as={Button} background='none' colorScheme={'white'}>
          <HiMenu size={'1.7rem'} color='black'/>
          </MenuButton>
          <MenuList>
            <MenuItem><Link to={'/products'}>All Styles</Link></MenuItem>
            <MenuItem><Link to={'/products'}>tokps</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Dress</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Co-ords</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Basics</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Skirts</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Bottom</Link></MenuItem>
          </MenuList>
        </Menu>
        </div>
      <div>
        <MidbarList filters={filters} changeFilters={changeFilters} />
      </div>
      
    </div>
  );
};

export default Midbar;
