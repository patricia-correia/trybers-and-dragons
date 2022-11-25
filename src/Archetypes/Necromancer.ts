import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _Necromancer = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._Necromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._Necromancer;
  }
}

export default Necromancer;