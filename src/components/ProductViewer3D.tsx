"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Text3D, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// Bottle component (simplified 3D model)
function Bottle({ color = "#0066B3", position = [0, 0, 0] as [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Bottle body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 2, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.9}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Bottle neck */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.2, 0.35, 0.5, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.9}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
          />
        </mesh>
        
        {/* Cap */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.3, 32]} />
          <meshStandardMaterial color="#E91E8C" roughness={0.3} />
        </mesh>
        
        {/* Label */}
        <mesh position={[0, 0.2, 0.51]}>
          <planeGeometry args={[0.8, 0.6]} />
          <meshStandardMaterial color="white" />
        </mesh>
        
        {/* Liquid inside (visible through transparency) */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.35, 0.45, 1.4, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.6}
            roughness={0}
            metalness={0}
            transmission={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Floating particles
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 100;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#FFD700"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

interface ProductViewer3DProps {
  color?: string;
  productName?: string;
}

export default function ProductViewer3D({ 
  color = "#0066B3", 
  productName = "Gel Lave-Sol" 
}: ProductViewer3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Bottle color={color} />
          <Particles />
          <Environment preset="studio" />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
      
      {/* Product name overlay */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-white text-xl font-bold">{productName}</p>
        <p className="text-white/60 text-sm">Faites glisser pour explorer</p>
      </div>
    </motion.div>
  );
}
