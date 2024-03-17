import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserSettings {

    @Field(type => Int)
    userId: number

    @Field({ defaultValue: false, nullable: true })
    emailNotification: boolean

    @Field({ defaultValue: false, nullable: true })
    pushNotification: boolean
}