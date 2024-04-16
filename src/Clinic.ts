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

  enqueue(person: Person): void {
    // add person into the queue
    this.queue.push(person);
  }

  dequeue(): Person | undefined {
    // remove person from the queue
    return this.queue.shift();
  }

  size(): number {
    // return how many people are in the queue now
    return this.queue.length;
  }

  getCurrentWaitTime(): number {
    // how long is the wait time in the queue
    return this.queue.length * 15;
  }
}

export default Clinic;
