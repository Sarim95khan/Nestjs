"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                id: 1,
                name: "Sarim",
                email: "sarim95khan@gmail.com",
                role: "ADMIN"
            },
            {
                id: 2,
                name: "Areeb",
                email: "Areeb@gmail.com",
                role: "ENGINEER"
            },
            {
                id: 3,
                name: "Yahya",
                email: "yahya@gmail.com",
                role: "INTERN"
            },
            {
                id: 4,
                name: "Hasan",
                email: "hasan@gmail.com",
                role: "INTERN"
            }
        ];
    }
    getAllUsers(role) {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }
    getOneUser(id) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    createUser(user) {
        const getUserbyHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: getUserbyHighestId[0].id + 1,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, updatedUser) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.getOneUser(id);
    }
    deleteUser(id) {
        const removedUser = this.getOneUser(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map