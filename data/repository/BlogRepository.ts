import { ApplicationDbContext } from "../ApplicationDbContext";
import { IRepository } from "../interface/IRepository";
import {
  IUserRow,
  UserMapper,
  userConvertToBusinessClass,
} from "./data.access.object/userMapper";
import { Blog } from "../../core/models/blog";
import mysql, { FieldPacket, ResultSetHeader } from "mysql2/promise";

export class BlogRepository implements IRepository<Blog> {
  private _dbContext: ApplicationDbContext;
  private tableName: string;

  constructor() {
    this._dbContext = new ApplicationDbContext();
    this.tableName = "blog";
  }
  async getById(id: string): Promise<Blog | undefined> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<Blog[]> {
    throw new Error("Method not implemented.");
  }

  /**
   * Return the most recent pages that have been posted
   * @param page Number of page
   * @param count Number of results
   */
  async getRecent(page: number, count: number = 10): Promise<Blog[]> {
    try {
      // Query the db for users
      const results = await this._dbContext.connection.execute<ResultSetHeader>(
        `INSERT INTO ${this.tableName} (id, user_id, title, body) VALUES (?, ?, ?, ?);`,
        [entity.id, entity.userId, entity.title, entity.body]
      );

      // Return true if one or more rows were affected
      return results[0].affectedRows > 0;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async create(entity: Blog): Promise<boolean> {
    try {
      // Create a new blog post
      const results = await this._dbContext.connection.execute<ResultSetHeader>(
        `INSERT INTO ${this.tableName} (id, user_id, title, body) VALUES (?, ?, ?, ?);`,
        [entity.id, entity.userId, entity.title, entity.body]
      );

      // Return true if one or more rows were affected
      return results[0].affectedRows > 0;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  update(entity: Blog): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(entity: Blog): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  save(entity: Blog): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
