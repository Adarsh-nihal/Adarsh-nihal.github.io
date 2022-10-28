import React, { useState } from 'react'
import { Flex,Box,Spacer,Text,Heading, Button } from '@chakra-ui/react'
import '../App.css';
import { PhoneIcon, AddIcon,SunIcon,Icon,AttachmentIcon,AtSignIcon ,HamburgerIcon
  ,CalendarIcon,
  MoonIcon
} from '@chakra-ui/icons'
import { Link } from 'react-scroll';


const Navbar = ({handleClick,theme}) => {
const [click,setClick]=useState(false)
const closeMenu=()=>setClick(false)
  return (
   
  <div className='Navbar'>
   <div className='Navbar-child1'>
    <h2><AtSignIcon />Adarsh</h2>
    <Button  onClick={handleClick}>{theme?<MoonIcon cursor="pointer"  />:<SunIcon cursor="pointer" />}</Button>
    </div>
   <div className='Navbar-child2'>
   <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2><CalendarIcon/> Home</h2></Link>
   <Link to="aboutScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}><h2><HamburgerIcon /> About</h2></Link>
   <Link to="SkillScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2><AddIcon />Skills</h2></Link>
   <Link  to="projectScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} > <h2><AttachmentIcon /> Projects</h2></Link>
   <Link to="contactScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} > <h2><PhoneIcon />Contact</h2></Link>
   </div>
  </div>
 
 
  )
}

export default Navbar