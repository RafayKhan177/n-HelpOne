"use client";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import { PageHeader } from "components/Index";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useEffect, useState } from "react";

export default function ProjectFounderDetails({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const sliderStyle = {
    width: "70vw",
    height: "70vh",
    overflow: "hidden",
    borderRadius: "2rem",
    margin: "3rem auto",
  };

  const [authorNo, setAuthorNo] = useState(0);
  const item = data[authorNo];

  useEffect(() => {
    const successStatus = async () => {
      try {
        const url = new URL(window.location.href);
        const id = url.pathname.split("/").pop();
        setAuthorNo(id);
      } catch (error) {
        setLoading(false); // Set loading to false in case of an error
      }
    };

    successStatus();
  }, []);

  return (
    <Container maxW="100%" mx="auto">
      <AwesomeSlider
        selected={currentIndex}
        onTransitionEnd={handleSlideChange}
        style={sliderStyle}
      >
        {item.img.map((img, index) => (
          <Box key={index}>
            <Box>
              <Image src={img.image} alt={`Image ${index + 1}`} />
            </Box>
          </Box>
        ))}
      </AwesomeSlider>

      <PageHeader text="More About This" />

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          gap: "20",
          margin: "3rem 0rem",
        }}
      >
        {item.vid.map((vid, index) => (
          <Box key={index} m={3} w={350}>
            <Box borderRadius="lg" overflow="hidden">
              <iframe
                style={{ width: "100%", minHeight: "30vh" }}
                src={vid.video}
                title={`YouTube Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        ))}
      </section>

      {/* New Section for Name and Biography */}
      <Box
        mt={8}
        textAlign="left"
        style={{ borderLeft: ".5rem solid #0077b6" }}
        pl={3}
      >
        <Text fontSize="2xl" fz="lg" fw={500} fontWeight="bold" style={{}}>
          {item.projectName || item.authorName}
        </Text>
        <Text mt={4} fontSize="lg">
          {item.bio || item.disc}
        </Text>
      </Box>
    </Container>
  );
}
