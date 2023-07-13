import { Button } from "@chakra-ui/react";
import { Icon, Box } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

import React from "react";
import "../CssPages/Projects.css";

const Projects = () => {
  return (
    <div id="projectScroll">
      <div className="Project" id="projects">
        <h1>Projects</h1>
        <div className="ProjectGrid">
          <Box
            bg="#FEB2B2"
            className="project-card"
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img
                className="project-img"
                src="https://camo.githubusercontent.com/1ea4fd13749cc8fabe8f1d0d999b8559e1e975c8e2f69a5f3f8f6241c2c4c02b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f302a6b46614773466d695f773338474638702e706e67"
              />
            </div>
            <div className="ProjectD">
              <h1 className="project-title">Overstock</h1>

              <li className="project-description">
                Created the Sign-in and Sign-up functionality using firebase.
              </li>
              <li>Created all category of Products pages .</li>
              <li>Created cart pages</li>
              <li>Created admin panel and user panel.</li>
              <h2 class="project-tech-stack">
                Tech stack- React | Redux | JAVASCRIPT | Css | Chakra-Ui |
                Json-server
              </h2>
              <a
                target={"_blank"}
                href="https://overstock-pi.netlify.app/"
                className="project-deployed-link"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  style={{color:'black'}}
                  mb="15px"
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Adarsh-nihal/-utopian-cover-8281"
                className='project-github-link'
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>
          <Box
            style={{ marginTop: "50px" }}
            bg="#B794F4"
            className='project-card'
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img className='project-img' src="https://www.reviewsxp.com/blog/wp-content/uploads/2020/05/Anthropologie-850x491.png" />
            </div>
            <div className="ProjectD">
              <h1  className='project-title'>Anthroplogie</h1>

              <li className='project-description'>
                Created the Sign-in and Sign-up functionality using Backened
                database.
              </li>
              <li>Created all category of Products pages .</li>
              <li>Created cart pages</li>
              <li>Payment and other pages</li>
              <li>Created admin panel and user panel.</li>
              <h2 className='project-tech-stack'>
                Tech stack- React | Redux | Mongo DB | Express JS |Chakra-Ui |
                Json-server
              </h2>
              <a target={"_blank"} href="https://frontend-ruby-chi.vercel.app/" className='project-deployed-link'>
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  style={{color:'black'}}
                  mb="15px"
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/NazminS28/Anthropologie.com"
                className='project-github-link'
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>
          <Box
            bg="skyblue;"
            style={{ marginTop: "50px" }}
            className='project-card' 
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img className='project-img' src="https://user-images.githubusercontent.com/82999625/141300168-4b13c935-07f4-4a74-8b20-ef971b855283.png" />
            </div>
            <div className="ProjectD">
              <h1 className='project-title'>Cricket.com</h1>

              <li className='project-description'>Created the Sign-in and Sign-up functionality.</li>
              <li>Used latest cricket api,filter and search functionality.</li>
              <li>
                Provided results, stats, latest news & videos of all
                international, domestic & T20 series.{" "}
              </li>
              <h2 className='project-tech-stack'>Tech stack- HTML | CSS | JAVASCRIPT</h2>

              <a
                target={"_blank"}
                href="https://cricket-com-website-clone.vercel.app/"
                className='project-deployed-link'
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  mb="20px"
                  style={{color:'black'}}
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Suvam778781/heroic-ice-5830"
                className='project-github-link'
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  mb="20px"
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>
          <Box
            style={{ marginTop: "50px" }}
            bgGradient={[
              "linear( teal.300, yellow.400)",
              "linear( blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ]}
            className='project-card'
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img className='project-img' src="https://qph.cf2.quoracdn.net/main-qimg-663fde19a326920ebb3f30412ca5a1b7-pjlq" />
            </div>
            <div className="ProjectD">
              <h1 className='project-title'>Mentimeter</h1>

              <li className='project-description'>Created the Sign-in and Sign-up functionality.</li>
              <li>Created two-three pages.</li>
              <li>Good UI with navbar.</li>
              <h2 className='project-tech-stack'>Tech stack- HTML | CSS | JAVASCRIPT</h2>

              <a
                target={"_blank"}
                href="https://chic-bonbon-92e1a1.netlify.app"
                className='project-deployed-link'
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  style={{color:'black'}}
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Adarsh-nihal/full-screw-5867"
                className='project-github-link'
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>

        </div>
      </div>
    </div>
  );
};

export default Projects;
