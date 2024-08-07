export interface IRepository<T> {
    getById(id: string): Promise<T | undefined>;
    getAll(): Promise<T[]>;

    create(entity: T): Promise<boolean>;
    update(entity: T): Promise<boolean>;
    delete(entity: T): Promise<boolean>;

    // Save the transaction
    save(entity: T): Promise<boolean>;
  }
  