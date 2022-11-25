import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  static _Orc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc._Orc += 1;
  }

  static createdRacesInstances(): number {
    return this._Orc;
  }
}

export default Orc;