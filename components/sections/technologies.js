import { memo } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { InformationTechnologies } from "../links";

const Technologies = memo(() => (
  <Box as="section" marginTop="10px">
    <Text as="h2" color="#fff" fontSize="28px" fontWeight="bold">
      Technologies
    </Text>
    <Flex
      textAlign="center"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent="center"
    >
      {InformationTechnologies.map((tech) => (
        <Box key={tech.id} padding="2">
          <Image
            width="100px"
            padding="10px"
            src={tech.src}
            alt={tech.name}
            loading="lazy"
            _hover={{
              transform: "scale(1.2)",
              transition: "all 0.3s ease",
            }}
            transition="all 0.3s ease"
          />
          <Text color="#fff">{tech.name}</Text>
        </Box>
      ))}
    </Flex>
  </Box>
));
export default Technologies;
