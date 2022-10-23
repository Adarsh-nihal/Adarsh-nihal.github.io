import React from 'react'
import { Flex,Box,Spacer,Text,Heading } from '@chakra-ui/react'
import '../App.css';
import { PhoneIcon, AddIcon,SunIcon,Icon,AttachmentIcon,AtSignIcon ,HamburgerIcon
  ,CalendarIcon
} from '@chakra-ui/icons'



const Navbar = () => {
  return (
  <div className='Navbar'>
   <div className='Navbar-child1'>
    <h2><AtSignIcon />Adarsh</h2>
    <h2><SunIcon /></h2>
    </div>
   <div className='Navbar-child2'>
    <h2><CalendarIcon/> Home</h2>
    <h2><HamburgerIcon /> About</h2>
    <h2><AddIcon />Skills</h2>
    <h2><AttachmentIcon /> Projects</h2>
    <h2><PhoneIcon />Contact</h2>
   </div>
  </div>
 
  )
}

export default Navbar