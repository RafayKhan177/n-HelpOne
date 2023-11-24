"use client";

import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
} from "@chakra-ui/react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import {
  Campaigns,
  StatsGrid,
} from "../../../components/Index";
import { dummyCampaigns } from "../../../static";
import Link from "next/link";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = dummyCampaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box mx="auto" width="90%">
      <StatsGrid />

      <section style={{ margin: "2rem" }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchTwoToneIcon color="#a8dadc" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link
            href="/CampaignManagement/Create"
            style={{ textDecoration: "none" }}
          >
            <Button colorScheme="blue" ml={5}>
              Create
            </Button>
          </Link>
        </InputGroup>
        <Campaigns campaigns={filteredCampaigns} />
      </section>
    </Box>
  );
}
