import * as yup from "yup"
import {SchemaOf} from "yup"
import { ContactCreateRequest } from "../interfaces/Contact.interface"
const ContactSchema:SchemaOf<ContactCreateRequest> = Object(yup.object().shape({
    name: yup.string().required("Name é Obrigatótio"),
    telephone: yup.array(yup.string()).required("Telefone é Obrigatótio"),
    email: yup.array(yup.string()).required("Email é Obrigatótio"),
}))

export default ContactSchema