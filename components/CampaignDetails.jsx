"use client";

import { HStack, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { Container } from "@mantine/core";
import Image from "next/image";

export default function CampaignDetails({ campaign }) {
  const { name, description, startDate, endDate, cause, image } = campaign;

  return (
    <Container
      size={"lg"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        flexShrink: 1,
        margin: "5rem auto",
        gap: "1rem",
      }}
    >
      <div>
        <h1
          style={{
            borderLeft: "10px solid #e63946",
            padding: "0 .5rem",
            fontWeight: 900,
            fontSize: "1.5rem",
            color: "#ef233c",
          }}
        >
          {cause}
        </h1>
        <Text size="lg" style={{ width: "100%", maxWidth: "25rem" }}>
          {description}
        </Text>
        <HStack spacing={4}>
          <Tag size="lg" variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" />
            <TagLabel>Start From: {startDate.toLocaleDateString()}</TagLabel>
          </Tag>
          <Tag size="lg" variant="subtle" colorScheme="green">
            <TagLeftIcon boxSize="12px" />
            <TagLabel>Last Date: {endDate.toLocaleDateString()}</TagLabel>
          </Tag>
        </HStack>
      </div>

      <div style={{ minWidth: "40vw" }}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
            minHeight: "20rem",
          }}
          width={200}
          height={200}
          src={image}
          alt={name}
        />
      </div>
    </Container>
  );
}
