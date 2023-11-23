"use client";

import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>WE CAN HELP SOMEONE</Title>

        <Container size={700}>
          <Text size="lg" className={classes.description}>
            Amidst the chaos and challenges that life throws our way, there
            exists an unwavering human spirit, a profound capacity for empathy
            and compassion. It is this spirit that drives us to reach out to
            others, to extend a helping hand, to offer solace and support to
            those in need
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
}
