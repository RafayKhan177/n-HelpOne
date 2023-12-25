"use client";

import {
  Container,
  Text,
  UnstyledButton,
  Overlay,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Categories.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCollection } from "app/api/firebase/functions/get";
import { Box, Button } from "@chakra-ui/react";

export default function Categories() {
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();

  const nav = (id) => {
    router.push(`/Contribution/${id}`);
  };

  useEffect(() => {
    const getCampaigns = async () => {
      const res = await getCollection("campaigns");
      console.log(res);
      setCampaigns(res);
    };
    getCampaigns();
  }, []);

  const items =
    campaigns &&
    campaigns.map((item) => (
      <Box
        key={item.label}
        display="flex"
        flexDirection="column"
        borderRadius="1rem"
        boxShadow="lg" // Add box shadow
        mb={4} // Adjust margin as needed
      >
        <UnstyledButton
          style={{ backgroundImage: `url(${item.image})` }}
          className={classes.categoryCard}
          onClick={() => nav(item.id)}
        >
          <Overlay color="#000" opacity={0.6} zIndex={1} />
        </UnstyledButton>
        <Box p={4}>
          <Text
            size="xl"
            ta="center"
            fw={700}
            c={"#000"}
            className={classes.categoryLabel}
          >
            {item.cause}
          </Text>
          <Text mt={2} c={"#333"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis
            unde quibusdam quos saepe veniam animi debitis ipsa voluptatibus
            magni.
          </Text>
          <Button
            onClick={() => nav(item.id)}
            bgColor={"#ffb703"}
            size="sm"
            mt={2}
          >
            Donate Now
          </Button>
        </Box>
      </Box>
    ));

  return (
    <Container className={classes.wrapper} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  );
}
