import {Request,Response} from "express"
import listUserOwnerService from "../../services/User/listUserOwner.service"
import jwt from "jsonwebtoken"
import {instanceToPlain} from "class-transformer"

const listUserOwnerController = async (req:Request,res:Response) => {
    const id = Object(jwt.decode(req.headers.authorization!))
    const list = await listUserOwnerService(id.id)
    return res.status(200).json(instanceToPlain(list))
}

export default listUserOwnerController