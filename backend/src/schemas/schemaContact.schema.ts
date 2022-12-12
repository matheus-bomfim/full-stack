import * as yup from "yup"
import {SchemaOf} from "yup"
import { ContactCreateRequest } from "../interfaces/Contact.interface"
const ContactSchema:SchemaOf<ContactCreateRequest> = Object(yup.object().shape({
    name: yup.string().required("Name é Obrigatótio").min(3,"Mínimo de 3 Caracteres"),
    telephone: yup.array(yup.string().min(8,"Mínimo de 8 Caracteres")).required("Telefone é Obrigatótio"),
    email: yup.array(yup.string().min(8,"Mínimo de 8 Caracteres")).required("Email é Obrigatótio")
}))

export default ContactSchema