"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const RenderIsland = ({ children, fov, coords, camera }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <PerspectiveCamera makeDefault position={camera} fov={fov} />
      <group position={coords}>{children}</group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default RenderIsland;
