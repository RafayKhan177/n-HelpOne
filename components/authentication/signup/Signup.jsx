"use client";

import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import classes from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} mt={0}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to us!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Register
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Link href="#">
            {/* <Anchor fw={700} onClick={(event) => event.preventDefault()}> */}
              Login
            {/* </Anchor> */}
          </Link>
        </Text>
      </Paper>
    </div>
  );
}
