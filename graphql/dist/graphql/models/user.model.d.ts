import { UserSettings } from "./user-setting.model";
export declare class User {
    id: number;
    username: string;
    firstname?: string;
    email: string;
    password: string;
    settings?: UserSettings;
}
