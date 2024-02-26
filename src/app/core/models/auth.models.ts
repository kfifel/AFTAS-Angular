import {Role} from "./role.enum";

export class User {
    id: number;
    token?: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    verifiedAt: string;
    enabled: boolean;
    authorities: Role[];
}
