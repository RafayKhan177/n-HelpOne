// Import necessary libraries
import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Badge,
  List,
  ListItem,
} from "@chakra-ui/react";

// Define the WhereWeWork component
const WhereWeWork = () => {
  const countries = [
    "Afghanistan",
    "Algeria",
    "Angola",
    "Armenia",
    "Bangladesh",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "The Caribbean",
    "Central African Republic",
    "Chad",
    "China",
    "Colombia",
    "Congo",
    "Cuba",
    "Côte d'Ivoire",
    "Democratic Republic of the Congo",
    "Djibouti",
    "Dominican Republic",
    "DPR Korea",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Eswatini",
    "Ethiopia",
    "Gambia",
    "Ghana",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Haiti",
    "Honduras",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Jordan",
    "Kenya",
    "Kyrgyz Republic",
    "Laos",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Moldova",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "The Pacific",
    "Pakistan",
    "Palestine",
    "Peru",
    "Philippines",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Sierra Leone",
    "Somalia",
    "South Sudan",
    "Sri Lanka",
    "Sudan",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Timor-Leste",
    "Togo",
    "Tunisia",
    "Türkiye",
    "Uganda",
    "Ukraine",
    "Venezuela",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const emergencies = [
    "Afghanistan emergency",
    "Central Sahel emergency",
    "Democratic Republic of the Congo emergency",
    "Ethiopia emergency",
    "Global food crisis",
    "Haiti emergency",
    "Myanmar emergency",
    "North Eastern Nigeria emergency",
    "Somalia emergency",
    "Southern Madagascar emergency",
    "South Sudan emergency",
    "State of Palestine emergency",
    "Sudan emergency",
    "Syria emergency",
    "Ukraine emergency",
    "Yemen emergency",
  ];

  const getRandomColor = () => {
    const colors = [
      "teal",
      "green",
      "blue",
      "cyan",
      "purple",
      "pink",
      "orange",
      "red",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <Box p={8} m={"5%"} bg="gray.100" borderRadius="lg" boxShadow="md">
      <Heading mb={4} fontSize="2xl" fontWeight="bold" color="teal.600">
        Where We Work
      </Heading>

      <Text fontSize="lg" lineHeight="tall" color="gray.700">
        We work in 123 countries and territories, combining emergency assistance
        with long-term development while adapting our activities to the context
        and challenges of each location and its people.
      </Text>

      <Stack mt={8} spacing={4}>
        <Box>
          <Text fontSize="lg" fontWeight="bold" color="teal.600">
            Countries
          </Text>
          <List style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
            {countries.map((country, index) => (
              <ListItem key={index}>
                <Badge colorScheme={getRandomColor()}>{country}</Badge>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" color="teal.600">
            Emergencies
          </Text>
          <List style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
            {emergencies.map((emergency, index) => (
              <ListItem key={index}>
                <Badge colorScheme={getRandomColor()}>{emergency}</Badge>
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

export default WhereWeWork;
