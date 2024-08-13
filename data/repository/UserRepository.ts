import { ApplicationDbContext } from "../ApplicationDbContext";
import { IRepository } from "../interface/IRepository";
import { UserDOA } from "./data.access.object/userDAO";
import { User } from "../../core/models/user";

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
      return results;
    } catch (err) {
      console.log(err);
    }
  }

  async getAll(): Promise<User[]> {
    try {
      // Query the db for users
      const results = this._dbContext.connection.query(
        `SELECT * FROM ${this.tableName};`
      );

      // Change the db user feilds into bussiness class users
      let users = await results;
      users[0].forEach((enity, index) => {
        let userDAO: UserDOA = new UserDOA(enity);
        let user = userDAO.convertToBusinessClass();
        console.log(this);
        users[0][index] = user;
      });

      // Return an array of users
      return users[0];
    } catch (err) {
      console.log(err);
    }
  }

  async create(entity: User): Promise<boolean> {
    try {
      // Query the db for users
      const results = this._dbContext.connection.execute(
        `INSERT INTO ${this.tableName} (first_name,last_name, email, hashed_password, salt) VALUES (?, ?, ?, ?, ?);`,
        [entity.firstName, entity.lastName, entity.email, entity.hashedPassword, entity.salt]
      );
    

      // Return an array of users
      return await results;
    } catch (err) {
      console.log(err);
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
