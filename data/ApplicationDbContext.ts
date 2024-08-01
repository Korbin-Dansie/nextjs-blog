import mysql, { PoolOptions } from 'mysql2/promise'
import { GetDBPoolSettings } from "./connection/db.pool";

export class ApplicationDbContext {
    public readonly connection;
    private readonly knex = require('knex')({
        client: 'mysql2',
        connection: {
            host: process.env.db_host!, //'58.84.143.251',
  
            port: parseInt(process.env.db_port!),
      
            user: process.env.db_user!,
      
            password: process.env.db_password!,
      
            database: process.env.db_database!,
        },
        pool: { min: 0, max: 10 },
    });


    constructor(){
        this.connection = this.knex.connection();
    }
}