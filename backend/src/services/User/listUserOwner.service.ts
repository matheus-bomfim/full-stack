import { AppDataSource } from "../../datasource"
import User from "../../entities/user.entity"
import AppError from "../../errors/appError"
import { ListUserOwnerRequest } from "../../interfaces/User.interface"

const listUserOwnerService = async({id}:ListUserOwnerRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const list = await userRepository.findOneBy({id:id})
    
    if(!list){
        throw new AppError(400,"Usuário Não Encontrado")
    }
    return list
}

export default listUserOwnerService