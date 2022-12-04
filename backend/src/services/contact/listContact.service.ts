import { AppDataSource } from "../../datasource"
import Contact from "../../entities/contact.entity"
import User from "../../entities/user.entity"
import AppError from "../../errors/appError"
import { ListContactRequest } from "../../interfaces/Contact.interface"

const listContactService = async ({id}:ListContactRequest) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)
    
    const findUser = await userRepository.findOneBy({id:id})
    const findContact = await contactRepository.find({
        relations:{
            user:true
        }
    })
    
    const filter = findContact.filter((elem)=>{return elem.user.id === findUser?.id})
    
    if(!filter){
        throw new AppError(400,"Contact Não Encontrado")
    }
    return filter
}

export default listContactService