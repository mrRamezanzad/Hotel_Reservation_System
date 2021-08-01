import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    getUsers(): any {
        return {id: 1009, firstName: 'ali', lastName: "ahmadi"}
    }
}