import {Time} from "@angular/common";

class RankId {
  memberId?: number;
  competitionId?: string;
}

export interface IRank {
  id?: RankId;
  rank?: number;
  point?: number;
}


class IHunting {
  id?: number;
  numberOfFish?: number;
}

export interface ICompetition {
  code?: string;
  numberOfParticipant?: number;
  date?: Date;
  startTime?: Time;
  endTime?: Time;
  location?: String;
  amount?: number;
  ranks?: IRank[];
  hunting?: IHunting[];
}
