// import the Request and Response classes

import type { NextApiRequest, NextApiResponse } from 'next'

import { UserRepository } from '../../../data/repository/UserRepository'

// define and export the GET handler function

export default async function Handler(  
    req: NextApiRequest,
    res: NextApiResponse
  ) {
  try {
    // connect to database
    const users = new UserRepository();

    let [results] = await users.getAll();
    console.log(results)

    // return the results as a JSON API response
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
