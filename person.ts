export default interface Person {
  phn: string;
  fullName: string;
  isVaccinated: boolean;
  age: number;
}

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

class Clinic {
  name: string;
  blockNum: number;
  staff: number;
  queue: Person[] = [];

  constructor(name: string, blockNum: number, staff: number) {
    this.name = name;
    this.blockNum = blockNum;
    this.staff = staff;
  }

  enqueue(person: Person) {
    this.queue.push(person);
  }

  dequeue(): Person | undefined {
    return this.queue.shift();
  }

  size(): number {
    return this.queue.length;
  }

  getCurrentWaitTime(): number {
    return this.queue.length * 15; // 15 minutes per person
  }
}
