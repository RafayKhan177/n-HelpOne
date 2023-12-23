"use client";
import React, { useEffect, useState } from "react";
import { VStack, Input, Select, Text, Button, Spinner, useToast } from "@chakra-ui/react";
import { getCausees } from "app/api/firebase/functions/get";

const ContributionForm = ({ onContribute, dVal }) => {
  console.log("dVal:", dVal);
  const toast = useToast()
  const [causeValues, setCauseValues] = useState([]);
  const [contribution, setContribution] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    donationFor: dVal || "",
  });

  const handleContributeClick = () => {
    if (!contribution.name || !contribution.email || !contribution.amount) {
      toast({
        title: 'Please fill in all required fields.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return;
    }

    // Clear any previous error
    setError(null);

    // Assuming you want to pass the contribution data to a parent component
    onContribute(contribution);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContribution((prevContribution) => ({
      ...prevContribution,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchCauseValues = async () => {
      const causes = await getCausees("campaigns");
      setCauseValues(causes);
    };

    fetchCauseValues();
  }, []);

  return (
    <VStack spacing={4}>
      <Input
        variant="filled"
        size="md"
        placeholder="Full Name"
        name="name"
        value={contribution.name}
        onChange={handleChange}
        required
      />
      <Input
        variant="filled"
        size="md"
        placeholder="Email"
        name="email"
        type="email"
        value={contribution.email}
        onChange={handleChange}
        required
      />
      <Input
        variant="filled"
        size="md"
        placeholder="Phone"
        name="phone"
        type="tel"
        value={contribution.phone}
        onChange={handleChange}
      />
      <Input
        variant="filled"
        size="md"
        placeholder="Contribution Amount"
        name="amount"
        type="number"
        value={contribution.amount}
        onChange={handleChange}
        required
      />
      {causeValues ? (
        <Select
          variant="filled"
          size="md"
          placeholder="Donations For"
          name="donationFor"
          value={contribution.donationFor}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          {causeValues.map((cause) => (
            <option key={cause} value={cause}>
              {cause}
            </option>
          ))}
        </Select>
      ) : (
        <Spinner size="xs" />
      )}

     

      {/* Display the donation amount below the input */}
      <Text fontSize="lg">Donation Amount: {contribution.amount || 0}$</Text>
      <Button colorScheme="teal" onClick={handleContributeClick}>
        Contribute
      </Button>
    </VStack>
  );
};

export default ContributionForm;
