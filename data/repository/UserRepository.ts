import { ApplicationDbContext } from "../ApplicationDbContext";
import { IRepository } from "../IRepository";

export class UserRepository<User> implements IRepository<User> {
  private _dbContext: ApplicationDbContext;
  private tableName: string;

  constructor() {
    this._dbContext = new ApplicationDbContext();
    this.tableName = "user";
  }

  public findById(id: string): Promise<User | undefined> {
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

  public findAll(): Promise<User[]> {
    try {
      const results = this._dbContext.connection.query(`SELECT * FROM ${this.tableName};`);
      return results;
    } catch (err) {
      console.log(err);
    }
  }

  save(entity: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
