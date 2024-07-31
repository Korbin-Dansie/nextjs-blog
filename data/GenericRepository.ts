import { ApplicationDbContext } from "./ApplicationDbContext";
import { IRepository } from "./IRepository";

export class GenericRepository<T> implements IRepository<T> {
  private data: Map<string, T> = new Map();
  private _dbContext: ApplicationDbContext;

  constructor() {
    this._dbContext = new ApplicationDbContext();
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
