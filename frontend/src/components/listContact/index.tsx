import { useEffect, useState } from "react"
import Api from "../../services/api"
import { Box, Container } from "./style"
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {toast} from "react-toastify"
import pdfContact from "../../Reports/contacts";
interface ContactResponse{
    id:string
    name:string
    email:Array<string>
    telephone:Array<string>
}

const ListContact = () => {
    const [listContacts,setListContacts] = useState<ContactResponse[]>([])
    
    const token = localStorage.getItem("token")
    
    useEffect(()=>{
        Api.get("users/contacts/",{
            headers: {
                'Authorization': token 
              }
        }).then((res)=>{
            setListContacts([...res.data])
        })
    })

    const deleteContact = (id:string) => {
        Api.delete(`users/contacts/${id}`,{
            headers: {
                'Authorization': token 
              }
        }).then((res)=>{
            toast.success("Deleção Concluida")
        })
    }
    
    return(
        <Container>
            {listContacts.length > 0 ? listContacts.map((elem)=>{
                return(
                <Box>
                    <h2>Name: {elem.name}</h2>
                    {elem.telephone.map((e,i)=>{return <h5>{`Telephone ${i}`}: {e}</h5>})}
                    {elem.email.map((e,i)=>{return <h5>{`Email ${i}`}: {e}</h5>})}
                    <div>
                    <DeleteIcon key={elem.id} onClick={()=>{deleteContact(elem.id)}} fontSize="medium"/>
                    <PictureAsPdfIcon key={elem.id} onClick={()=>
                        {pdfContact(listContacts)}
                        }
                        fontSize="medium" />
                    </div>

                </Box>
                )
            }):<h2>Nenhum Contato Existente</h2>}
        </Container>
    )
}

export default ListContact