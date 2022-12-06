import {Request,Response} from "express"
import deleteContactService from "../../services/contact/deleteContact.service"

const deleteContactController = async(req:Request,res:Response) => {
    const id = String(req.params.id)
    const list = await deleteContactService(id)
    return res.status(204).json("Contato Excluido Com Sucesso")
}

export default deleteContactController