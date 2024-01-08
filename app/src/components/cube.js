import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";
import { MathUtils, TextureLoader } from "three";

const radiansPerSecond = MathUtils.degToRad(30);

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load("/texture.jpg");

  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

export function createCube(x, y, z) {
  const geometry = new BoxBufferGeometry(x, y, z);
  const material = createMaterial();

  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  cube.tick = (delta) => {
    // cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}
