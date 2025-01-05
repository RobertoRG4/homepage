import Link from "next/link";
import { memo } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
const Header = memo(() => (
  <Box as="section">
    <Box as="header">
      <Text as="h1" fontSize="35px" fontWeight="bold" color="#fff">
        Hi, I'm Roberto, a Front-End Developer.
      </Text>
    </Box>
    <Box marginTop="20px">
      <Text as="p" fontWeight="bold" color="#fff">
        I am a dedicated student with a strong academic foundation and
        certifications in Front-End development. I have hands-on experience
        solving technical challenges using modern technologies like React and
        Next.js. My focus is on building efficient, user-friendly, and scalable
        interfaces that deliver a seamless experience. Driven by a passion for
        innovation, I strive to make a meaningful impact in every project I
        contribute to.
      </Text>
    </Box>
    <Flex justifyContent="center" marginTop="20px">
      <Button
        as={Link}
        href="/works"
        width="150px"
        fontWeight="bold"
        aria-label="View my portfolio works"
      >
        See my works.
      </Button>
    </Flex>
  </Box>
));
export default Header;
