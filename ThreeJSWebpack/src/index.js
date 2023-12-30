// You can use import statements here!
//
// More information about how to do this here:
// https://threejs.org/docs/#manual/en/introduction/Import-via-modules

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  IcosahedronGeometry,
  MeshNormalMaterial,
  BoxBufferGeometry,
  Mesh,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,
  1000
);

// const geometry = new IcosahedronGeometry();
const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshNormalMaterial();
const mesh = new Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 5;

const renderer = new WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
