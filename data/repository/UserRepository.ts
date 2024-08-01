import knex from "knex";
import { ApplicationDbContext } from "../ApplicationDbContext";
import { IRepository } from "../interface/IRepository";
import { User } from "../../core/models/user";

export class UserRepository<User> implements IRepository<User> {
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
      return results;
    } catch (err) {
      console.log(err);
    }
  }

  public getAll(): Promise<User[]> {
    try {
      // const results = this._dbContext.connection.query(
      //   `SELECT * FROM ${this.tableName};`
      // );

      const data:  Promise<User[]> = this._dbContext.connection.select().from(this.tableName).limit(10);
      return data;

    } catch (err) {
      console.log(err);
    }
  }
  create(entity: User): Promise<undefined> {
    throw new Error("Method not implemented.");
  }
  update(entity: User): Promise<undefined> {
    throw new Error("Method not implemented.");
  }
  delete(entity: User): Promise<undefined> {
    throw new Error("Method not implemented.");
  }

  save(entity: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
