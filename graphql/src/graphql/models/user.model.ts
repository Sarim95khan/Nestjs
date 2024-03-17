import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserSettings } from "./user-setting.model";

@ObjectType()
export class User {
    @Field(type => Int)
    id: number

    @Field()
    username: string

    @Field({ nullable: true })
    firstname?: string

    @Field()
    email: string

    @Field()
    password: string

    @Field({ nullable: true })
    settings?: UserSettings
}