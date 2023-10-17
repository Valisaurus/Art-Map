import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity.config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const newForm = JSON.parse(req.body);

        // Create a new document using Sanity client
        const result = await client.create({
          _type: 'form',
          name: newForm.name,
          address: newForm.address,
          about: newForm.about
        });

        console.log(`Form was created, document ID is ${result._id}`);
        res.status(200).json({ msg: `Form was created, document ID is ${result._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error, check console' });
      }
      break;
  }
}