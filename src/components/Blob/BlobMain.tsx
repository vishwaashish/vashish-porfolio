"use client"
import { Canvas } from "@react-three/fiber";
import React from "react";
import Blob from ".";

const BlobMain = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }} style={{height: 400}} >
      <Blob />
    </Canvas>
  );
};

export default BlobMain;
