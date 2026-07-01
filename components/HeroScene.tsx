"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GoldArch() {
  const group = useRef<THREE.Group>(null);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const w = 1.1;
    const h = 2.1;
    const r = 1.05;
    s.moveTo(-w, -h);
    s.lineTo(-w, 0);
    s.absarc(0, 0, r, Math.PI, 0, true);
    s.lineTo(w, -h);
    s.lineTo(w - 0.28, -h);
    s.lineTo(w - 0.28, -0.05);
    s.absarc(0, -0.05, r - 0.28, 0, Math.PI, false);
    s.lineTo(-w, -h);
    return s;
  }, []);

  const geometry = useMemo(
    () => new THREE.ExtrudeGeometry(shape, { depth: 0.22, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 3 }),
    [shape]
  );

  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.12 + pointer.x * 0.45;
    group.current.rotation.x = pointer.y * 0.18;
    group.current.position.y = Math.sin(t * 0.6) * 0.06;
  });

  return (
    <group ref={group} position={[0, 0.4, 0]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color="#c9a24b"
          metalness={0.85}
          roughness={0.28}
          emissive="#4a3413"
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  );
}

function Bubble({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.35;
    ref.current.position.x = position[0] + Math.cos(t * 0.7) * 0.2;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#e3c887"
        metalness={0.6}
        roughness={0.15}
        distort={0.15}
        speed={1.2}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame(({ pointer }) => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (1 + pointer.y * 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0.3, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 6.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 4]} intensity={1.6} color="#f3ecdd" />
      <pointLight position={[-3, -1, -2]} intensity={0.6} color="#c9a24b" />

      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <GoldArch />
      </Float>

      <Bubble position={[-2.2, -0.6, -1.5]} scale={0.32} speed={0.5} />
      <Bubble position={[2.4, 0.8, -2]} scale={0.22} speed={0.7} />
      <Bubble position={[1.6, -1.1, -1]} scale={0.16} speed={0.9} />

      <Rig />
    </Canvas>
  );
}
