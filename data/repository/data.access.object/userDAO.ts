import { User } from "../../../core/models/user";
import { IDataAccessObject } from "./IDataAccessObject";
import mysql, { RowDataPacket } from "mysql2/promise";

export class UserDOA implements IDataAccessObject<User> {
  public id: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public hashed_password: string;

  constructor(json: UserDOA) {
    const castedJson = json as UserDOA;

    this.id = castedJson.id;
    this.first_name = castedJson.first_name;
    this.last_name = castedJson.last_name;
    this.email = castedJson.email;
    this.hashed_password = castedJson.hashed_password;
  }

  public convertToDataAccessClass(user: User) {
    this.id = user.id;
    this.first_name = user.firstName;
    this.last_name = user.lastName;
    this.email = user.email;
    this.hashed_password = user.hashedPassword;
  }

  public convertToBusinessClass(): User {
    return new User(
      this.id,
      this.first_name,
      this.last_name,
      this.email,
      this.hashed_password
    );
    // return new User(1, "a", "b", "a", "a", "a");
  }
}

export interface IUserRow extends RowDataPacket {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
}

export function userConvertToBusinessClass(user: IUserRow) {
  let bussinessUser: User = new User(user.id, user.first_name, user.last_name, user.email, user.hashed_password);
  return bussinessUser;
}