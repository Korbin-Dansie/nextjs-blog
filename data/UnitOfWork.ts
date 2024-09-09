import { IUnitOfWork } from "../data/interface/IUnitOfWork";
import { IRepository } from "../data/interface/IRepository";
import { User } from "../core/models/user";
import { ApplicationDbContext } from "./ApplicationDbContext";
import { UserRepository } from "./repository/UserRepository";


export class UnitOfWork implements IUnitOfWork {

    private usersRepository: UserRepository;

    constructor(){
      this.usersRepository = new UserRepository();
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
  
    users(): UserRepository {
      return this.usersRepository;
    }
  
  }
  