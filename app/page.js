"use client";
import { Box } from "@chakra-ui/react";
import {
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
} from "../components/ui/breadcrumb";
import { useState, useEffect } from "react";
import RenderIsland from "../components/models/renderIsland";
import Technologies from "../components/sections/technologies";
import Header from "../components/sections/header";
import Biography from "../components/sections/biography";
import Social from "../components/sections/social";
import ContainerAnimate from "../components/ui/ContainerAnimate";
import ContainerMain from "../components/ui/ContainerMain";

const Page = () => {
  const [fov, setFov] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      const newFov = window.innerWidth < 768 ? 100 : 30;
      setFov(newFov);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContainerAnimate>
      <Box position="relative" minHeight="100vh">
        <RenderIsland
          fov={fov}
          coords={[-100, -700, 0]}
          camera={[370, 0, 500]}
        />
        <ContainerMain>
          <Box paddingY="50px" as="nav" role="navigation">
            <BreadcrumbRoot size="lg">
              <BreadcrumbCurrentLink color="white" fontWeight="bold">
                Home
              </BreadcrumbCurrentLink>
            </BreadcrumbRoot>
          </Box>

          <Box as="main" role="main">
            <Header />
            <Biography />
            <Technologies />
            <Social />
          </Box>
        </ContainerMain>
      </Box>
    </ContainerAnimate>
  );
};

export default Page;
