export class User{
    constructor(public id: number, public firstName: string, public lastName: string, public email: string, public hashedPassword: string, public salt: string){}
}