import { Color, Scene } from "three";

export function createScene() {
  const scene = new Scene();

  scene.background = new Color("#f5f5f5");
  return scene;
}
