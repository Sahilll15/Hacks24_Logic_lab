// Room.js
import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera, Stars } from 'drei';
import { PlaneBufferGeometry } from 'three';


const Room = () => {
  const roomRef = useRef();

  return (
    <Canvas>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 2, 5]} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

      {/* 3D Room Model */}
      <mesh ref={roomRef}>
        {/* Add your 3D room model here */}
      </mesh>

      {/* Stars in the background */}
      <Stars />

      {/* OrbitControls for camera movement */}
      <OrbitControls />
    </Canvas>
  );
};

export default Room;
