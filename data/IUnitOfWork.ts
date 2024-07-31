import { User } from "./user";
import { IRepository } from "./IRepository";

export interface IUnitOfWork {
  begin(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  user(): IRepository<User>;
}
