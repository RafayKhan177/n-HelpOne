import { Text, Title, TextInput, Button, Container } from "@mantine/core";
import classes from "./Email.module.css";
import Image from "next/image";

export default function EmailBanner() {
  return (
    <Container size={"lg"}>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Wait a minute...</Title>
          <Text fw={500} fz="lg" mb={5}>
            Subscribe to our newsletter!
          </Text>
          <Text fz="sm" c="dimmed">
            You will never miss important product updates, latest news and
            community QA sessions. Our newsletter is once a week, every Sunday.
          </Text>

          <div className={classes.controls}>
            <TextInput
              placeholder="Your email"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            />
            <Button className={classes.control}>Subscribe</Button>
          </div>
        </div>
        <Image
          alt="News"
          width={500}
          height={500}
          src="/empathy-friends-help.webp"
          className={classes.image}
        />
      </div>
    </Container>
  );
}
