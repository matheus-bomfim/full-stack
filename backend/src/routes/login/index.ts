import { Router } from "express";
import loginUserController from "../../controllers/User/loginUser.controller";

const loginRoute = Router()

loginRoute.post("/",loginUserController)

export default loginRoute