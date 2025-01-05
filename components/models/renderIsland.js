"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Box } from "@chakra-ui/react";
import Island from "./island";

const RenderIsland = ({ fov, coords, camera }) => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      zIndex="0"
    >
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <PerspectiveCamera makeDefault position={camera} fov={fov} />
        <group position={coords}>
          <Island />
        </group>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Box>
  );
};

export default RenderIsland;
