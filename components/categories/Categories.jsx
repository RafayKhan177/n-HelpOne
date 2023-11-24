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

export default function Categories() {
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();

  const nav = () => {
    router.push("/contributor/Contribution");
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
      <UnstyledButton
        style={{ backgroundImage: `url(${item.image})` }}
        className={classes.categoryCard}
        key={item.label}
        onClick={nav}
      >
        <Overlay color="#000" opacity={0.6} zIndex={1} />
        <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
          {item.cause}
        </Text>
      </UnstyledButton>
    ));

  return (
    <Container className={classes.wrapper} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  );
}
