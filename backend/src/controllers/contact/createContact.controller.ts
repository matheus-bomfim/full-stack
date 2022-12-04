import {Request,Response} from "express"
import createContactService from "../../services/contact/createcontact.service"
import jwt from "jsonwebtoken"
import {instanceToPlain} from "class-transformer"

const createContactController = async (req:Request,res:Response) => {
    const id = Object(jwt.decode(req.headers.authorization!))
    const create = await createContactService({...req.body,userId:id.id})
    return res.status(201).json(instanceToPlain(create))
}

export default createContactController