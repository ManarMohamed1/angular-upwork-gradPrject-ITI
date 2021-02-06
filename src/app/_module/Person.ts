import { userCountry } from "./user-country";

export interface Person {
    email?: string;
    country?: userCountry;
    iWantTo?:string;
    check?:boolean;
    check2?: boolean;
    freelancer?:boolean;
    project?:boolean;

}