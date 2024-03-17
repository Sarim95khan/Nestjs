import { User } from "../models/user.model";
import { UserDto } from "../dto/user.dto";
export declare class UserResolvoer {
    getUsers(): {
        id: number;
        username: string;
        firstname: string;
        email: string;
        password: string;
    }[];
    getUserById(id: number): {
        id: number;
        username: string;
        firstname: string;
        email: string;
        password: string;
    };
    getSetting(user: User): {
        userId: number;
        pushNotifiication: boolean;
        emailNotification: boolean;
    };
    createUser(createUser: UserDto): {
        id: number;
        username: string;
        firstname: string;
        email: string;
        password: string;
    };
}
