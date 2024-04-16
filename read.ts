import * as fs from "fs";
import * as path from "path";

class Map {
  private _mapData: any;

  constructor(filename: string) {
    this._mapData = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, filename), "utf-8")
    );
  }

  printMap() {
    // Implementation of the ASCII map printing logic
    const mapRepresentation: string[] = [];
    const cityNames = Object.keys(this._mapData.city);
    const maxBlocks = Math.max(
      ...cityNames.map((name) =>
        this._mapData.city[name].households
          .concat(this._mapData.city[name].clinics)
          .reduce((max, item) => Math.max(max, item.blockNum), 0)
      )
    );

    cityNames.forEach((cityName) => {
      const blocks = new Array(maxBlocks + 1).fill("x");
      this._mapData.city[cityName].households.forEach((h) => {
        blocks[h.blockNum] = h.inhabitants.some((i) => !i.isVaccinated)
          ? "H"
          : "F";
      });
      this._mapData.city[cityName].clinics.forEach((c) => {
        blocks[c.blockNum] = "C";
      });
      mapRepresentation.push(blocks.join(","));
    });

    console.log(mapRepresentation.join("\n"));
  }

  // Further methods would be needed for updating this map data as changes occur.
}
