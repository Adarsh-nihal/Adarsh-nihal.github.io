import { AtSignIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button, Input, Link, Textarea } from '@chakra-ui/react'
import { Icon, } from '@chakra-ui/react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import React from 'react'
import "../CssPages/Contact.css"

const Contact = () => {
  return (
    <div id="contactScroll">
        <div className="Contact">
            <h1>Contact</h1>
          <div className='Flex'>
            <div className='ContactDetails'>
                <Input  placeholder='enter your name' />
                <Input mt="40px" placeholder='enter your email' />
               <Textarea placeholder='Type your message...' />
               <Button >Send</Button>
            </div>
            <div className='ContactIcon' >
                    <div>
                       <img src="https://gr7800.github.io/static/media/bg1.d4a402f4b5da5590c675.gif" />
                    </div>
            </div>

          </div>
          <div className='logo'>
          <Link href="https://github.com/Adarsh-nihal"> <Button className='btn2' bg="#A0AEC0" ><Icon  w={[4,5]} h={12} as={BsGithub}/></Button></Link> 
          <Link href="https://www.linkedin.com/in/adarsh-gupta-b66806222/">  <Button className='btn2' colorScheme="linkedin" ml="20px" ><Icon  w={[4,5]} h={12} as={BsLinkedin} /></Button></Link>
           <Link href="tel:+919161674761"> <Button className='btn2' bg="#48BB78" ml="20px"><PhoneIcon  w={[4,5]} h={12} /></Button></Link>
           <Link href="mailto:adarsh474747@gmail.com"> <Button className='btn2'  bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} ml="20px"><EmailIcon  w={[4,5]} h={12} /></Button></Link>


          </div>
            <h4 className='footer'>Designed⌨💻⌨and Built by Adarsh Gupta © 2022</h4>
        </div>

    </div>
  )
}

export default Contact