"use client";
import { Box, Container, Text } from "@chakra-ui/react";
import {
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
  BreadcrumbLink,
} from "../../components/ui/breadcrumb";
import RenderIsland from "../../components/models/renderIsland";
import WorksItem from "../../components/works";
import ContainerAnimate from "../../components/ui/ContainerAnimate.js";
import ContainerMain from "../../components/ui/ContainerMain.js";

const Page = () => {
  return (
    <ContainerAnimate>
      <Box position="relative" height="100vh">
        <RenderIsland
          fov={70}
          coords={[-100, -800, 0]}
          camera={[370, 0, 500]}
        />
        <ContainerMain>
          <Box paddingY="50px" as="nav" role="navigation">
            <BreadcrumbRoot size="lg">
              <BreadcrumbLink href="/" color="white" fontWeight="bold">
                Home
              </BreadcrumbLink>
              <BreadcrumbCurrentLink color="white" fontWeight="bold">
                Works
              </BreadcrumbCurrentLink>
            </BreadcrumbRoot>
          </Box>
          <Box as="main" role="main">
            <Box as="section">
              <Box as="header">
                <Text as="h1" fontSize="35px" fontWeight="bold" color="white">
                  Works
                </Text>
              </Box>
              <Box>
                <Container
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection={{ base: "column", md: "row" }}
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
        </ContainerMain>
      </Box>
    </ContainerAnimate>
  );
};
export default Page;
