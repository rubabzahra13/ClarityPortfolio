"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const techLogos = [
    { text: "REACT", position: [0, 0, 1.01] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { text: "NEXT.JS", position: [0, 0, -1.01] as [number, number, number], rotation: [0, Math.PI, 0] as [number, number, number] },
    { text: "NODE", position: [1.01, 0, 0] as [number, number, number], rotation: [0, Math.PI / 2, 0] as [number, number, number] },
    { text: "PYTHON", position: [-1.01, 0, 0] as [number, number, number], rotation: [0, -Math.PI / 2, 0] as [number, number, number] },
    { text: "TS", position: [0, 1.01, 0] as [number, number, number], rotation: [-Math.PI / 2, 0, 0] as [number, number, number] },
    { text: "MONGO", position: [0, -1.01, 0] as [number, number, number], rotation: [Math.PI / 2, 0, 0] as [number, number, number] },
  ];

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#ec4e39"
          wireframe={false}
          opacity={0.9}
          transparent
          metalness={0.5}
          roughness={0.2}
        />
        {techLogos.map((logo, index) => (
          <Text
            key={index}
            position={logo.position}
            rotation={logo.rotation}
            fontSize={0.22}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {logo.text}
          </Text>
        ))}
      </mesh>
    </Float>
  );
}

const TechCube = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Cube />
    </Canvas>
  );
};

export default TechCube;