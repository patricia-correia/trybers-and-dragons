import { EnergyType } from '../Energy';

import Archetype from './Archetype';

class Mage extends Archetype {
  static _Mage = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._Mage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;  
  }

  static createdArchetypeInstances(): number {
    return this._Mage;
  }
}
export default Mage;