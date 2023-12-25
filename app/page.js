"use client";
import { motion, useAnimation } from "framer-motion";
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
} from "components/Index";
import { authorData } from "static";

export default function Page() {
  const controls = useAnimation();

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      > */}
      <Hero />
      {/* </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PageHeader text="Our Causes" />
        <Categories />
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
        <ProjectCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PageHeader text="Our Projects Founders" />
        <AuthorCards data={authorData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>

      <ContributionCard />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Faq />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <EmailBanner />
      </motion.div>
    </motion.div>
  );
}
