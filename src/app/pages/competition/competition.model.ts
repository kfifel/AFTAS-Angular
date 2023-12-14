import {Time} from "@angular/common";

export interface ICompetition {
  code?: string;
  numberOfParticipant?: number;
  date?: Date;
  startTime?: Time;
  endTime?: Time;
  location?: String;
  amount?: number;
}
