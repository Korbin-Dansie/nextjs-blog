// import the Request and Response classes

import type { NextApiRequest, NextApiResponse } from 'next'

// define and export the GET handler function

export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse
) {
  // this is going to be my JSON response

  const results = {
    message: 'Hello World!',
  }

  // response with the JSON object

  return res.json(results)
}
