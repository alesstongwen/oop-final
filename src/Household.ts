class Household {
  blockNum: number;
  inhabitants: Person[];

  constructor(blockNum: number, inhabitants: Person[]) {
    this.blockNum = blockNum;
    this.inhabitants = inhabitants;
  }

  isFullyVaccinated(): boolean {
    return this.inhabitants.every((person) => person.isVaccinated);
  }
}

export default Household;
