import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../models/user.model";
import { mockUsers } from "src/mocksData/mock-user";
import { UserSettings } from "../models/user-setting.model";
import { mockUserSettings } from "src/mocksData/mock-user-settings";
import { UserDto } from "../dto/user.dto";

@Resolver((of) => User)
export class UserResolvoer {

    @Query(returns => [User])
    getUsers() {
        return mockUsers
    }

    @Query(() => User, { nullable: true })
    getUserById(@Args('id', { type: () => Int }) id: number,) {
        return mockUsers.find(user => user.id === id)
    }

    @ResolveField((returns) => UserSettings, { nullable: true, name: 'settings' })
    getSetting(@Parent() user: User) {
        console.log(user)
        return mockUserSettings.find(setting => setting.userId === user.id)
    }

    @Mutation(returns => User)
    createUser(@Args('createUser') createUser: UserDto
    ) {
        const { username, firstname, email, password } = createUser
        const newUser = {
            id: mockUsers.length + 1, username, firstname, email, password,
        }

        mockUsers.push(newUser)
        return newUser
    }

}