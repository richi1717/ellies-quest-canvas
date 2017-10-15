import { loadImage } from './loaders';
import SpriteSheet from './SpriteSheet';

export function loadLinkSprite() {
  return loadImage('/img/battle-sprites2.png')
    .then(image => {
      const sprites = new SpriteSheet(image, 16, 16);

      sprites.define('idle', 0, 0, 20, 20);

      return sprites;
    });
}

export function loadEllieSprite() {
  return loadImage('/img/battle-sprites2.png')
    .then(image => {
      const sprites = new SpriteSheet(image, 16, 16);

      sprites.define('idle', 0, 20, 20, 20);

      return sprites;
    });
}

export function loadLukeSprite() {
  return loadImage('/img/battle-sprites2.png')
    .then(image => {
      const sprites = new SpriteSheet(image, 16, 16);

      sprites.define('idle', 0, 40, 20, 20);

      return sprites;
    });
}
