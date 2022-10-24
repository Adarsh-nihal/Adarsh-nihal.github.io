import { Button } from '@chakra-ui/react'
import { Icon, } from '@chakra-ui/react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import React from 'react'
import "../CssPages/Projects.css"


const Projects = () => {
  return (
    <div>
        <div className='Project'>
            <h1>Projects</h1>
            <div className="ProjectGrid">
                <div className='Project1'>
                    <div >
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-663fde19a326920ebb3f30412ca5a1b7-pjlq" />
                    </div>
                    <div className='ProjectD'>
                        <h1>Mentimeter</h1>
                       
                            <li>Created the Sign-in and Sign-up functionality.</li>
                            <li>Created two-three pages</li>
                            <li>Good UI with navbar</li>
                       <h2>Tech stack- HTML | CSS | JAVASCRIPT</h2>
                   
                        <Button bg="purple">Website</Button>
                        <Button bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button>

                  
                    </div>

                </div>
                
                <div style={{marginTop:"50px"}} className='Project1'>
                     <div>
                        <img  src="https://slonmedia.com/wp-content/uploads/2020/01/mynetdiary_cover.jpg" />
                     </div>
                     <div className='ProjectD'>
                     <h1>MyNetDiary</h1>
                       
                       <li>Created the Sign-in and Sign-up functionality.</li>
                       <li>Used Context Api and BrowserRouter for maintaining routes and Authentication.</li>
                       <li>Created three or more pages</li>
                  <h2>Tech stack- HTML | CSS | JAVASCRIPT | REACT | Chakra UI</h2>
              
                   <Button mb="20px" bg="green">Website</Button>
                   <Button mb="20px" bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button>
                     </div>

                </div>

                <div style={{marginTop:"50px"}}  className='Project1'>
                     <div>
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-663fde19a326920ebb3f30412ca5a1b7-pjlq" />
                     </div>
                     <div className='ProjectD'>
                     <h1>Mentimeter</h1>
                       
                       <li>Created the Sign-in and Sign-up functionality.</li>
                       <li>Created two-three pages</li>
                       <li>Good UI with navbar</li>
                  <h2>Tech stack- HTML | CSS | JAVASCRIPT</h2>
              
                   <Button bg="purple">Website</Button>
                   <Button bg="black" ml="10px"> Github<Icon as={BsGithub} /></Button>

                     </div>
                      
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects