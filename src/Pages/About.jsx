import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';
import {Link,}
 from '@chakra-ui/react'
import "../CssPages/About.css"
const About = () => {
  return (
    <div id="about"  class="about section" >

 <div className='About' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
    <h1 >About</h1>
    <h2 id="user-detail-name">I'm Adarsh Gupta</h2>
    <div style={{color:"white"}} id="user-detail-intro">Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.</div>
<p>Drop a mail @ <Link href="mailto:aadarsh474747@gmail.com"><span style={{textDecoration:"underline",color:"salmon",cursor:"pointer"}}>
    adarsh474747@gmail.com </span></Link> <EmailIcon/> </p>
 </div>
    </div>
  )
}


export default About