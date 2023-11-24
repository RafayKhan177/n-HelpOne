"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

const MyProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <Box
      py={5}
      px={10}
      maxW="md"
      mx="auto"
      borderRadius="lg"
      boxShadow="lg"
      bg="#f1faee"
      my={10}
    >
      <Heading mb={5}>My Account</Heading>
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            variant="outline"
            colorScheme="whiteAlpha"
            size="md"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            variant="outline"
            colorScheme="whiteAlpha"
            size="md"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            variant="outline"
            colorScheme="whiteAlpha"
            size="md"
            placeholder="Full Name"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Bio</FormLabel>
          <Textarea
            variant="outline"
            colorScheme="whiteAlpha"
            size="md"
            placeholder="Bio"
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
      </VStack>
      <Button mt={4} onClick={isEditing ? handleSaveClick : handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </Button>
    </Box>
  );
};

export default MyProfile;