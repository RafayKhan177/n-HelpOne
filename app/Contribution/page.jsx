"use client";

import { sadboy } from "public/sadboy.jpeg";

import { accounts } from "static";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AllBankDetails, ContributionForm, CustomHero } from "components/Index";

export default function Page() {
  const handleContribute = (data) => {
    console.log(data);
  };

  return (
    <>
      <CustomHero />
      <Box
        my={70}
        mx="auto"
        width="90%"
        p={6}
        bg="gray.100"
        borderRadius="xl"
        boxShadow="xl"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Pay This Amount
        </Text>
        <Box p={8} bg="white" borderRadius="xl">
          <ContributionForm onContribute={handleContribute} />
        </Box>
        <Flex mt={8} wrap={"wrap"} justify="space-between">
          <Button colorScheme="blue" size="lg" w={300}>
            Pay with PayPal
          </Button>
          <Button colorScheme="green" size="lg" w={300}>
            Pay with Stripe
          </Button>
        </Flex>
      </Box>
      <AllBankDetails accounts={accounts} />
    </>
  );
}
