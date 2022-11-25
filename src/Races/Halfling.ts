import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  static _Halfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling._Halfling += 1;
  }

  static createdRacesInstances(): number {
    return this._Halfling;
  }
}

export default Halfling;