"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Faq,
  Categories,
  Hero,
  EmailBanner,
  PageHeader,
  About,
  ProjectCard,
  AuthorCards,
  ContributionCard,
  Grids,
  News,
  OurWorkPicCollage,
} from "components/Index";
import { getCollection } from "./api/firebase/functions/get";
import { Skeleton } from "@chakra-ui/react";

export default function Page() {
  const [founders, setFounders] = useState(null);
  const [projects, setProjects] = useState(null);

  console.log(founders, projects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foundersData = await getCollection("founders");
        const projectsData = await getCollection("projects");
        setFounders(foundersData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures the effect runs only once, equivalent to componentDidMount

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PageHeader text="Our Causes" />
        {founders ? <Categories /> : <Skeleton height="10rem" width="100%" />}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PageHeader text="Opposite Of Poverty Is Justice" />
      </motion.div>

      <Grids />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PageHeader text="We're proud of what we've built with you!" />
        {projects ? (
          <ProjectCard data={projects} />
        ) : (
          <Skeleton height="20px" width="50%" />
        )}
      </motion.div>

      <div style={{ marginTop: 10 }}>
        <About />
      </div>

      <div>
        <PageHeader text="Our Projects Founders" />
        {founders ? (
          <AuthorCards data={founders} />
        ) : (
          <Skeleton height="20px" width="50%" />
        )}
      </div>

      <News />

      <ContributionCard />

      <OurWorkPicCollage />

      <div>
        <Faq />
      </div>

      <div>
        <EmailBanner />
      </div>
    </motion.div>
  );
}
