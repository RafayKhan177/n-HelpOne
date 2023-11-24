"use client";

import { motion, useAnimation } from "framer-motion";
import {
  Faq,
  Categories,
  Hero,
  EmailBanner,
  PageHeader,
  About,
} from "../components/Index";
import { categories } from "../static";
import { useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Page() {
  const pageHeaderControls = useAnimation();
  const heroControls = useAnimation();
  const categoriesControls = useAnimation();
  const aboutControls = useAnimation();
  const faqControls = useAnimation();
  const emailBannerControls = useAnimation();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollPosition = scrollY + windowHeight * 0.3;

    // You can adjust these values based on when you want the animations to trigger
    if (scrollPosition > 50) {
      pageHeaderControls.start("visible");
    }
    if (scrollPosition > 150) {
      heroControls.start("visible");
    }
    if (scrollPosition > 500) {
      categoriesControls.start("visible");
    }
    if (scrollPosition > 800) {
      aboutControls.start("visible");
    }
    if (scrollPosition > 1200) {
      faqControls.start("visible");
    }
    if (scrollPosition > 1600) {
      emailBannerControls.start("visible");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial="hidden"
        animate={pageHeaderControls}
        variants={fadeIn}
      >
        <PageHeader text="In a world of uncertainty, your generosity is a beacon of hope." />
      </motion.div>

      <motion.div initial="hidden" animate={heroControls} variants={fadeInUp}>
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={categoriesControls}
        variants={slideInRight}
      >
        <PageHeader text="Our Causes" color="#edf6f9" />
        <Categories categories={categories} />
      </motion.div>

      <motion.div initial="hidden" animate={aboutControls} variants={fadeInUp}>
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={faqControls}
        variants={slideInRight}
      >
        <Faq />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={emailBannerControls}
        variants={fadeInUp}
      >
        <EmailBanner />
      </motion.div>
    </div>
  );
}
