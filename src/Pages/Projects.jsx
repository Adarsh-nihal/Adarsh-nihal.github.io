import { Button,Link } from '@chakra-ui/react'
import { Icon,Box, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import {MdGraphicEq } from 'react-icons/md'

import React from 'react'
import "../CssPages/Projects.css"


const Projects = () => {
  return (
    <div id="projectScroll">
        <div className='Project'>
            <h1>Projects</h1>
            <div className="ProjectGrid">
            <Box   bg="#FEB2B2" className='Project1'  data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                    <div >
                        <img src="https://camo.githubusercontent.com/1ea4fd13749cc8fabe8f1d0d999b8559e1e975c8e2f69a5f3f8f6241c2c4c02b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f302a6b46614773466d695f773338474638702e706e67" />
                    </div>
                    <div className='ProjectD'>
                        <h1>Overstock</h1>
                       
                            <li>Created the Sign-in and Sign-up functionality using firebase.</li>
                            <li>Created all category of Products pages .</li>
                            <li>Created cart pages</li>
                            <li>Created admin panel and user panel.</li>
                       <h2>Tech stack- React | Redux | JAVASCRIPT | Css | Chakra-Ui | Json-server</h2>
                     <Link href="https://overstack-app-adarsh-nihal.vercel.app/"> <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  mb="15px" bg="#E53E3E">Website</Button></Link>  
                     <Link href="https://github.com/Adarsh-nihal/-utopian-cover-8281">  <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  bg="black" ml="10px" mb="15px"> Github<Icon as={BsGithub} /></Button></Link>  

                  
                    </div>

                </Box>
                <Box  bg="skyblue" style={{marginTop:"50px"}}  className='Project1' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                     <div>
                        <img src="https://user-images.githubusercontent.com/82999625/141300168-4b13c935-07f4-4a74-8b20-ef971b855283.png" />
                     </div>
                     <div className='ProjectD'>
                     <h1>Cricket.com</h1>
                       
                       <li>Created the Sign-in and Sign-up functionality.</li>
                       <li>Used latest cricket api,filter and search functionality.</li>
                       <li>Provided results, stats, latest news & videos of all international, domestic & T20 series. </li>
                  <h2>Tech stack- HTML | CSS | JAVASCRIPT</h2>
              
                 <Link href="https://drive.google.com/file/d/1oHF4pgDOvReUdcor_8KQ0syIy3FEcfCL/view">  <Button fontSize={{base:'0.8em'}} className='btn' mb="20px" color="black" bg="white">Video</Button></Link>
                 <Link href="https://github.com/Suvam778781/heroic-ice-5830"> <Button fontSize={{base:'0.8em'}} mb="20px"  className='btn' color="white" bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button></Link>

                     </div>
                      
                </Box>
                <Box  mt="50px" bgGradient={[
    'linear( teal.300, yellow.400)',
    'linear( blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} className='Project1'  data-aos="fade-up"
  data-aos-offset="-100"
  data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"
  data-aos-mirror="true"
  data-aos-once="false"
  data-aos-anchor-placement="top-center">
                    <div >
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-663fde19a326920ebb3f30412ca5a1b7-pjlq" />
                    </div>
                    <div className='ProjectD'>
                        <h1>Mentimeter</h1>
                       
                            <li>Created the Sign-in and Sign-up functionality.</li>
                            <li>Created two-three pages.</li>
                            <li>Good UI with navbar.</li>
                       <h2>Tech stack- HTML | CSS | JAVASCRIPT</h2>
                   
                     <Link href="https://chic-bonbon-92e1a1.netlify.app"> <Button  fontSize={{base:'0.8em'}} className='btn' color="white" bgGradient='linear(to-l, ,purple,#7928CA, #FF0080)'>Website</Button></Link>  
                     <Link href="https://github.com/Adarsh-nihal/full-screw-5867">  <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button></Link>  

                  
                    </div>

                </Box>
                
                <Box   bgGradient='linear(to-r, green.600,green,teal)' style={{marginTop:"50px"}} className='Project1' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                     <div>
                        <img  src="https://slonmedia.com/wp-content/uploads/2020/01/mynetdiary_cover.jpg" />
                     </div>
                     <div className='ProjectD'>
                     <h1>MyNetDiary</h1>
                       
                       <li>Created the Sign-in and Sign-up functionality.</li>
                       <li>Used Context Api and BrowserRouter for maintaining routes and Authentication.</li>
                       <li>Created three or more pages.</li>
                  <h2>Tech stack- HTML | CSS | JAVASCRIPT | REACT | Chakra UI</h2>
              
                <Link href="https://mynetdiary-adarsh-nihal.vercel.app"> <Button  fontSize={{base:'0.8em'}} className='btn' color="white" mb="20px" bgGradient='linear(to-r, teal, skyblue)'_hover={{bgGradient: 'linear(to-r, red.500, green.500)',}}>Website</Button></Link>  
                <Link href="https://github.com/Adarsh-nihal/cosmic-toy-4083/tree/main/mynetdiary">  <Button  fontSize={{base:'0.8em'}} className='btn' color="white"  mb="20px" bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button></Link>  
                     </div>

                </Box>

              
            </div>

        </div>
        <div  className="slider">
     <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 99]}>
  <RangeSliderTrack bg='skyblue'>
    <RangeSliderFilledTrack bg='rgb(254, 145, 25)' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={1} index={0}>
    <Box color='red' as={MdGraphicEq} />
  </RangeSliderThumb>
  <RangeSliderThumb boxSize={1} index={1}>
    <Box color='Green' as={MdGraphicEq} />
  </RangeSliderThumb>
</RangeSlider>
</div>
    </div>
  )
}

export default Projects