import React, { useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas, extend } from "@react-three/fiber";
import {
  shaderMaterial,
  CameraControls,
  OrbitControls,
  Text3D,
  Effects,
  Environment,
} from "@react-three/drei";
import { SSAOPass } from "three-stdlib";
import Background from "three/examples/jsm/renderers/common/Background.js";

extend({ SSAOPass });

gsap.registerPlugin(ScrollTrigger);

const Head = () => {
  const containerRef = useRef(null);

  useGSAP(() => {}, []);

  return (
    <>
      <Canvas
        style={{ height: "10vh" }}
        shadows
        camera={{ position: [5, 0, 5], fov: 35 }}
      >
        <Text3D
          font={"fonts/Boogie Boys_Regular.json"}
          scale={2}
          position={[-4, 0, 0]}
        >
          3D Pages
          <meshStandardMaterial
            color="darkkhaki"
            roughness={0.5}
            metalness={1}
          />
        </Text3D>
        <ambientLight intensit={0.3} />
        {/* <Effects
          multisamping={8}
          renderIndex={1}
          disableGamma={false}
          disableRenderPass={false}
          disableRender={false}
        >
          <sSAOPass
            args={[scene, camera, 100, 100]}
            kernelRadius={1.2}
            kernelSize={0}
          />
        </Effects> */}
        <Environment preset="sunset" />
        <OrbitControls minPolarAngl={Math.PI / 3} maxPolarAngl={Math.PI / 3} />
        {/* <CameraControls /> */}
      </Canvas>
    </>
  );
};

export default Head;
