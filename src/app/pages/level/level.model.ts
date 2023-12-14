
export interface ILevel {
  code?: number;
  description?: string;
  point?: string;
}

export class Level implements ILevel {
  constructor(
    public code?: number,
    public description?: string,
    public point?: string
  ) {
  }
}
