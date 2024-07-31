export interface IRepository<T> {
    getById(id: string): Promise<T | undefined>;
    getAll(): Promise<T[]>;

    create(entity: T): Promise<undefined>;
    update(entity: T): Promise<undefined>;
    delete(entity: T): Promise<undefined>;

    // Save the transaction
    save(entity: T): Promise<void>;
  }
  