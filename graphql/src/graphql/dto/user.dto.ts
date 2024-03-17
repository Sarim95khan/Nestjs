import { Field, InputType, Int } from "@nestjs/graphql"
import { UserSettings } from "../models/user-setting.model"
import { IsEmail, IsEmpty, IsString } from "class-validator"

@InputType()
export class UserDto {
    @Field()
    username: string

    @Field({ nullable: true })
    firstname?: string

    @Field()
    email: string

    @Field()
    password: string
}