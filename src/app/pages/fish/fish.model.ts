import {ILevel} from "../level/level.model";

export interface IFish {
  name?: string;
  averageWeight?: number;
  level?: ILevel;
}

export class Fish implements IFish {
  constructor(
    public name?: string,
    public averageWeight?: number,
    public level?: ILevel
  ) {
  }
}
