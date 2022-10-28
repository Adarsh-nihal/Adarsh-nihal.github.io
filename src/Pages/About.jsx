import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';
import {MdGraphicEq } from 'react-icons/md'
import { Box, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Link,}
 from '@chakra-ui/react'
import "../CssPages/About.css"
const About = () => {
  return (
    <div id='aboutScroll'>

 <div className='About'>
    <h1 >About</h1>
    <h2>I'm Adarsh Gupta</h2>
    <p>Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.</p>
<p>Drop a mail @ <Link href="mailto:aadarsh474747@gmail.com"><span style={{textDecoration:"underline",color:" rgb(254, 145, 25)",cursor:"pointer"}}>
    adarsh474747@gmail.com </span></Link> <EmailIcon/> </p>
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


export default About