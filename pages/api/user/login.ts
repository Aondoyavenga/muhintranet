// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  message: string

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
        if(req.method !== 'POST') return res.status(404).json({ message: 'Invalid Request Type' })
       
        axios.post(`${process.env.APP_BASE_URL}/user/auth`, req.body)
        .then(result =>{
            const { data } = result
            res.status(200).json(data)
        }).catch(err =>{
            
            res.status(404).json({message: `${err?.response?.data?.message}`})
        })
        
        
    } catch (error) {
        res.status(404).json({message: `${error}`})
    }
}
