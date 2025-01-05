import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineTitle,
  TimelineContent,
  TimelineDescription,
} from "../ui/timeline";
const Biography = memo(() => (
  <Box as="section">
    <Text as="h2" fontWeight="bold" fontSize="28px" color="#fff">
      Biography
    </Text>
    <TimelineRoot
      maxW="400px"
      variant="outline"
      marginTop="10px"
      padding="10px"
    >
      <TimelineItem>
        <TimelineConnector />
        <TimelineContent>
          <TimelineTitle color="#fff" fontSize="20px">
            2004
          </TimelineTitle>
          <TimelineDescription color="#fff" fontSize="18px">
            Born in Toluca, México.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineContent>
          <TimelineTitle color="#fff" fontSize="20px">
            2022 - 2026
          </TimelineTitle>
          <TimelineDescription color="#fff" fontSize="18px">
            I started studying Software Development Engineering at TecMilenio
            University.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  </Box>
));
export default Biography;
