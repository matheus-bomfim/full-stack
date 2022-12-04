import {Request,Response} from "express"
import listUserService from "../../services/User/listUser.service"
import {instanceToPlain} from "class-transformer"

const listUserController = async (req:Request,res:Response) => {
    const list = await listUserService()
    return res.status(200).json(instanceToPlain(list))
}

export default listUserController