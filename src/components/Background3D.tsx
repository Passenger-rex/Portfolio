import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Timer } from 'three/src/core/Timer.js';

function AnimatedBlob({ position, scale, color, emissive, distort, speed }: any) {
  const mesh = useRef<THREE.Mesh>(null);
  const timer = useMemo(() => new Timer(), []);
  
  useFrame(() => {
    timer.update();
    const time = timer.getElapsed();
    
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.2;
      mesh.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[2, 20]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.2}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <AnimatedBlob 
          position={[-4, 3, -5]} 
          scale={1.2} 
          color="#E35336" 
          emissive="#FF7518" 
          distort={0.4} 
          speed={2} 
        />
        <AnimatedBlob 
          position={[5, -2, -8]} 
          scale={1.8} 
          color="#FF7518" 
          emissive="#FF8559" 
          distort={0.5} 
          speed={1.5} 
        />
        <AnimatedBlob 
          position={[-3, -4, -10]} 
          scale={1.5} 
          color="#FF8559" 
          emissive="#E35336" 
          distort={0.3} 
          speed={2.5} 
        />
      </Canvas>
    </div>
  );
}
