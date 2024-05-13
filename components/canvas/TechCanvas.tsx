'use client'
import { Decal, Float, Line, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { StaticImageData } from 'next/image'
import React, { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'
import { javascript } from '@/assets'

const Ball = ({ icon = javascript }: { icon: StaticImageData }) => {
  const [decal] = useTexture([icon.src])

  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <sphereGeometry args={[0.55, 64, 64]} />
          <meshStandardMaterial color='#fff' transparent />
          <Decal
            position={[0, 0, 0.2]}
            rotation={[6 * Math.PI, 0, 6.25]}
            scale={0.7}
            map={decal}
            // flatShading
          />
        </mesh>
      </Float>
    </>
  )
}
// const TechCanvas = ({ icon }: { icon: StaticImageData }) => {
//   return (
//     <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball icon={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

export default Ball
