import { Box,Flex,Image,Text,Button, RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,} from '@chakra-ui/react'
import { Icon, } from '@chakra-ui/react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import {MdGraphicEq } from 'react-icons/md'

import React from 'react'
import '../CssPages/Home.css';

const Home = () => {
  return (
    <div>
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
           <Button colorScheme='linkedin' >Linked<Icon   as={BsLinkedin}/></Button>
         <Button  >Github <Icon as={BsGithub} /></Button>


         </div>
      </div>
     </div>

     <div  className="slider">
     <RangeSlider aria-label={['min', 'max']} defaultValue={[30, 80]}>
  <RangeSliderTrack bg='skyblue'>
    <RangeSliderFilledTrack bg='skyblue' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={6} index={0}>
    <Box color='red' as={MdGraphicEq} />
  </RangeSliderThumb>
  <RangeSliderThumb boxSize={6} index={1}>
    <Box color='Green' as={MdGraphicEq} />
  </RangeSliderThumb>
</RangeSlider>
</div>
    </div>
  )
}

export default Home