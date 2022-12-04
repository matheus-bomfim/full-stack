import * as yup from "yup"
import {SchemaOf} from "yup"
import { UserCreateRequest } from "../interfaces/User.interface"
const UserSchema:SchemaOf<UserCreateRequest> = Object(yup.object().shape({
    name: yup.string().required("Name é Obrigatótio"),
    password: yup.string().required("Password é Obrigatótio"),
    telephone: yup.array(yup.string()).required("Telefone é Obrigatótio"),
    email: yup.array(yup.string()).required("Email é Obrigatótio")
}))

export default UserSchema