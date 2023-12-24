"use client";

import { Card, Image, Text, Group, Badge, Button } from "@mantine/core";

import classes from "./ProjectCard.module.css";
import { useRouter } from "next/navigation";
import { projectsData } from "static";


const ProjectCard = ({ data, index }) => {
  const { projectName, disc, vid } = data;
  const nav = useRouter();

  return (
    <div style={{ width: "20rem", margin: 10 }}>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          {/* <Image src={image} alt={title} height={180} /> */}

          <iframe
            width="100%"
            height="250"
            src={vid[0].video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {projectName}
            </Text>
          </Group>
          <Text fz="sm" mt="xs">
            {disc}
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button
            radius="md"
            onClick={() => nav.push(`/Projects/${index}`)}
            style={{ flex: 1 }}
          >
            Show details
          </Button>
        </Group>
      </Card>
    </div>
  );
};

export default function App() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "90vw",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {projectsData.map((data, index) => (
          <ProjectCard key={index} data={data} index={index} />
        ))}
      </div>
    </section>
  );
}
