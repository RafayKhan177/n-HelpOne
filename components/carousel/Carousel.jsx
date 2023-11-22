import React from "react";
import { Container, SimpleGrid, Grid, rem } from "@mantine/core";
import Item from "./Item";

const PRIMARY_COL_HEIGHT = rem(300);

const img =
  "https://images.unsplash.com/photo-1620990943104-e9e26b7d2442?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const items = [
  { pic: img, link: "#" },
  { pic: img, link: "#" },
  { pic: img, link: "#" },
  { pic: img, link: "#" },
];

const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

const Carousel = () => {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Item
          data={items[0]}
          height={PRIMARY_COL_HEIGHT}
          radius="md"
          animate={false}
        />
        <Grid gutter="md">
          <Grid.Col>
            <Item
              data={items[1]}
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Item
              data={items[2]}
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Item
              data={items[3]}
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Carousel;
