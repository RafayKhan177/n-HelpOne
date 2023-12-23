"use client";
// Import necessary components and libraries
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function ContributionCard() {
  const router = useRouter();

  const redirectToDonatePage = () => {
    // Redirect to the donation page
    router.push("/Contribution");
  };

  const img =
    "https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Box
      mb={40}
      maxW={{ base: "90%", sm: "90%", md: "90%", lg: "lg" }}
      mx="auto"
      w={"lg"}
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
      position="relative"
    >
      {/* Ensure the Image component takes up its full height */}
      <Image
        src={img}
        alt="Contribute Image"
        w="100%" // Set width to 100%
        h="200px"
        objectFit="cover"
      />
      <Box p={6}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Support Our Cause
        </Text>
        <Text color="gray.600" mb={4}>
          Your contribution can make a difference. Support our mission for a
          better world.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          mt={4}
          onClick={redirectToDonatePage}
          position="absolute"
          bottom="4"
          right="4"
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );
}
