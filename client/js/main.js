import Camera from './Camera';
import Timer from './Timer';
import { loadLevel } from './loaders';
import { createLink, createEllie, createLuke } from './entities';
import { createCollisionLayer, createCameraLayer } from './layers';
import { setupKeyboard } from './input';
import { setupMouseControl } from './debug';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const img = new Image();
img.src = '/img/battle-sprites2.png';

Promise.all([
  createLink(),
  createEllie(),
  createLuke(),
  loadLevel('forest')
])
  .then(([link, ellie, luke, level]) => {
    const camera = new Camera();

    link.pos.set(96, 192);
    ellie.pos.set(128, 192);
    luke.pos.set(168, 192);

    level.comp.layers.push(
      createCollisionLayer(level),
      createCameraLayer(camera)
    );

    level.entities.add(link);
    level.entities.add(ellie);
    level.entities.add(luke);

    const input = setupKeyboard(link);
    input.listenTo(window);

    setupMouseControl(canvas, link, camera);

    const timer = new Timer(1 / 60);

    timer.update = function update(deltaTime) {
      level.update(deltaTime);
      level.comp.draw(context, camera);
    };

    timer.start();
  });
