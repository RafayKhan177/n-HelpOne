"use client";

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Link from "next/link";
import { useState } from "react";
import UserButton from "../userButton/UserButton";

const mockdata = [
  {
    icon: IconCoin,
    title: "Dashboard",
    description:
      "Get a comprehensive overview of your activities and performance. ",
    link: "/admin/Dashboard",
  },
  {
    icon: IconCode,
    title: "Campaigns",
    description: "Manage and organize your campaigns with this powerful tool. ",
    link: "/admin/CampaignManagement",
  },
  {
    icon: IconBook,
    title: "Donor Information",
    description: "Efficiently handle donor information and interactions.",
    link: "/admin/DonorManagement",
  },
  {
    icon: IconNotification,
    title: "Access Controls",
    description: "Manage user access and permissions seamlessly.",
    link: "/admin/UsersAndAccessControls",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "Analyze and visualize data for informed decision-making. ",
    link: "/admin/FinancialReporting",
  },
];

export default function HeaderMenu() {
  const [user, setUser] = useState("admin");

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <Link style={{ textDecoration: "none" }} href={item.link} key={item.title}>
      <UnstyledButton className={classes.subLink}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          <p>Logo will show here</p>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="#" className={classes.link}>
              Home
            </Link>

            {user === "admin" ? (
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Link href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Manage
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </Link>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Wellcome Back
                        </Text>
                        <Text size="xs" c="dimmed">
                          You are logged in as Administrater
                        </Text>
                      </div>
                      <Button variant="default">Go Dashboard</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            ) : null}
            <Link href="#" className={classes.link}>
              About
            </Link>
            <Link href="#" className={classes.link}>
              Contact
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <UserButton user={user} />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          {user === "admin" ? (
            <>
              <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Manage
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened}>{links}</Collapse>
            </>
          ) : null}
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <UserButton user={user} />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
