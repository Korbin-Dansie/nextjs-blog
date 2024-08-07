import { ApplicationDbContext } from "../ApplicationDbContext";
import { IRepository } from "../interface/IRepository";
import { UserDOA } from "./data.access.object/userDAO";
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

  public async getAll(): Promise<User[]> {
    try {
      const results = this._dbContext.connection.query(
        `SELECT * FROM ${this.tableName};`
      )

      // })
      let users = await results;
      // let newUsers = users[0].map(
      //   enity => {
      //       let userDAO: UserDOA = new UserDOA(enity);
      //       enity = userDAO.convertToBusinessClass();
      //       console.debug("The user data is...");
      //       console.debug(userDAO.convertToBusinessClass());
      //       return enity;
      //   });

      for (let index = 0; index < users[0].length; index++) {
        let enity = users[0][index];
        let userDAO: UserDOA = new UserDOA(enity);
        let user = userDAO.convertToBusinessClass();
        users[0][index] = user;
        console.debug("The user data is...");
        console.debug(userDAO.convertToBusinessClass());
      }

      return await users[0]; 

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
