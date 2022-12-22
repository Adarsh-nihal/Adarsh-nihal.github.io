import {Image,Button,Icon} from '@chakra-ui/react'
import { ViewIcon,DownloadIcon } from '@chakra-ui/icons'
import {BsGithub } from 'react-icons/bs'
import Typical from "react-typical"
import React from 'react'
import '../CssPages/Home.css';

const Home = () => {
  
  return (
    <div id="hero">
    <div className='Home'>
      <div className='Home-child1'  data-aos="fade-right"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
      <div className="round_css"></div>
          <div className='Img'  >
            <Image  w="90%" borderRadius="50%" src="https://avatars.githubusercontent.com/u/107548299?v=4"/>
            </div>
         </div>
      <div className="Home-child2"  data-aos="fade-left"
    data-aos-offset="-150"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
<h5>
         <Typical
          steps={[
            "Hello World !",
            2000,
            "नमस्ते दुनिया 🙏",
            2000,
            "নমস্কার বিশ্ব 🙏",
            2000,
          ]}
         loop={Infinity}
         wrapper="p"
         />
         </h5>
<h2 >Adarsh Gupta</h2>
      <h1>
         <Typical
          steps={[
            "HI I AM ADARSH GUPTA",
            2000,
            "A PASSIONATE FULL STACK WEB DEVELOPER",
            2000,
          ]}
         loop={Infinity}
         wrapper="p"
         />
         </h1>

         <p>I am a web developer with a vast array of knowledge in many different frontend and backend languages, responsive frameworks, database, and best code practices.</p>
         <div className='btn1'>
       <a  target={"_blank"} href="https://drive.google.com/file/d/1_lLxgSDQA40TQoYdYtWD77HGeBdMC1Du/view?usp=sharing"> 
       <Button fontSize="13px" fontFamily="sans-serif" className='button' 
       color="black"  bg="skyblue">Resume|<ViewIcon/></Button>
       </a> 
       <a
          target={"_blank"}
          href="https://drive.google.com/u/0/uc?id=1_lLxgSDQA40TQoYdYtWD77HGeBdMC1Du&export=download"
        >
          
          <Button  fontSize="13px" ml="5px"  fontFamily="sans-serif" className='button'
       color="black"  bg="skyblue">Resume|<DownloadIcon /></Button>
        </a> 
       <a  target={"_blank"} href="https://github.com/Adarsh-nihal"> <Button ml="2px" fontSize="13px"   fontFamily="sans-serif" className='button'  color="black"  bgGradient='linear(to-r, darkgray,grey,white)' >Github <Icon as={BsGithub} />
        </Button>
        </a>
       
        
       


         </div>
      </div>
     </div>

      
</div> 
  )
}

export default Home