import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.userService.getAllUsers(role)
    }


    @Get(':id')
    getOneUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getOneUser(id)
    }

    @Post()
    createUser(@Body(ValidationPipe) user: CreateUserDto) {
        return this.userService.createUser(user)
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) user: UpdateUserDto) {
        return this.userService.updateUser(id, user)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(+id)
    }


}
