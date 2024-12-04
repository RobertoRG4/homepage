"use client";
import { Box, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
  BreadcrumbLink,
} from "../../components/ui/breadcrumb";
import RenderIsland from "../../components/models/renderIsland";
import Island from "../../components/models/island";
import WorksItem from "../../components/works";
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
            fov={70}
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
        >
          <Box paddingY="50px">
            <BreadcrumbRoot size="lg">
              <BreadcrumbLink
                href="/"
                color="#fff"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
              >
                Home
              </BreadcrumbLink>
              <BreadcrumbCurrentLink
                color="#fff"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
              >
                Works
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
                  Works
                </Text>
              </Box>
              <Box>
                <Container
                  display="grid"
                  gapX="20px"
                  gridTemplateColumns="auto auto"
                >
                  <WorksItem
                    title="Option Bus"
                    description="This project simplifies finding efficient bus routes, saving time and improving commutes."
                    url="option-bus.png"
                    categoria="works"
                    id="option-bus"
                  />
                </Container>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};
export default Page;
