import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

import { createRenderer } from "./components/renderer.js";
import { animate } from "./components/animate.js";
import { Resizer } from "./components/resizer.js";

export class World {
  constructor(container) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.light = createLights();

    container.append(this.renderer.domElement);

    this.cube = createCube(2, 2, 2);
    this.scene.add(this.cube, this.light);

    const secondCube = createCube(3, 3, 3);
    this.scene.add(secondCube);

    this.resizer = new Resizer(container, this.camera, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);

    animate.call(this, this.renderer, this.scene, this.cube, this.camera);

    /* if (params && params.animate) {
      animate.call(this, this.scene, this.cube);
    }*/
  }
}
