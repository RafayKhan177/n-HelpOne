"use client";

import React from "react";
import { authorData } from "static";
import ProjectFounderDetails from "components/ProjectFounderDetails";

export default function page() {
  return <ProjectFounderDetails data={authorData} />;
}
