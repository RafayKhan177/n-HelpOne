"use client";

import { Center } from "@chakra-ui/react";
import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import Image from "next/image";

const initialCampaign = {
  id: "60a1e36b716d743b5f8ec6b3",
  name: "Save the Forests",
  description: "Help us protect and preserve the world's forests.",
  currentAmount: 50000,
  startDate: new Date("2023-01-01"),
  endDate: new Date("2023-12-31"),
  cause: "Environmental Conservation",
  image: "https://example.com/save-the-forests.jpg",
  donationProgress: 30,
};

const PRIMARY_COL_HEIGHT = rem(300);

export default function Page() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Image
          style={{
            height: PRIMARY_COL_HEIGHT,
            width: "100%",
            objectFit: "cover",
            borderRadius: ".5rem",
          }}
          src="/campaign.webp"
          alt="Poster"
          width={200}
          height={200}
        />
        <Grid gutter="md">
          <Grid.Col>
            <div
              style={{
                height: SECONDARY_COL_HEIGHT,
                borderRadius: ".5rem",
                backgroundColor: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Center>
                <h1>Pay 100$ via</h1>
              </Center>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              style={{
                height: SECONDARY_COL_HEIGHT,
                width: "100%",
                objectFit: "contain",
                borderRadius: ".5rem",
              }}
              src="/stripe_logo.png"
              alt="Poster"
              width={200}
              height={200}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              style={{
                height: SECONDARY_COL_HEIGHT,
                width: "100%",
                objectFit: "contain",
                borderRadius: ".5rem",
              }}
              src="/paypal_logo.jpg"
              alt="Poster"
              width={200}
              height={200}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
