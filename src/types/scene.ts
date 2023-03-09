import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three-stdlib/postprocessing/EffectComposer.js";
import { RenderPass } from "three-stdlib/postprocessing/RenderPass.js";
import { GlitchPass } from "three-stdlib/postprocessing/GlitchPass.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { UnrealBloomPass } from "three-stdlib";

export const renderCanvasScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x262524 );
  const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0.1, 0.1, 2);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.querySelector("#canvas")?.appendChild(renderer.domElement);

  var gltfModel: THREE.Group | null = null;

  return (suitType: string) => {
    const animate = () => {
      if (gltfModel) gltfModel.rotation.y += 0.001;
      requestAnimationFrame(animate);
    };

    const loader = new GLTFLoader();
    loader.load(`/models/batman-beyond.glb`, (gltf) => {
      gltfModel = gltf.scene;
      gltfModel.rotation.y = 2
      scene.add(gltf.scene);
      console.log("Suit rendered");

      var light = new THREE.AmbientLight(0xc4c4c4, 20);
      light.position.set(-2000,-100,-5000)
      scene.add(light);

      var slight = new THREE.DirectionalLight(0xc4c4c4, 6);
      slight.position.set(0, 10, 30);
      scene.add(slight);
      renderer.render(scene, camera);

      //   animate();
    });
  };
};
