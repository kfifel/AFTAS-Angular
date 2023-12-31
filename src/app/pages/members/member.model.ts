
export interface IMember {
  number?: number;
  name?: string;
  familyName?: string;
  accessionDate?: Date;
  nationality?: string;
  identityDocumentType?: IdentityDocumentType;
  identityNumber?: string;
  nbrHunting?: number;
}

export class Member implements IMember {
  constructor(
    public number?: number,
    public name?: string,
    public familyName?: string,
    public ascensionDate?: Date,
    public nationality?: string,
    public identityDocumentType?: IdentityDocumentType,
    public identityNumber?: string,
    public nbrHunting?: number,
  ) {
  }
}

export enum IdentityDocumentType {
  IDENTITY_CARD = "IDENTITY_CARD",
  PASSPORT = "PASSPORT",
  RESIDENCE_CARD = "RESIDENCE_CARD",
  OTHER = "OTHER"
}
