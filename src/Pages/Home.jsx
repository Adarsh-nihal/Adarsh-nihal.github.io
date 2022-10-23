import { Box,Flex,Image,Text,Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import React from 'react'
import '../App.css';

const Home = () => {
  return (
    <div className='Home' >
      <div className='Home-child1' >
          <div className='Img'  >
            <Image w="90%" borderRadius="50%" src="https://avatars.githubusercontent.com/u/107548299?v=4"/>
            </div>
         </div>
      <div className="Home-child2" >
         <h1>
           Full Stack Web Developer

         </h1>
         <h2>Adarsh Gupta</h2>

         <p>I am a web developer with a vast array of knowledge in many different frontend and backend languages, responsive frameworks, database, and best code practices.</p>
         <div className='btn'>
         <Button>RESUME</Button>
           <Button >Linked<Icon   as={BsLinkedin}/></Button>
         <Button>Github <Icon as={BsGithub} /></Button>


         </div>
      </div>
     
    </div>
  )
}

export default Home