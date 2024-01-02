import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./components/renderer.js";
import { Resizer } from "./components/resizer.js";

// https://discoverthreejs.com/book/first-steps/world-app/

export class World {
  constructor(container) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();

    container.append(this.renderer.domElement);

    const cube = createCube();
    this.scene.add(cube);
    this.resizer = new Resizer(container, this.camera, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
