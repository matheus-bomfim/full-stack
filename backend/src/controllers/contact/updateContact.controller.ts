import {Request,Response} from "express"
import {instanceToPlain} from "class-transformer"
import updateContactService from "../../services/contact/updateContact.service"

const updateContactController = async(req:Request,res:Response) => {
    const id = req.params.id
    const {name,email,telephone} = req.body
    const list = await updateContactService({id,name,email,telephone})
    return res.status(200).json(instanceToPlain(list))
}

export default updateContactController