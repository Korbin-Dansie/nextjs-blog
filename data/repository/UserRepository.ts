import { ApplicationDbContext } from "../ApplicationDbContext";
import { IRepository } from "../interface/IRepository";
import { IUserRow, UserDOA, userConvertToBusinessClass } from "./data.access.object/userDAO";
import { User } from "../../core/models/user";
import mysql, { FieldPacket } from "mysql2/promise";

export class UserRepository implements IRepository<User> {
  private _dbContext: ApplicationDbContext;
  private tableName: string;

  constructor() {
    this._dbContext = new ApplicationDbContext();
    this.tableName = "user";
  }

  getById(id: string): Promise<User | undefined> {
    try {
      const [results] = this._dbContext.connection.query(
        "SELECT * FROM ? WHERE `id` = ?",
        [this.tableName, id]
      );
      return results
    } catch (err) {
      console.log(err);
      throw(err);
    }
  }

  async getAll(): Promise<User[]> {
    try {
      // Query the db for users
      const [results] = await this._dbContext.connection.query<IUserRow[]>(
        `SELECT * FROM ${this.tableName};`
      );

      // Change the db user feilds into bussiness class users
      let users: User[] = [];
      results.forEach((enity: IUserRow, index: number) => {
        let newUser = userConvertToBusinessClass(enity);
        users.push(newUser);
      });

      // Return an array of users
      return users;
    } catch (err) {
      console.log(err);
      throw(err);
    }
  }

  async create(entity: User): Promise<boolean> {
    try {
      // Query the db for users
      const results = this._dbContext.connection.execute(
        `INSERT INTO ${this.tableName} (first_name,last_name, email, hashed_password) VALUES (?, ?, ?, ?);`,
        [entity.firstName, entity.lastName, entity.email, entity.hashedPassword]
      );
    

      // Return an array of users
      return await results;
    } catch (err) {
      console.log(err);
      throw(err);
    }
  }

  update(entity: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(entity: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  save(entity: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
