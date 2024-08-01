// import the Request and Response classes

import type { NextApiRequest, NextApiResponse } from 'next'

// import mysql2/promise for mysql connectivity

import mysql from 'mysql2/promise'

// import GetDBSettings to retrieve the database connection environment parameters,

// and the IDBSettings object interface

// import { GetDBSettings, IDBSettings } from '../data/db.connection'
import { GetDBPoolSettings, IDBPoolSettings } from '../../../data/connection/db.pool'
import { UserRepository } from '../../../data/repository/UserRepository'

// 1. populate the connection parameters

// let connectionParams = GetDBSettings()
// let poolParams = GetDBPoolSettings()

// define and export the GET handler function

export default async function handler(  
    req: NextApiRequest,
    res: NextApiResponse
  ) {
  try {

    // 2. connect to database

    // const connection = await mysql.createPool(poolParams)

    // // 3. create a query to fetch data

    // let get_exp_query = ''

    // get_exp_query = 'select * from user';

    // // we can use this array to pass parameters to the SQL query

    // let values: any[] = []

    // // 4. exec the query and retrieve the results

    // const [results] = await connection.query(get_exp_query, values)

    // // 5. close the connection when done

    // connection.end()

    // // return the results as a JSON API response
    const users = new UserRepository();

    let [results] = await users.getAll();

    return res.json(results)
  } catch (err) {
    console.log('ERROR: API - ', (err as Error).message)

    const response = {
      error: (err as Error).message,

      returnedStatus: 200,
    }

    return res.json(response)
  }
}
