import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  Button,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";
import Link from "next/link";

export default function UserButton({ user }) {
  return (
    <>
      {user && user ? (
        <Link href="/contributor/Profile">
          <UnstyledButton className={classes.user}>
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                radius="xl"
              />

              <div style={{ flex: 1 }}>
                <Text size="sm" fw={500}>
                  Harriette Spoonlicker
                </Text>

                <Text c="dimmed" size="xs">
                  hspoonlicker@outlook.com
                </Text>
              </div>

              <IconChevronRight
                style={{ width: rem(14), height: rem(14) }}
                stroke={1.5}
              />
            </Group>
          </UnstyledButton>
        </Link>
      ) : (
        <>
          <Link href="/auth/Sigin">
            <Button variant="default">Log in</Button>
          </Link>
          <Link href="/auth/Sigup">
            <Button>Sign up</Button>
          </Link>
        </>
      )}
    </>
  );
}
