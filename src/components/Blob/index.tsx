import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three"; // Import Three.js
import { MathUtils } from "three";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";

extend({ IcosahedronBufferGeometry: THREE.IcosahedronGeometry });

const Blob = ({ scale = 1 }: { scale?: number }) => {
  const mesh = useRef<THREE.Mesh | null>(null);
  const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 1 },
      u_intensity: { value: 0.1 },
      u_color: { value: new THREE.Color(0x0000ff) },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      // ✅ Explicitly cast material to ShaderMaterial
      const material = mesh.current.material as THREE.ShaderMaterial;

      material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

      material.uniforms.u_intensity.value = MathUtils.lerp(
        material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );

      // material.uniforms.u_color.value.set(0x00ff00);
      material.uniforms.u_color.value = new THREE.Color(0x00ff00); // Green
      // material.uniforms.u_color.needsUpdate = true;
      const time = performance.now() * 0.001;
      const r = (Math.sin(time) + 1) / 2; // 0 to 1
      const g = (Math.cos(time) + 1) / 2;
      const b = (Math.sin(time * 0.5) + 1) / 2;

      // ✅ Update color dynamically
      material.uniforms.u_color.value.set(r, g, b);

      // Ensure shader detects the change
      material.needsUpdate = true;
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={scale}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 60]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
