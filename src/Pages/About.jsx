import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';
import {MdGraphicEq } from 'react-icons/md'
import { Box, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb,}
 from '@chakra-ui/react'
import "../CssPages/About.css"
const About = () => {
  return (
    <div>

 <div className='About'>
    <h1>About</h1>
    <h2>I'm Adarsh Gupta</h2>
    <p>Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.</p>
<p>Drop a mail @ <span style={{textDecoration:"underline",color:"white",cursor:"pointer"}}>
    adarsh474747@gmail.com</span> <EmailIcon/> </p>
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


export default About