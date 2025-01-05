import { memo } from "react";
import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import { SocialLinks } from "../links";
import Link from "next/link";
const Social = memo(() => (
  <Box as="section" marginTop="10px" marginBottom="10px">
    <Text as="h2" color="#fff" fontSize="28px" fontWeight="bold">
      My Links
    </Text>
    <Flex justify="center" gap="20px" flexWrap={{ base: "wrap", md: "nowrap" }}>
      {SocialLinks.map((element) => (
        <Button
          key={element.id}
          as={Link}
          target="_blank"
          href={element.href}
          backgroundColor="transparent"
        >
          <Image width="50px" src={element.src} alt={element.alt} />
        </Button>
      ))}
    </Flex>
  </Box>
));
export default Social;
