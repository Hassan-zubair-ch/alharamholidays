"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const EQUIRECTANGULAR_MAP_URL =
  "https://upload.wikimedia.org/wikipedia/commons/e/ea/Equirectangular-projection.jpg";

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(EQUIRECTANGULAR_MAP_URL);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.05}
        roughness={0.85}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, -2, 2]} intensity={0.4} />
      <GlobeMesh />
    </>
  );
}

export function Globe3D() {
  return (
    <div className="relative h-full w-full rounded-full overflow-hidden bg-charcoal-dark">
      <Canvas
        camera={{ position: [0, 0, 2.2], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
