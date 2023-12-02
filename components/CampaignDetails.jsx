// CardComponent.js
import { Box, Image, Text, Flex } from "@chakra-ui/react";

export default function CampaignDetails({ title, description, imageUrl }) {
  return (
    <Flex
      flexWrap={{ base: "wrap", md: "nowrap" }}
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
    >
      {/* Left side */}
      <Box flex={{ base: "1", md: "1" }} mb={{ base: 4, md: 0 }}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Text>{description}</Text>
      </Box>

      {/* Right side */}
      <Box ml={{ base: 0, md: 4 }}>
        <Image
          src={imageUrl}
          alt={title}
          boxSize={{ base: "100%", md: "150px" }}
          objectFit="cover"
          borderRadius="md"
        />
      </Box>
    </Flex>
  );
}