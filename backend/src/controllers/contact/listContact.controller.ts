import {Request,Response} from "express"
import jwt from "jsonwebtoken"
import listContactService from "../../services/contact/listContact.service"
import {instanceToPlain} from "class-transformer"

const listContactController = async(req:Request,res:Response) => {
    const id = Object(jwt.decode(req.headers.authorization!))
    const list = await listContactService(id.id)
    return res.status(200).json(instanceToPlain(list))
}

export default listContactController