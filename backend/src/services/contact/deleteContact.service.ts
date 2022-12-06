import { AppDataSource } from "../../datasource"
import Contact from "../../entities/contact.entity"
import AppError from "../../errors/appError"

const deleteContactService = async(contactId:string) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    
    const findContact = await contactRepository.findOneBy({
       id:contactId
    })

    if(!findContact){
        throw new AppError(400,"Contato Não Existente")
    }


    await contactRepository.delete({id:findContact?.id})
    
    return findContact
}

export default deleteContactService