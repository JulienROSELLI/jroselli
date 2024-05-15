import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

// import CanvasLoader from '../Loader'
// import StarsCanvas from './Stars'

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <>
      <mesh rotation={[0, 0, 0]}>
        <primitive
          object={earth.scene}
          scale={1.5}
          position-y={0}
          rotation-y={4}
          rotateY={1}
        />

        <meshStandardMaterial />
      </mesh>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
