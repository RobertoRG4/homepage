"use client";
import ContainerAnimate from "../components/ui/ContainerAnimate.js";
import ContainerMain from "../components/ui/ContainerMain.js";
import { Box, Button, Text } from "@chakra-ui/react";
import RenderIsland from "../components/models/renderIsland.js";
import Link from "next/link.js";

export default function NotFound() {
  return (
    <ContainerAnimate>
      <Box position="relative" minHeight="100vh">
        <RenderIsland
          fov={100}
          coords={[-100, -700, 0]}
          camera={[370, 0, 500]}
        />
        <ContainerMain>
          <Box
            as="main"
            role="main"
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="h1" fontSize="35px" fontWeight="bold" color="#fff">
              Whoops! Page not found.
            </Text>
            <Button marginTop="40px" as={Link} href="/">
              Go Back to Home
            </Button>
          </Box>
        </ContainerMain>
      </Box>
    </ContainerAnimate>
  );
}
