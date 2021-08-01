import { Resolver, Query, Args, Int } from "@nestjs/graphql"
import { User } from "./models/user.model"
import { UsersService } from "./users.service"

@Resolver(of => User)
export class UsersResolver {
    constructor(
        private userService: UsersService,
    ) {}

    @Query(returns => User) 
    async users() {
        return this.userService.getUsers()
    }
    
}