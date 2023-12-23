"use client";

import { useState, useEffect } from "react";
import { getDocById } from "../../api/firebase/functions/get"; // Assuming you have an api service for fetching data
import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import {
  AllBankDetails,
  ContributionForm,
  CustomHero,
  CampaignDetails,
} from "components/Index";
import { usePathname } from "next/navigation";
import { accounts } from "static";

export default function Page() {
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDocById(id, "campaigns");
        setInvoice(res);
      } catch (error) {
        console.error("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleContribute = () => {
    // Implement your contribute logic here
  };

  const { cause, description, image } = invoice;
  const img =
    "https://img.freepik.com/free-photo/person-holding-heart-shaped-object_23-2150703734.jpg?t=st=1701007515~exp=1701011115~hmac=644cb17674f44360f7c3fd9766f1368df2cb079c1671fb2040436e23c6e357ff&w=826";

  console.log(cause);

  return (
    <>
      <CustomHero imgc={img} />
      {loading ? (
        <Spinner size="xs" />
      ) : (
        <CampaignDetails
          title={cause}
          description={description}
          imageUrl={image}
        />
      )}
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
          {cause && cause ? (
            <ContributionForm onContribute={handleContribute} dVal={"cause"} />
          ) : (
            <Spinner size="xs" />
          )}
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
