import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  static _Elf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf._Elf += 1;
  }

  static createdRacesInstances(): number {
    return this._Elf;
  }
}

export default Elf;