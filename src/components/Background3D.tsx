import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Timer } from 'three/src/core/Timer.js';

function AnimatedBlob() {
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
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={mesh} scale={1.5}>
        <icosahedronGeometry args={[2, 20]} />
        <MeshDistortMaterial
          color="#E35336"
          emissive="#FF7518"
          emissiveIntensity={0.2}
          attach="material"
          distort={0.4}
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
        <AnimatedBlob />
      </Canvas>
    </div>
  );
}
