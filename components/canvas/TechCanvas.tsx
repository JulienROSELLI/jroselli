"use client";
import {
  Decal,
  Float,
  Line,
  OrbitControls,
  Preload,
  useTexture
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { StaticImageData } from "next/image";
import React, { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { javascript } from "@/assets/techs";
import { TechListType } from "@/constants";

const Ball = ({
  icon = javascript,
  bgColor = "#ffffff",
  positionDecal = [0, 0, 0.2]
}: {
  icon: StaticImageData;
  bgColor?: string;
  positionDecal?: [number, number, number];
}) => {
  const [decal] = useTexture([icon.src]);

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={3.25} />
        <directionalLight position={[1, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <sphereGeometry args={[0.55, 64, 64]} />
          <meshStandardMaterial color={bgColor} />
          <Decal
            position={positionDecal}
            rotation={[6 * Math.PI, 0, 6.25]}
            scale={0.7}
            map={decal}
            // flatShading
          />
        </mesh>
      </Float>
    </>
  );
};

export default Ball;
