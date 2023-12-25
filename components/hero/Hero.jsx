"use client";

import cx from "clsx";
import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  Box,
  Center,
} from "@mantine/core";
import classes from "./Hero.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { ContributionCard } from "components/Index";

export default function Hero() {
  const router = useRouter();

  const nav = (path) => {
    router.push(path);
  };

  return (
    <div>
      <Image
        src={"/hero.jpg"}
        alt="hero-image"
        width={1000}
        height={1000}
        style={{ width: "100vw", height: "auto" }}
      />
    </div>
  );
}

{
  /* <div className={classes.inner} style={{ width: "99vw" }}> */
}
{
  /* <Title className={classes.title}>WE CAN HELP SOMEONE</Title> */
}

{
  /* <Center
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      maxHeight: "50rem",
    }}
  >
    <div>
      <Text
        size="lg"
        className={classes.description}
        style={{
          width: "30rem",
          margin: 0,
          padding: 0,
          maxWidth: "90vw",
        }}
      >
        Amidst the chaos and challenges that life throws our way, there
        exists an unwavering human spirit, a profound capacity for empathy
        and compassion. It is this spirit that drives us to reach out to
        others, to extend a helping hand, to offer solace and support to
        those in need. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Laboriosam minima voluptatem perspiciatis animi doloremque
        voluptas labore! Possimus, impedit labore? Consequuntur?
      </Text>
    </div>
    <div style={{ marginTop: 120, maxWidth: "90vw" }}>
      <ContributionCard />
    </div>
  </Center> */
}
{
  /* </div> */
}
