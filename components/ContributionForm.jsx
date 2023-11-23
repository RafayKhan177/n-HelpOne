"use client";
import React, { useState } from "react";
import { VStack, Input, Select, Button, Text } from "@chakra-ui/react";

const ContributionForm = ({ onContribute }) => {
  const [contribution, setContribution] = useState({
    amount: "",
    donationFor: "",
  });

  const handleContributeClick = () => {
    // Assuming you want to pass the contribution data to a parent component
    onContribute(contribution);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContribution((prevContribution) => ({
      ...prevContribution,
      [name]: value,
    }));
    handleContributeClick();
  };

  return (
    <VStack spacing={4}>
      <Input
        variant="filled"
        size="md"
        placeholder="Contribution Amount"
        name="amount"
        type="number"
        value={contribution.amount}
        onChange={handleChange}
      />
      <Select
        variant="filled"
        size="md"
        placeholder="Donations For"
        name="donationFor"
        value={contribution.donationFor}
        onChange={handleChange}
      >
        <option value="Environmental Conservation">
          Environmental Conservation
        </option>
        <option value="Education">Education</option>
        <option value="Water Sanitation">Water Sanitation</option>
      </Select>
      {/* Display the donation amount below the input */}
      <Text fontSize="lg">Donation Amount: {contribution.amount || 0}$</Text>
    </VStack>
  );
};

export default ContributionForm;
