import {Request,Response} from "express"
import deleteUserService from "../../services/User/deleteUser.service"

const deleteUserController = async (req:Request,res:Response) => {
    const id = req.params.id
    const list = await deleteUserService({id:id})
    return res.status(204).json({list})
}

export default deleteUserController