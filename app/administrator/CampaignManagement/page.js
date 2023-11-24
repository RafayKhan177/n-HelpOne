"use client";

import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
} from "@chakra-ui/react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Campaigns, StatsGrid } from "../../../components/Index";
import Link from "next/link";
import { getCollection } from "app/api/firebase/functions/get";

export default function Page() {
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.cause.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const getCampaigns = async () => {
      const res = await getCollection("campaigns");
      if (res !== false) {
        setCampaigns(res);
      }
    };
    getCampaigns();
  }, []);

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
            href="/administrator/CampaignManagement/Create"
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
