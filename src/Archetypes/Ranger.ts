import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _Ranger = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._Ranger += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;  
  }

  static createdArchetypeInstances(): number {
    return this._Ranger;
  }
}
export default Ranger;