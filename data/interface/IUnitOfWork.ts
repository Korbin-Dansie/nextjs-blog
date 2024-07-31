import { User } from "../../core/models/user";
import { IRepository } from "./IRepository";

export interface IUnitOfWork {
  begin(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  user(): IRepository<User>;
}
