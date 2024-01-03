import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";
import { MathUtils } from "three";

const radiansPerSecond = MathUtils.degToRad(30);

export function createCube(x, y, z) {
  // create a geometry
  const geometry = new BoxBufferGeometry(x, y, z);
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: "purple" });
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  cube.tick = (delta) => {
    if (cube.scale.x > 5) {
      return;
    }

    cube.rotation.z += radiansPerSecond * delta;
    cube.scale.x += 0.01;
    cube.scale.y += 0.01;
    cube.scale.z += 0.01;
  };

  return cube;
}
