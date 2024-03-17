import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
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
    updateUser(id: number, updatedUser: UpdateUserDto): {
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
