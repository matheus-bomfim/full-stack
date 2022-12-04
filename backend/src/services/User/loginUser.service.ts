import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { UserLoginRequest } from "../../interfaces/User.interface"
import { AppDataSource } from "../../datasource"
import User from "../../entities/user.entity"
import AppError from "../../errors/appError"

require('dotenv').config()

const loginUserService = async({name,password}:UserLoginRequest) => {
    
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        name:name
    })

    if(!findUser){
        throw new AppError(400,"Name ou Password Incorretos")
    }

    const verifyPassword = bcrypt.compareSync(password,findUser.password!)

    if(!verifyPassword){
        throw new AppError(400,"Name ou Password Incorretos")
    }

    const token = jwt.sign({id:findUser.id},process.env.SECRET_KEY!)

    return {"token":token}

}

export default loginUserService