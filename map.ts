import * as fs from "fs";
import * as path from "path";

class Map {
  private _mapData: any;

  constructor(firstname: string) {
    this._mapData = JSON.parse(
      fs.readFileSync(path.resolve(_dirname, filename), "utf-8")
    );
  }
}
