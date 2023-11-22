import React from 'react';
import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(370);

const img = "https://images.unsplash.com/photo-1620990943104-e9e26b7d2442?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const items = [
  { pic: img, link: "#" },
  { pic: img, link: "#" },
  { pic: img, link: "#" },
  { pic: img, link: "#" }
];

export default function Carousel() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="lg">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          {items.map((item, index) => (
            <Grid.Col key={index}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          ))}
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
