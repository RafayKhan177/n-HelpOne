"use client";

import {
  Box,
  Button,
  Center,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { StatsGrid, CustomizedBreadcrumbs } from "components/Index";
import { useState } from "react";

export default function Page() {
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    description: "",
    currentAmount: 0,
    startDate: new Date().toISOString().substring(0, 16), // Initialize with current date and time
    endDate: new Date().toISOString().substring(0, 16),
    cause: "",
    image: "",
    donationProgress: 0,
  });

  const handleCreateClick = () => {
    // Assuming you want to pass the new campaign data to a parent component
    // onCreateCampaign(newCampaign);
    console.log(newCampaign);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign((prevCampaign) => ({
      ...prevCampaign,
      [name]: value,
    }));
  };

  return (
    <Box mx="auto" width="90%">
      <StatsGrid />
      <CustomizedBreadcrumbs
        link={"#"}
        name={"Campaigns"}
        link2={"#"}
        name2={"Campaigns"}
      />
      <Center h="60vh">
        <Box
          mt={200}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          bg="white"
          width="100%"
        >
          <VStack spacing={4}>
            <Input
              variant="filled"
              size="md"
              placeholder="Name"
              name="name"
              value={newCampaign.name}
              onChange={handleChange}
            />
            <Textarea
              variant="filled"
              size="md"
              placeholder="Description"
              name="description"
              value={newCampaign.description}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Current Amount"
              name="currentAmount"
              type="number"
              value={newCampaign.currentAmount}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Start Date"
              name="startDate"
              type="datetime-local"
              value={newCampaign.startDate}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="End Date"
              name="endDate"
              type="datetime-local"
              value={newCampaign.endDate}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Cause"
              name="cause"
              value={newCampaign.cause}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Image URL"
              name="image"
              value={newCampaign.image}
              onChange={handleChange}
            />
            <Button onClick={handleCreateClick}>Create Campaign</Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}