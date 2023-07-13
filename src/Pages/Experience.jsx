import React from 'react';
import { Box, Text, Flex, Icon, Divider, Badge, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack } from '@chakra-ui/react';
import { MdWork, MdSchool } from 'react-icons/md';

const Experience = () => {
  const experiences = [
    {
      company: 'Devriser LLC',
      position: 'Full Stack Developer',
      duration: 'may-2023-  to july-2023',
      description: 'During my professional experience as a full-stack web developer, I had the opportunity to learn and work with Next.js and Figma. Next.js which is a React framework.',
    },
  
  ];

 

  return (
    <Box id="expereniceScroll">
         <div className="slider" >
        {/* <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
          <RangeSliderTrack bg="skyblue">
            <RangeSliderFilledTrack bg="black" />
          </RangeSliderTrack>
        </RangeSlider> */}
      </div>
    <Box borderRadius="md"  >
      <Flex p={4} justifyContent="center" direction={{base:"column",md:"row",lg:"row",xl:"row","2xl":"row"}} >
        <Box>
        <Text fontSize={"30px"} my={"20px"} textAlign="center" color="salmon" fontWeight="bold">
        Experience
      </Text>
          {experiences.map((experience, index) => (
              <Flex key={index}  width={{base:'100%',md:'60%'}} style={{margin:'auto'}} mb={6} textAlign={"left"}  color={"white"}>
                <Icon as={MdWork} mr={4} color="white"/>
              <Box >
                <Text fontWeight="bold">{experience.position}</Text>
                <Text>{experience.company}</Text>
                <Badge fontSize="sm" border={"2px solid salmon"} bg={"transparent"} textTransform={"none"} p={1} rounded={"lg"} width={"auto"} color="salmon" mt={1}>
                  {experience.duration}
                </Badge>
                <Text mt={2}>{experience.description}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        
      </Flex>
    </Box>
    </Box>
  );
};

export default Experience;