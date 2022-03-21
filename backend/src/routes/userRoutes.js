import express from "express";
import { userLogIn, createUser } from "../methods/userMethods.js";

const router = express.Router()

router
    .post('/auth', userLogIn)
    .post('/', createUser)

export const USER_ROUTER = {
    router
}