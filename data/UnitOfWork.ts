import { IUnitOfWork } from "../data/interface/IUnitOfWork";
import { IRepository } from "../data/interface/IRepository";
import { User } from "./user";
import { GenericRepository } from "./GenericRepository";
import { ApplicationDbContext } from "./ApplicationDbContext";


export class UnitOfWork implements IUnitOfWork {

    private users: IRepository<User>;

    constructor() {

      this.users = new GenericRepository<User>();
    }
  
    async begin(): Promise<void> {
      // In a memory implementation, begin doesn't do anything
      throw new Error('Method not implemented.');
    }
  
    async commit(): Promise<void> {
      // In a memory implementation, commit doesn't do anything
      throw new Error('Method not implemented.');
    }
  
    async rollback(): Promise<void> {
      // In a memory implementation, rollback doesn't do anything
      throw new Error('Method not implemented.');
    }
  
    user(): IRepository<User> {
      return this.users;
    }
  
  }
  