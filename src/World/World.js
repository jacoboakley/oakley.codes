import { createCamera } from './Components/camera.js';
import { createStarField } from './Components/starField.js';
import { createScene } from './Components/scene.js';

import { createRenderer } from './Systems/renderer.js';
import { Resizer } from './Systems/Resizer.js';
import { Loop } from './Systems/Loop.js';


// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const starField = createStarField();

        loop.updatables.push(starField);

        scene.add(starField);
        // Remove rsizer because animation loop is quick enough to redraw with resizing. 
        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
          this.render();
        };
      }
  
    // 2. Render the scene
    render() {
        renderer.render(scene, camera);
    }

    start() {
      loop.start();
    }
    
    stop() {
      loop.stop();
    }
  }
  
  export { World };