"use client";
import Technologies from "../components/technologies";
import { motion } from "framer-motion";
import { Box, Container, Text, Button, Flex, Image } from "@chakra-ui/react";
import {
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
} from "../components/ui/breadcrumb";
import {
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineTitle,
  TimelineContent,
  TimelineDescription,
} from "../components/ui/timeline";
import RenderIsland from "../components/models/renderIsland";
import Island from "../components/models/island";
import Link from "next/link";
import SocialLinks from "../components/socialLinks";
import Links from "../components/links";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box position="relative" height="100vh">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          zIndex={0}
        >
          <RenderIsland
            fov={30}
            coords={[-100, -700, 0]}
            camera={[370, 0, 500]}
          >
            <Island />
          </RenderIsland>
        </Box>
        <Container
          as="div"
          flexDirection="column"
          maxW="5/12"
          zIndex={2}
          position="relative"
          paddingLeft={{ base: "20px", md: "30px" }}
          paddingRight={{ base: "20px", md: "30px" }}
          overflowY="scroll"
          height="100vh"
        >
          <Box paddingY="50px">
            <BreadcrumbRoot size="lg">
              <BreadcrumbCurrentLink
                color="#fff"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
              >
                Home
              </BreadcrumbCurrentLink>
            </BreadcrumbRoot>
          </Box>

          <Box as="main">
            <Box as="section">
              <Box as="header">
                <Text
                  as="h1"
                  fontSize="35px"
                  fontWeight="bold"
                  color="#fff"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                >
                  Hi, I'm Roberto, a Front-End Developer.
                </Text>
              </Box>
              <Box
                bg="rgba(0, 0, 0, 0.2)"
                borderRadius="lg"
                p="5"
                border="1px solid rgba(0, 0, 0, 0.4)"
                marginTop="20px"
              >
                <Text
                  as="p"
                  fontWeight="bold"
                  color="#fff"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                >
                  I am a student with a solid academic background and
                  certifications in Front-End development. I have experience in
                  solving technical problems using technologies like React and
                  Next JS. My focus is on creating efficient, engaging, and
                  scalable interfaces. Passionate about innovation, I always
                  strive to make a meaningful contribution to every project.
                </Text>
              </Box>
              <Flex justifyContent="center" marginTop="20px">
                <Button as={Link} href="/works" width="150px" fontWeight="bold">
                  See my works.
                </Button>
              </Flex>
            </Box>

            <Box as="section">
              <Text
                as="h2"
                fontWeight="bold"
                fontSize="28px"
                color="#fff"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
              >
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
                    <TimelineTitle
                      color="#fff"
                      textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                      fontSize="20px"
                    >
                      2004
                    </TimelineTitle>
                    <TimelineDescription
                      color="#fff"
                      textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                      fontSize="18px"
                    >
                      Born in Toluca, México.
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineConnector />
                  <TimelineContent>
                    <TimelineTitle
                      color="#fff"
                      textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                      fontSize="20px"
                    >
                      2022 - 2026
                    </TimelineTitle>
                    <TimelineDescription
                      color="#fff"
                      textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                      fontSize="18px"
                    >
                      I started studying Software Development Engineering at
                      TecMilenio University.
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              </TimelineRoot>
            </Box>

            <Box as="section" marginTop="10px">
              <Text
                as="h2"
                color="#fff"
                fontSize="28px"
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
              >
                Technologies
              </Text>
              <Flex textAlign="center">
                {Technologies.map((element, index) => (
                  <Box key={index}>
                    <Image
                      width="100px"
                      padding="10px"
                      src={element.src}
                      alt={element.name}
                      _hover={{
                        transform: "scale(1.2)",
                        transition: "all 0.3s ease",
                      }}
                      transition="all 0.3s ease"
                    />
                    <Text
                      color="#fff"
                      textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                    >
                      {element.name}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>

            <Box as="section" marginTop="10px">
              <Text
                as="h2"
                color="#fff"
                fontSize="28px"
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
              >
                My Links
              </Text>
              <Flex justify="center" wrap="wrap" gap="10px">
                {SocialLinks.map((element, index) => (
                  <Links src={element.src} href={element.href} />
                ))}
              </Flex>
            </Box>
          </Box>
        </Container>
        <Box
          as="footer"
          position="absolute"
          bottom="0"
          width="100%"
          textAlign="center"
          padding="10px 0"
          fontWeight="bold"
        >
          <Text
            color="#fff"
            fontSize="15px"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
          >
            © {new Date().getFullYear()} Roberto. All rights reserved.
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Page;
