import { AppDataSource } from "../../datasource"
import User from "../../entities/user.entity"
import { UserCreateRequest } from "../../interfaces/User.interface"
import bcrypt from "bcryptjs"
import AppError from "../../errors/appError"
const createUserService = async ({name,password,email,telephone}:UserCreateRequest) => {
    const userRepository = AppDataSource.getRepository(User)

    const findUserCreate = await userRepository.findOneBy({name:name})

    if(findUserCreate){
        throw new AppError(400,"Usuário Já Existe")
    }
    
    const hashPassword = await bcrypt.hash(password,10)

    const createUser = userRepository.create({
        name,
        password:hashPassword,
        UserContacts:[],
        telephone:telephone,
        email:email
    })

    await userRepository.save(createUser)

    return createUser

}

export default createUserService