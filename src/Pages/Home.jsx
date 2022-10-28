import { Box,Flex,Image,Text,Button, RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Link,Icon} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import {MdGraphicEq } from 'react-icons/md'

import React from 'react'
import '../CssPages/Home.css';

const Home = () => {
  return (
    <div id="hero">
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
         <h2 >Adarsh Gupta</h2>

         <p>I am a web developer with a vast array of knowledge in many different frontend and backend languages, responsive frameworks, database, and best code practices.</p>
         <div className='btn1'>
       <Link href="https://drive.google.com/file/d/1_lLxgSDQA40TQoYdYtWD77HGeBdMC1Du/view?usp=sharing"> 
       <Button fontFamily="sans-serif" className='button' fontSize={{base:'1.1em'}}
       color="black"  bg="skyblue">Resume|<ViewIcon/></Button>
       </Link> 
       <Link href="https://github.com/Adarsh-nihal"> <Button ml="4px"  fontSize={{base:'1.1em'}} fontFamily="sans-serif" className='button'  color="black"  bgGradient='linear(to-r, darkgray,grey,white)' >Github <Icon as={BsGithub} />
        </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/adarsh-gupta-b66806222/"> <Button ml="4px"  fontSize={{base:'1.1em'}}  fontFamily="sans-serif" className='button'  color="white" colorScheme="linkedin">Linked<Icon   as={BsLinkedin}/>
        </Button>
        </Link>  
        
       


         </div>
      </div>
     </div>

     <div  className="slider">
     <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 99]}>
  <RangeSliderTrack bg='skyblue'>
    <RangeSliderFilledTrack bg='rgb(254, 145, 25)' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={1} index={0}>
    <Box color='red' />
  </RangeSliderThumb>
  <RangeSliderThumb boxSize={1} index={1}>
    <Box color='Green' as={MdGraphicEq} />
  </RangeSliderThumb>
</RangeSlider>
</div>
    </div>
  )
}

export default Home