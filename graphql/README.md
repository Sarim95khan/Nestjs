#A Graphql service

A tutorial followup for learning graphql

``` https://docs.nestjs.com/graphql/resolvers ```

##Code Base Approadch:
1. Create a model of data types like in src/graphq/models/user.model.ts
2. Create a Resolver (It consist of Querries or Mutation)

for creating a ResolverField:
need to pass the Parent decorator and mention the who is parent for e.g User is Parent and userSetting is Child