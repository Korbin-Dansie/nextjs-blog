// import the Request and Response classes

import type { NextApiRequest, NextApiResponse } from 'next'

import { UnitOfWork } from '@/data/UnitOfWork';

// define and export the GET handler function

export default async function handler(  
    req: NextApiRequest,
    res: NextApiResponse
  ) {
  try {
    // connect to database
    const unitOfWork = new UnitOfWork();
    const users = unitOfWork.users();

    let results = await users.getAll();

    // return the results as a JSON API response
    return res.json(results)
  } catch (err) {
    console.log('ERROR: API - ', (err as Error).message)

    const response = {
      error: (err as Error).message,
      returnedStatus: 400,
    }

    return res.json(response)
  }
}
