import { PerspectiveCamera } from "three";

export function createCamera() {
  // fov?: number, aspect?: number, near?: number, far?: number
  const camera = new PerspectiveCamera(45, 1, 0.1, 10);

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  return camera;
}
