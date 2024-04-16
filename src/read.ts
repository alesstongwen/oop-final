import * as fs from "fs";
import * as path from "path";
import Clinic from "./Clinic";
import Household from "./household";

class Map {
  private _mapData!: {
    city: { [key: string]: { households: Household[]; clinics: Clinic[] } };
  };
  currentIntake!: number;

  constructor(filename: string, currentIntake: number, callback: () => void) {
    fs.readFile(
      path.join(__dirname, filename),
      { encoding: "utf-8" },
      (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }
        this._mapData = JSON.parse(data);
        this.currentIntake = currentIntake;
        callback();
      }
    );
  }

  printMap() {
    // Generate an ASCII-representation of the map data for each city:
  }

  registerForShots(): void {
    Object.entries(this._mapData.city).forEach(([cityName, cityData]) => {
      cityData.households.forEach((household) => {
        household.inhabitants.forEach((person) => {
          if (!person.isVaccinated && person.age >= this.currentIntake) {
            const nearestClinic = this.findNearestClinic(
              cityData.clinics,
              household.blockNum
            );
            nearestClinic?.enqueue(person);
            person.isVaccinated = true;
          }
        });

        this.printMap();
      });
    });
  }

  findNearestClinic(
    clinics: Clinic[],
    householdBlockNum: number
  ): Clinic | undefined {
    return clinics.reduce((nearest, clinic) => {
      return Math.abs(clinic.blockNum - householdBlockNum) <
        Math.abs(nearest.blockNum - householdBlockNum)
        ? clinic
        : nearest;
    });
  }
}
