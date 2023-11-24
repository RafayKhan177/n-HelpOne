"use client";
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Campaigns = ({ campaigns }) => {
  const router = useRouter();

  const formattedDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleString("en-GB", options);
  };

  return (
    <TableContainer mt={5}>
      <Table
        variant="simple"
        style={{ borderRadius: "1rem", backgroundColor: "#f1faee" }}
      >
        <TableCaption>Campaign Information</TableCaption>
        <Thead>
          <Tr>
            <Th>Cause</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {campaigns &&
            campaigns.map((campaign) => (
              <Tr key={campaign._id}>
                <Td>{campaign.cause}</Td>
                <Td>{formattedDate(campaign.startDate)}</Td>
                <Td>{formattedDate(campaign.endDate)}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      router.push(
                        `/administrator/CampaignManagement/View/${campaign.id}`
                      );
                    }}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Cause</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>View</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Campaigns;
