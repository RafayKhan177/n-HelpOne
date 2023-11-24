"use client";
import {
  Button,
  Input,
  Center,
  Box,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { CustomizedBreadcrumbs, StatsGrid } from "components/Index";
import { useState } from "react";

const initialCampaign = {
  id: "60a1e36b716d743b5f8ec6b3",
  name: "Save the Forests",
  description: "Help us protect and preserve the world's forests.",
  currentAmount: 50000,
  startDate: new Date("2023-01-01"),
  endDate: new Date("2023-12-31"),
  cause: "Environmental Conservation",
  image: "https://example.com/save-the-forests.jpg",
  donationProgress: 30,
};

export default function Page() {
  const [campaign, setCampaign] = useState(initialCampaign);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log("Updated Campaign Details:", campaign);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign((prevCampaign) => ({
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
        <Box p={4} borderWidth="1px" borderRadius="lg" bg="white">
          <HStack spacing={4}>
            <Tag size="lg" variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" />
              <TagLabel>Id: {campaign.id}</TagLabel>
            </Tag>
            <Tag size="lg" variant="subtle" colorScheme="green">
              <TagLeftIcon boxSize="12px" />
              <TagLabel>From: {campaign.startDate.toDateString()}</TagLabel>
            </Tag>
            <Tag size="lg" variant="subtle" colorScheme="orange">
              <TagLeftIcon boxSize="12px" />
              <TagLabel>To: {campaign.endDate.toDateString()}</TagLabel>
            </Tag>
            <Tag size="lg" variant="subtle" colorScheme="purple">
              <TagLeftIcon boxSize="12px" />
              <TagLabel>Amount: {campaign.currentAmount}</TagLabel>
            </Tag>
          </HStack>
          <Input
            mt={5}
            variant="filled"
            size="md"
            placeholder="Name"
            name="name"
            value={campaign.name}
            onChange={handleChange}
            isDisabled={!isEditing}
          />
          <Input
            mt={5}
            variant="filled"
            size="md"
            placeholder="Description"
            name="description"
            value={campaign.description}
            onChange={handleChange}
            isDisabled={!isEditing}
          />
          <Input
            mt={5}
            variant="filled"
            size="md"
            placeholder="Goal Amount"
            name="goalAmount"
            value={campaign.goalAmount}
            onChange={handleChange}
            isDisabled={!isEditing}
          />
          {/* Add other fields as needed */}
          {isEditing ? (
            <Button mt={4} onClick={handleSaveClick}>
              Save
            </Button>
          ) : (
            <Button mt={4} onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </Box>
      </Center>
    </Box>
  );
}
