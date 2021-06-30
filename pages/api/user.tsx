// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

interface ErrorResponseType {
  error: string
}

interface SuccessResponseType {
  _id: string;
  name: string;
  cellphone: string;
  id_document: string;
  address: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<ErrorResponseType | SuccessResponseType>): Promise<void> => {
  
  if (req.method === 'POST') {
    const { name, email, cellphone, id_document, address } = req.body;
    
    if (!name || !email || !cellphone || !id_document || !address) {
      res.status(400).json({ error: 'Missing body parameter' })
      return;
    }

    const { db } = await connect();
    
    const response = await db.collection('users').insertOne({
      name, email, cellphone, id_document, address
    })
  
    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: 'Wrong request method' })
  }
}