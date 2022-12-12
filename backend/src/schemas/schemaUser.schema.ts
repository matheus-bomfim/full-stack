import * as yup from "yup"
import {SchemaOf} from "yup"
import { UserCreateRequest } from "../interfaces/User.interface"
const UserSchema:SchemaOf<UserCreateRequest> = Object(yup.object().shape({
    name: yup.string().required("Name é Obrigatótio").min(3,"Mínimo de 3 Caracteres"),
    password: yup.string().required("Password é Obrigatótio").min(8,"Mínimo de 8 Caracteres"),
    telephone: yup.array(yup.string().min(8,"Mínimo de 8 Caracteres")).required("Telefone é Obrigatótio"),
    email: yup.array(yup.string().min(8,"Mínimo de 8 Caracteres")).required("Email é Obrigatótio")
}))

export default UserSchema