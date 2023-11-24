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

  return (
    <TableContainer mt={5}>
      <Table
        variant="simple"
        style={{ borderRadius: "1rem", backgroundColor: "#f1faee" }}
      >
        <TableCaption>Campaign Information</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
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
                <Td>{campaign.name}</Td>
                <Td>{campaign.cause}</Td>
                <Td>{campaign.startDate.toDateString()}</Td>
                <Td>{campaign.endDate.toDateString()}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      router.push(
                        `/admin/CampaignManagement/View/${campaign._id}`
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
            <Th>Name</Th>
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
