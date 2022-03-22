import express from "express";
import { userLogIn, createUser, authenticatedUSer } from "../methods/userMethods.js";
import { requireToken } from "../middlewares/index.js";

const router = express.Router()

router
    .get('/auth', requireToken, authenticatedUSer)
    .post('/auth', userLogIn)
    .post('/', createUser)

export const USER_ROUTER = {
    router
}