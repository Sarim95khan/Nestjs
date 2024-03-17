import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    getOneUser(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    createUser(user: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "ENGINEER" | "ADMIN";
        id: number;
    };
    updateUser(id: number, user: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    deleteUser(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
