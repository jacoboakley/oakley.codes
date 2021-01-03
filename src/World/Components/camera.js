import { PerspectiveCamera } from 'three';

const createCamera = () => {
  const camera = new PerspectiveCamera(
    75, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    750, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 0);

  return camera;
}

export { createCamera };