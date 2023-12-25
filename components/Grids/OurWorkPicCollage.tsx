import React from "react";
import {
  SimpleGrid,
  Container,
  Stack,
  useMantineTheme,
  px,
  Title,
} from "@mantine/core";
import { Image, Text } from "@chakra-ui/react";

const BASE_HEIGHT = 360;

export default function OurWorkPicCollage() {
  const theme = useMantineTheme();

  return (
    <Container
      size="lg"
      my="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title order={2} mt="sm" style={{ margin: "auto" }}>
        Real Faces, Real Impact
      </Title>
      <Text py={10} align="center" mt="sm">
        Explore the smiles and stories of the individuals whose lives have been
        touched by your generous donations.
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        <Image
          src="https://img.freepik.com/free-photo/medium-shot-kids-sitting-outdoors_23-2148761579.jpg?w=996&t=st=1703512887~exp=1703513487~hmac=1f2fba8fda890e495ae5286a83eebe6feb958f8fa019bb08b868f47a15c4d4fa"
          alt="Work Image 1"
          style={{
            width: "100%",
            objectFit: "cover",
            height: BASE_HEIGHT,
            borderRadius: "1rem",
          }}
        />
        <Stack>
          <Image
            src="https://img.freepik.com/free-photo/kids-having-fun-as-boy-scouts_23-2149657072.jpg?t=st=1703512296~exp=1703512896~hmac=bcb2952fe9b47efbc2c9371a992d2148877cdbf7ee4fbf5efda4c70862ac8f2f"
            alt="Work Image 2"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 2 - px(theme.spacing.md),
            }}
          />
          <Image
            src="https://img.freepik.com/free-photo/poor-child-landfill-looks-forward-with-hope_1150-10378.jpg?t=st=1703512879~exp=1703513479~hmac=a3955f78b2777e3f5b90b3e9cf8a78f4932256f62a70111c4ca952960424f9c5"
            alt="Work Image 3"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 2 - px(theme.spacing.md),
            }}
          />
        </Stack>
        <Stack>
          <Image
            src="https://img.freepik.com/premium-photo/poor-child-doing-his-homework-street-light_75648-769.jpg?w=996"
            alt="Work Image 4"
            style={{
              width: "100%",
              borderRadius: "1rem",

              objectFit: "cover",
              height: BASE_HEIGHT / 3 - px(theme.spacing.md),
            }}
          />
          <Image
            src="https://img.freepik.com/free-photo/kids-having-fun-as-boy-scouts_23-2149657072.jpg?t=st=1703512296~exp=1703512896~hmac=bcb2952fe9b47efbc2c9371a992d2148877cdbf7ee4fbf5efda4c70862ac8f2f"
            alt="Work Image 5"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 3 - px(theme.spacing.md),
            }}
          />
          <Image
            src="https://img.freepik.com/free-photo/kids-having-fun-as-boy-scouts_23-2149657072.jpg?t=st=1703512296~exp=1703512896~hmac=bcb2952fe9b47efbc2c9371a992d2148877cdbf7ee4fbf5efda4c70862ac8f2f"
            alt="Work Image 6"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 3 - px(theme.spacing.md),
            }}
          />
        </Stack>
        <Image
          src="https://img.freepik.com/free-photo/kids-having-fun-as-boy-scouts_23-2149657072.jpg?t=st=1703512296~exp=1703512896~hmac=bcb2952fe9b47efbc2c9371a992d2148877cdbf7ee4fbf5efda4c70862ac8f2f"
          alt="Work Image 7"
          style={{
            width: "100%",
            objectFit: "cover",
            height: BASE_HEIGHT,
            borderRadius: "1rem",
          }}
        />
      </SimpleGrid>
    </Container>
  );
}
