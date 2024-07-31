import { ApplicationDbContext } from "./ApplicationDbContext";
import { IRepository } from "../data/interface/IRepository";

export class GenericRepository<T> implements IRepository<T> {
  private data: Map<string, T> = new Map();
  private _dbContext: ApplicationDbContext;

  constructor() {
    this._dbContext = new ApplicationDbContext();
  }
  getById(id: string): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  create(entity: T): Promise<undefined> {
    throw new Error("Method not implemented.");
  }
  update(entity: T): Promise<undefined> {
    throw new Error("Method not implemented.");
  }
  delete(entity: T): Promise<undefined> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  async save(entity: T): Promise<void> {
    // For simplicity, assuming the entity has an 'id' property
    throw new Error("Method not implemented.");
  }
}
