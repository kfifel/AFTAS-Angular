import {Time} from "@angular/common";
import {IMember} from "../members/member.model";

class RankId {
  memberId?: number;
  competitionId?: string;
}

export interface IRank {
  id?: RankId;
  rank?: number;
  score?: number;
  member?: IMember;
}


class IHunting {
  id?: number;
  numberOfFish?: number;
}

export class FishHunting {
  fishWeight?: number;
  fishName?: string;
  memberId?: number;
  competitionCode?: string;
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
  members?: IMember[];
}
