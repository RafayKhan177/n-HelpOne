"use client"

import { Box, ChakraProvider, Container, extendTheme, Image, Text } from "@chakra-ui/react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const img = "https://img.freepik.com/free-photo/front-view-people-celebrating-christmas_23-2150977060.jpg?t=st=1703342271~exp=1703345871~hmac=30ae2a00240ff09a36456420d6bba6d444477941eeeed851732da8fc85d578eb&w=740"


const carouselData = [
  {
    type: "image",
    content:img,
    description: "Description for Image 1",
  },
  {
    type: "youtube",
    content: "https://www.youtube.com/embed/dpu2fCo5n50",
    description: "Description for YouTube Video 1",
  },
  {
    type: "image",
    content:img,
    description: "Description for Image 2",
  },
  {
    type: "youtube",
    content: "https://www.youtube.com/embed/dpu2fCo5n50",
    description: "Description for YouTube Video 2",
  },
];


const CarouselPage = () => {
  return (
      <Container maxW="100%" mx="auto">
         <AwesomeSlider style={{ background: img, backgroundSize: 'cover' }}>
          {carouselData.map((item, index) => (
            <Box key={index}>
              {item.type === "image" && <Image src={item.content} alt={`Image ${index + 1}`} />}
              {item.type === "youtube" && (
                <iframe
                  width="900"
                  height="500"
                  src={item.content}
                  title={`YouTube Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              <Text mt={4} fontSize="lg">
                {item.description}
              </Text>
            </Box>
          ))}
        </AwesomeSlider>
      </Container>
  );
};

export default CarouselPage;
