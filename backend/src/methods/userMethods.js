import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from "../models/userModel.js"

export const userLogIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email}).select({_id: 1, password: 1})
        if(!user) return res.status(404).send({message: `Invalid User Name Or Password`})
        
        const match = await bcrypt.compare(password, user?.password)
      
        if(!match) return res.status(404).send({message: `Invalid User Name Or Password`})

        const token = await jwt.sign({authId: user._id}, process.env.AUTH_SECRET, {expiresIn: '6h'})
        if(!token) return res.status(404).send({message: `Authentication Failed`})
        res.send(token)
    } catch (error) {
       res.status(404).send({message: `Internal Server Error`}) 
    }
}

export const createUser = async (req, res) => {
    try {
        const { 
            age, bday,city,
            state, email, gender, mobile,
            address, zipeCode, telehone, education,
            last_name, department, first_name, maritalStatus, password, passwordConfirm
        } = req.body

        if(passwordConfirm !=password) return res.status(404).send({message: `Password Must Match`})


        const alrdy = User.findOne({$or: [{email}, {mobile}]})
        if(alrdy?._id) return res.status(404).send({message: `Account Already Exist`})

        const hasPwd = await bcrypt.hash(password, 10)

        const newUser = new User({
            age, bday,city,
            state, email, gender, mobile,
            address, zipeCode, telehone, education,
            last_name, department, first_name, maritalStatus, password:hasPwd
        })
       const error = newUser.validateSync()
       if (error && error.message) return res.status(404).send({message: error.message.split(':')[2].split(',')[0]});
        await newUser.save()

        res.send({message: `${newUser?.first_name} Created`})
    } catch (error) {
        console.log(error)
        res.status(404).send({message: `${error}`})
    }
}


   