"use client"

import ProjectFounderDetails from "components/ProjectFounderDetails";
import React from "react";
import { projectsData } from "static";

export default function page() {
  return <ProjectFounderDetails data={projectsData} />;
}
