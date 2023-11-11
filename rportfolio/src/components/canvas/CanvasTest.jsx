import React from "react";
import {
  OrbitControls,
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const CanvasTest = () => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 2, 1]} />
        <mesh castShadow receiveShadow scale={2.75} />
        <mesh>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color={"#3d3d3d"}
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        </mesh>
      </Canvas>
    </Container>
  );
};
export default CanvasTest;
