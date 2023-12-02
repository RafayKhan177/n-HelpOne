// Import necessary libraries
import React from "react";
import { Box, Heading, Text, Stack, List, ListItem } from "@chakra-ui/react";
import { Categories } from "./Index";

// Define the OurWork component
const OurWork = () => {
  return (
    <Box p={8} m={"5%"} bg="gray.100" borderRadius="lg" boxShadow="md">
      <Heading mb={4} fontSize="2xl" fontWeight="bold" color="teal.600">
        Our Work
      </Heading>
      <Text fontSize="lg" lineHeight="tall" color="gray.700">
        We span a broad range of activities, bringing life-saving assistance in
        emergencies and supporting sustainable and resilient livelihoods to
        achieve a world with zero hunger.
      </Text>
      <Stack mt={8} spacing={4}>
        <Box>
          <Text fontSize="lg" fontWeight="bold" color="teal.600">
            Work Categories
          </Text>
          <Categories />
        </Box>
      </Stack>
    </Box>
  );
};

export default OurWork;
