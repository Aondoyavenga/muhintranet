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
        if(req.method !== 'GET') return res.status(404).json({ message: 'Invalid Request Type' })
        const { token } = req.query
        axios.get(`${process.env.APP_BASE_URL}/user/auth`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
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
