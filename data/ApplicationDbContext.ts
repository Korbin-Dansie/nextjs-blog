import mysql from 'mysql2/promise'
import { GetDBPoolSettings } from "./db.pool";

export class ApplicationDbContext {
    public readonly connection;
    private poolParams;

    constructor(){
        this.poolParams = GetDBPoolSettings()
        this.connection = mysql.createPool(this.poolParams);
    }
}