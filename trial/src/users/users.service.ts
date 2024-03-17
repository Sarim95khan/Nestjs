import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
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


    ]

    getAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    getOneUser(id: number) {
        const user = this.users.find(user => user.id === id)
        return user
    }

    createUser(user: CreateUserDto) {
        const getUserbyHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: getUserbyHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser)
        return newUser
    }

    updateUser(id: number, updatedUser: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })
        return this.getOneUser(id)
    }

    deleteUser(id: number) {
        const removedUser = this.getOneUser(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser

    }
}

