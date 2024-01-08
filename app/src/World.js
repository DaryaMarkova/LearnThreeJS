import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createControls } from "./system/controls.js";
import { createRenderer } from "./components/renderer.js";
import { Resizer } from "./components/resizer.js";
import { Loop } from "./components/animate.js";

export class World {
  constructor(container) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();

    const { ambientLight, mainLight } = createLights();

    this.loop = new Loop(this.camera, this.scene, this.renderer);

    container.append(this.renderer.domElement);

    this.cube = createCube(2, 2, 2);
    this.controls = createControls(this.camera, this.renderer.domElement);
    this.controls.target.copy(this.cube.position);

    this.scene.add(ambientLight, mainLight, this.cube, this.light);

    this.loop.updatables.push(this.cube);
    this.resizer = new Resizer(container, this.camera, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}
