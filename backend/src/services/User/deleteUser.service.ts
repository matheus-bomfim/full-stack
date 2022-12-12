import { AppDataSource } from "../../datasource"
import Contact from "../../entities/contact.entity"
import User from "../../entities/user.entity"
import { deleteUserRequest } from "../../interfaces/User.interface"

const deleteUserService = async({id}:deleteUserRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)
    
    
    const listUser = await userRepository.findOneBy({
        id:id
    })

    const contacts = await contactRepository.find({relations:{user:true}})

    contacts.forEach((e)=>{
        if(e.user.id === id){
            contactRepository.delete({
                id:e.id
            })
        }
    })
    
    userRepository.delete({
        id:listUser?.id
    })
    
    return "User Deleted"
}

export default deleteUserService