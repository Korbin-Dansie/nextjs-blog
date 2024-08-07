import { User } from "../../../core/models/user";
import { IDataAccessObject } from "./IDataAccessObject";
import mysql, { RowDataPacket } from "mysql2/promise";


export class UserDOA implements IDataAccessObject<User> {
  public id: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public hashed_password: string;
  public salt: string;

  constructor(json: any) {
    const castedJson = json as UserDOA;

    this.id = castedJson.id;
    this.first_name = castedJson.first_name;
    this.last_name = castedJson.last_name;
    this.email = castedJson.email;
    this.hashed_password = castedJson.hashed_password;
    this.salt = castedJson.salt;
  };

  public convertToBusinessClass(): User {
    return new User(
      this.id,
      this.first_name,
      this.last_name,
      this.email,
      this.hashed_password,
      this.salt
    );
    // return new User(1, "a", "b", "a", "a", "a");
  }
}
