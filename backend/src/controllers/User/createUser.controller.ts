import {Request,Response} from "express"
import createUserService from "../../services/User/createuser.service"
import {instanceToPlain} from "class-transformer"
const createUserController = async (req:Request,res:Response) => {
    const create = await createUserService(req.body)
    return res.status(201).json(instanceToPlain(create))
}

export default createUserController