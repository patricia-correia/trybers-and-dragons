import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _Warrior = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._Warrior += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._Warrior;
  }
}

export default Warrior;