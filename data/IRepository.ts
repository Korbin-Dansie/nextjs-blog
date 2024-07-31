export interface IRepository<T> {
    findById(id: string): Promise<T | undefined>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<void>;
  }
  