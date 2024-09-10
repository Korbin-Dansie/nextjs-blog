import { User } from "../../core/models/user";
import { UserRepository } from "../repository/UserRepository";
import { IRepository } from "./IRepository";

export interface IUnitOfWork {
  begin(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  users(): UserRepository;
}
