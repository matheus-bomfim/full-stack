import {Request,Response} from "express"
import {instanceToPlain} from "class-transformer"
import updateUserService from "../../services/User/updateUser.service"

const updateUserController = async (req:Request,res:Response) => {
    const id = req.params.id
    const list = await updateUserService({id:id,...req.body})
    return res.status(200).json(instanceToPlain(list))
}

export default updateUserController