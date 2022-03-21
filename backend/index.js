import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { USER_ROUTER } from './src/routes/userRoutes.js'
dotenv.config()
const app = express()

const PORT = process.env.PORT
app.use(express.json())

app.use('/api/v.1/user', USER_ROUTER.router)

app.listen(PORT, (err) =>{
    if(err) return console.log(err)
    mongoose.connect(process.env.DB_CONNECT_URL, (error) =>{
        if(error) return console.log(error)
        console.log('connected')
    })
    console.log(`App Running on ${PORT}`)
})

