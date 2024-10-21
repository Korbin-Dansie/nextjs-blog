import mysql, { PoolOptions } from 'mysql2/promise'
import { GetDBPoolSettings } from "./DbPool";

export class ApplicationDbContext {
    public readonly connection;
    private readonly poolParams: PoolOptions;

    constructor(){
        this.poolParams = GetDBPoolSettings()
        this.connection = mysql.createPool(this.poolParams);
    }
}