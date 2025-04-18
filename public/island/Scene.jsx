/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf --transform 
Files: scene.gltf [292.47KB] > /Users/kiyotaka/Downloads/floating_island/scene-transformed.glb [475.66KB] (-63%)
Author: Varvara Krauchanka (https://sketchfab.com/krauchankavarvara)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/floating-island-05041dc9277748c68bb2ff8c7b6bc063
Title: Floating Island
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert6SG} />
      <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.layeredShader1SG} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
