import { User } from '../models/userModel.js';

import jwt from 'jsonwebtoken'


export const requireToken = async (req, res, next) => {
    try {

        const { authorization } = req.headers;
        if(!authorization){
            return res.status(401).send({
                error: 'You must be logged in'
            })
        }
        const token = authorization.replace("Bearer ", "");

        const payLoad = await jwt.verify(token, process.env.AUTH_SECRET)
        const { authId } = payLoad;

        const user = await User.findById(authId).select({password: 0, __v: 0, updatedAt: 0})
            req.user = user;
            next()
       
        
    } catch (error) {
        res.status(404).send({message: `${error.message}Internal Server Error`})
    }
}




