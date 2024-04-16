import ReportMaker from "./src/report";
async function main() {
  const map = new Map("data.json");
  map.printMap();
  console.log("---End of Map---");

  // Here you would implement and then call map.registerForShots(currentIntake);
  // let currentIntake = 50; for example

  const report = new ReportMaker(new ComplexReport(map));
  report.printDetails();
  console.log("---End of Report---");

  map.printMap();
  console.log("---End of Map---");
}
