import { AppDataSource } from "../../datasource"
import User from "../../entities/user.entity"
import { updateUserRequest } from "../../interfaces/User.interface"

const updateUserService = async({id,name,password,email,telephone}:updateUserRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    
    const listUser = await userRepository.findOneBy({
        id:id
    })
    const newData = {
        name: name || listUser!.name,
        password: password || listUser!.password,
        email: email || listUser!.email,
        telephone: telephone || listUser!.telephone
    }
    userRepository.update({id:listUser?.id},newData)
    
    return newData
}

export default updateUserService