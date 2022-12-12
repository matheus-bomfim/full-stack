import { AppDataSource } from "../../datasource"
import Contact from "../../entities/contact.entity"
import AppError from "../../errors/appError"
import { UpdateContact, UpdateContactRequest } from "../../interfaces/Contact.interface"

const updateContactService = async ({id,name,email,telephone}:UpdateContactRequest) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    
    const findContact = await contactRepository.find({
        relations:{
            user:true
        }
    })
    const filter = findContact.filter((e)=>{return e.id === id})

    if(!filter){
        throw new AppError(400,"Contact Not Found")
    }

    const updateData:UpdateContact = {
        name: name || filter[0].name,
        email: email || filter[0].email,
        telephone: telephone || filter[0].telephone
    }
    
   await contactRepository.update({id:filter[0].id},updateData)

   return updateData
}

export default updateContactService