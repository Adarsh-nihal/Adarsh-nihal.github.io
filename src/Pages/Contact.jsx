import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Input, Textarea } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import React from "react";
import "../CssPages/Contact.css";

const Contact = () => {
  return (
    <div id="contactScroll">
      <div className="Contact" id="contact">
        <h1>Contact</h1>
        <div className="Flex">
          <div
            className="ContactDetails"
            data-aos="fade-right"
            data-aos-offset="10"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <Input placeholder="enter your name" />
            <Input mt="40px" placeholder="enter your email" />
            <Textarea placeholder="Type your message..." />
            <Button>Send</Button>
          </div>
          <div
            className="ContactIcon"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src="https://gr7800.github.io/static/media/bg1.d4a402f4b5da5590c675.gif" />
            </div>
          </div>
        </div>
        <div
          className="logo"
          data-aos="fade-up"
          data-aos-offset="-400"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <a target={"_blank"} href="https://github.com/Adarsh-nihal">
            {" "}
            <Button id="contact-github" className="btn2" bg="#A0AEC0">
              <Icon w={[4, 5]} h={12} as={BsGithub} />
            </Button>
          </a>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/adarsh-gupta-b66806222/"
          >
            {" "}
            <Button
              id="contact-linkedin"
              className="btn2"
              colorScheme="linkedin"
              ml="20px"
            >
              <Icon w={[4, 5]} h={12} as={BsLinkedin} />
            </Button>
          </a>
          <a target={"_blank"}  href="tel:+919161674761">
            {" "}
            <Button className="btn2" id="contact-phone"  bg="#48BB78" ml="20px">
             . <PhoneIcon w={[4, 5]} h={12} />
            </Button>
          </a>
          <a target={"_blank"} href="mailto:adarsh474747@gmail.com">
            {" "}
            <Button
            id="contact-email"
              className="btn2"
              bgGradient={[
                "linear(to-tr, teal.300, yellow.400)",
                "linear(to-t, blue.200, teal.500)",
                "linear(to-b, orange.100, purple.300)",
              ]}
              ml="20px"
            >
              .<EmailIcon w={[4, 5]} h={12} />
            </Button>
          </a>
        </div>
        <h4 className="footer">Designed⌨💻⌨and Built by Adarsh Gupta © 2022</h4>
      </div>
    </div>
  );
};

export default Contact;
