import { AppDataSource } from "../../datasource"
import Contact from "../../entities/contact.entity"
import User from "../../entities/user.entity"
import AppError from "../../errors/appError"
import { ContactCreateRequest } from "../../interfaces/Contact.interface"

const createContactService = async ({name,email,telephone,userId}:ContactCreateRequest) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const userFind = await userRepository.findOneBy({
        id:userId
    })

    if(!userFind){
        throw new AppError(400,"Usuário Não Encontrado")
    }
    
    const createContact = contactRepository.create({
        name,
        email,
        telephone,
        user:userFind!
    })

    await contactRepository.save(createContact)

    return createContact

}

export default createContactService