"use client";
import { Badge, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import {
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
  BreadcrumbLink,
} from "../../../components/ui/breadcrumb";
import Link from "next/link";
import RenderIsland from "../../../components/models/renderIsland.js";
import ContainerAnimate from "../../../components/ui/ContainerAnimate.js";
import RenderIphone from "../../../components/models/renderIphone.js";
import ContainerMain from "../../../components/ui/ContainerMain.js";

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
              <BreadcrumbLink href="/" color="#fff" fontWeight="bold">
                Home
              </BreadcrumbLink>
              <BreadcrumbLink href="/works" color="#fff" fontWeight="bold">
                Works
              </BreadcrumbLink>
              <BreadcrumbCurrentLink color="#fff" fontWeight="bold">
                Option Bus
              </BreadcrumbCurrentLink>
            </BreadcrumbRoot>
          </Box>
          <Box as="main" role="main">
            <Box as="section">
              <Box as="header">
                <Text
                  as="h1"
                  color="#fff"
                  fontSize="35px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  Option Bus
                </Text>
              </Box>
              <Box>
                <Text color="#fff" fontWeight="bold">
                  This app, created in partnership with Fundación Plan, helps
                  users find the nearest and most efficient bus routes. Its goal
                  is to reduce travel time by optimizing routes. The app was
                  built using technologies like Expo, making it user-friendly
                  and accessible.
                </Text>
              </Box>
              <Box display="flex" justifyContent="center" marginTop="15px">
                <Stack direction="row">
                  <Badge colorPalette="green">Expo</Badge>
                  <Badge colorPalette="red">Redux</Badge>
                  <Badge colorPalette="pink">React</Badge>
                  <Badge colorPalette="yellow">LottieFiles</Badge>
                </Stack>
              </Box>
              <Box display="flex" justifyContent="center" marginTop="15px">
                <Button
                  as={Link}
                  href="https://github.com/RobertoRG4/Option-Bus/tree/master"
                  target="_blank"
                  margin="5px"
                >
                  View Source Code
                </Button>
              </Box>
              <Flex
                justifyContent="center"
                width="100%"
                height="500px"
                marginTop="15px"
              >
                <RenderIphone />
              </Flex>
            </Box>
          </Box>
        </ContainerMain>
      </Box>
    </ContainerAnimate>
  );
};
export default Page;
