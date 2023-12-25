import React from "react";
import { Card, Text, Group, useMantineTheme } from "@mantine/core";
import classes from "./authorCards.module.css";
import { Box, Container } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function AuthorCards({ data }) {
  return (
    <section
      size="lg"
      style={{
        margin: "3rem 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 20,
      }}
    >
      {data &&
        data.map((authorData, index) => {
          const { img, authorName, bio } = authorData;
          return (
            <Box
              key={index}
              // boxShadow="lg"
              // p={4}
              borderRadius="md"
            >
              <Card
                w={300}
                p="lg"
                shadow="lg"
                className={classes.card}
                radius="md"
                component="a"
                href={`/founders/${index}`}
              >
                <div
                  className={classes.image}
                  style={{ backgroundImage: `url(${img[0].image})` }}
                />
                <div className={classes.overlay} />

                <div className={classes.content}>
                  <div>
                    <Text size="lg" className={classes.title} fw={500}>
                      {authorName}
                    </Text>

                    <Group justify="space-between" gap="xs">
                      <Text size="sm" className={classes.author}>
                        {bio && bio.length > 70
                          ? `${bio.slice(0, 70)}...`
                          : bio}
                      </Text>
                    </Group>
                  </div>
                </div>
              </Card>
            </Box>
          );
        })}
    </section>
  );
}
