import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  static _Dwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf._Dwarf += 1;
  }

  static createdRacesInstances(): number {
    return this._Dwarf;
  }
}

export default Dwarf;