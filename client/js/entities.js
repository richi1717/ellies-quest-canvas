import Entity from './Entity';
import Go from './traits/Go';
import Velocity from './traits/Velocity';
import Jump from './traits/Jump';
import { loadLinkSprite, loadEllieSprite, loadLukeSprite } from './sprites';

export function createLink() {
  return loadLinkSprite()
    .then(sprite => {
      const link = new Entity();

      link.size.set(14, 16);

      link.addTrait(new Go());
      link.addTrait(new Jump());
      // link.addTrait(new Velocity());

      link.draw = function drawLink(context) {
        sprite.draw('idle', context, 0, 0);
      };

      return link;
    });
}

export function createEllie() {
  return loadEllieSprite()
    .then(sprite => {
      const ellie = new Entity();

      ellie.size.set(14, 16);

      ellie.addTrait(new Go());
      ellie.addTrait(new Jump());
      // ellie.addTrait(new Velocity());

      ellie.draw = function drawEllie(context) {
        sprite.draw('idle', context, 0, 0);
      };

      return ellie;
    });
}

export function createLuke() {
  return loadLukeSprite()
    .then(sprite => {
      const luke = new Entity();

      luke.size.set(14, 16);

      luke.addTrait(new Go());
      luke.addTrait(new Jump());
      // luke.addTrait(new Velocity());

      luke.draw = function drawLuke(context) {
        sprite.draw('idle', context, 0, 0);
      };

      return luke;
    });
}
