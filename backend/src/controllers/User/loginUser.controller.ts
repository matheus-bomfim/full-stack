import { Request,Response } from "express";
import loginUserService from "../../services/User/loginUser.service";

const loginUserController = async(req:Request,res:Response) => {
    const login = await loginUserService(req.body)
    return res.status(200).json(login)
}

export default loginUserController