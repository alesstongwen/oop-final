import Clinic from "./Clinic";

interface IReport {
  printDetails(): void;
}

class SimpleReport implements IReport {
  private map: Map;

  constructor(map: Map) {
    this.map = map;
  }

  printDetails() {
    const clinics = this.map.getClinics();
    clinics.forEach((clinic) => {
      console.log(`${clinic.name} - People In Lineup: ${clinic.size()}`);
    });
  }
}

class ComplexReport implements IReport {
  private map: Map;

  constructor(map: Map) {
    this.map = map;
  }

  printDetails(): void {
    const clinics = this.map.getClinics();
    clinics.forEach((clinic: Clinic) => {
      const waitTime = clinic.getCurrentWaitTime();
      const peopleInLineup = clinic.size();
      console.log(
        `${clinic.name}'s current wait time is ${waitTime} mins, there are ${peopleInLineup} in the line now`
      );
    });
  }
}

class ReportMaker {
  private report: IReport;

  constructor(report: IReport) {
    this.report = report;
  }

  printDetails() {
    this.report.printDetails();
  }
}
