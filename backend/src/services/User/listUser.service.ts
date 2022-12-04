import { AppDataSource } from "../../datasource"
import User from "../../entities/user.entity"

const listUserService = async() => {
    const userRepository = AppDataSource.getRepository(User)
    const list = await userRepository.find()
    return list
}

export default listUserService