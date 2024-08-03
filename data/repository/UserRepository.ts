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
      // results.resolve(results.map((entity: UserDOA) => {entity.convert()}))
      // results.resolve(console.debug("Got Here"))
      // await results.then(
      //   enity => {
      //     enity[0].forEach(user => {
      //       let userDAO: UserDOA = new UserDOA(user);
      //       user = JSON.stringify(userDAO.convertToBusinessClass());
      //       console.debug("The user data is...");
      //       console.debug(user);
      //       return JSON.stringify(userDAO.convertToBusinessClass());;
      //     })
      // })
      let users = await results;
      let newUsers = users[0].map(
        enity => {
            let userDAO: UserDOA = new UserDOA(enity);
            enity = userDAO.convertToBusinessClass();
            console.debug("The user data is...");
            console.debug(userDAO.convertToBusinessClass());
            return enity;
        });

      return await newUsers; 

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
