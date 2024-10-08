import { PoolOptions } from 'mysql2';

export interface IDBPoolSettings {
    host: string
  
    port: number
  
    user: string
  
    password: string
  
    database: string

    connectionLimit: number
  }
  
  export const GetDBPoolSettings = (): PoolOptions => {
    const env = process.env.NODE_ENV
  
    // if (env == 'development')
    //   return {
    //     host: process.env.host_dev!, //'58.84.143.251',
  
    //     port: parseInt(process.env.port_dev!),
  
    //     user: process.env.user_dev!,
  
    //     password: process.env.password_dev!,
  
    //     database: process.env.database_dev!,
    //   }
    // else
      return {
        host: process.env.db_host!, //'58.84.143.251',
  
        port: parseInt(process.env.db_port!),
  
        user: process.env.db_user!,
  
        password: process.env.db_password!,
  
        database: process.env.db_database!,

        connectionLimit: 10,
      }
  }
  