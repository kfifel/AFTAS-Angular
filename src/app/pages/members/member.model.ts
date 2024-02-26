
export interface IMember {
  id?: number;
  number?: number;
  name?: string;
  familyName?: string;
  accessionDate?: Date;
  nationality?: string;
  identityDocumentType?: IdentityDocumentType;
  identityNumber?: string;
  nbrHunting?: number;
  email?: string;
  password?: string;
  enabled?: boolean;
}

export class Member implements IMember {
  constructor(
    public id?: number,
    public number?: number,
    public name?: string,
    public familyName?: string,
    public ascensionDate?: Date,
    public nationality?: string,
    public identityDocumentType?: IdentityDocumentType,
    public identityNumber?: string,
    public nbrHunting?: number,
    public email?: string,
    public password?: string,
    public enabled?: boolean
  ) {
  }
}

export enum IdentityDocumentType {
  IDENTITY_CARD = "IDENTITY_CARD",
  PASSPORT = "PASSPORT",
  RESIDENCE_CARD = "RESIDENCE_CARD",
  OTHER = "OTHER"
}
