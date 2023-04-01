import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const WIDTH = 800;
const HEIGHT = 800;

const ThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setSize(WIDTH, HEIGHT);

      const camera = new THREE.PerspectiveCamera(10, 1);
      camera.position.set(3, 1, 10);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("grey");
      scene.position.y = -0.83;

      const light = new THREE.DirectionalLight(0xECE8E8, 10);
      scene.add(light);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      const loader = new GLTFLoader();
      loader.load("/modelling/miyu/scene.gltf", (object) => {
        scene.add(object.scene);
        const animate = () => {
          requestAnimationFrame(animate);
          // object.scene.rotation.y += 0.001;
          renderer.render(scene, camera);
          controls.update();
        };
        animate();
      });
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas" width={WIDTH} height={HEIGHT}></canvas>;
};

export default ThreeJS;