import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  About,
  ContributionCard,
  OurWork,
  WhereWeWork,
  WhoAreWe,
} from "components/Index";

export default function Page() {
  return (
    <>
      <About /> <br />
      <br />
      <Box p={8}>
        <Tabs isFitted variant="enclosed" colorScheme="teal">
          <TabList m={"6%"} mb="1em">
            <Tab>Who Are We</Tab>
            <Tab>Where We Work</Tab>
            <Tab>Our Work</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <WhoAreWe />
            </TabPanel>
            <TabPanel>
              <WhereWeWork />
            </TabPanel>
            <TabPanel>
              <OurWork />
            </TabPanel>
            {/* Add more TabPanels corresponding to the tabs above */}
          </TabPanels>
        </Tabs>
      </Box>
      <ContributionCard />
    </>
  );
}
