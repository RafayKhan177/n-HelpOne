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
  Popover,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconBook,
  IconChartPie3,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Link from "next/link";
import { useState } from "react";
import UserButton from "../userButton/UserButton";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const mockdata = [
  {
    icon: IconCoin,
    title: "Dashboard",
    description:
      "Get a comprehensive overview of your activities and performance. ",
    link: "/administrator/Dashboard",
  },
  {
    icon: IconBook,
    title: "Campaigns",
    description: "Manage and organize your campaigns with this powerful tool. ",
    link: "/administrator/CampaignManagement",
  },
  {
    icon: IconNotification,
    title: "Access Controls",
    description: "Manage user access and permissions seamlessly.",
    link: "/administrator/UsersAndAccessControls",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "Analyze and visualize data for informed decision-making. ",
    link: "/administrator/FinancialReporting",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Campaigns", label: "Campaigns" },
  { href: "/Zakat", label: "Zakat" },
  { href: "/Contact", label: "Contact" },
  // { href: "/About", label: "About" },
  // { href: "/OurWork", label: "Our Work" },
  // { href: "/WhereWeWork", label: "Where We Work" },
  // { href: "/WhoAreWe", label: "Who Are We" },
];

const about = [
  { href: "/About", label: "About" },
  { href: "/OurWork", label: "Our Work" },
  { href: "/WhereWeWork", label: "Where We Work" },
  { href: "/WhoAreWe", label: "Who Are We" },
];

export default function HeaderMenu() {
  const nav = useRouter();
  const [user, setUser] = useState("admin");

  const push = (url) => {
    nav.push(url);
  };

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
    <Box pb={0} style={{ overflow: "hidden" }}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          <Link href="/">
            <Image src="/logo.jpg" width={50} height={50} alt="logo" />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className={classes.link}>
                {link.label}
              </Link>
            ))}

            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Link className={classes.link} href={"#"}>
                  About Us
                </Link>
              </Popover.Target>
              <Popover.Dropdown>
                {about.map((link) => (
                  <Button
                    w={"100%"}
                    mt={10}
                    style={{ position: "a" }}
                    key={link}
                    onClick={() => push(link.href)}
                  >
                    {link.label}
                  </Button>
                ))}
              </Popover.Dropdown>
            </Popover>

            {user === "admin" ? (
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Center inline>
                    <Box className={classes.link} component="span" mx={5}>
                      Manage
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor fz="xs">View all</Anchor>
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
        title="ALBASHIR"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(90vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
          {about.map((link, index) => (
            <Link key={index} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
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
        </ScrollArea>
        <Divider my="sm" />
        <Group justify="center" grow pb="xl" px="md">
          <UserButton user={user} />
        </Group>
      </Drawer>
    </Box>
  );
}
