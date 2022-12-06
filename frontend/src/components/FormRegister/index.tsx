import { useForm } from "react-hook-form"
import Api from "../../services/api"
import { Container, Form } from "./style"
import {toast} from "react-toastify"
import { useState } from "react"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useHistory} from "react-router-dom"
interface RegisterRequest{
    name:string
    password:string
    email0:string
    email1:string
    email2:string
    telephone0:string
    telephone1:string
    telephone2:string
}

interface RegisterRequestAxios{
    name:string
    password:string
    email:Array<string>
    telephone:Array<string>
}


const FormRegister = () => {
    const url = useHistory()
    
    const yupRegister = yup.object().shape({
        name:yup.string().required("Name é Obrigatório"),
        password:yup.string().required("Password é Obrigatório"),
        email0:yup.string().required("Pelo Menos um Email é Obrigatório"),
        telephone0:yup.string().required("Pelo Menos um Telephone é Obrigatório"),
    })

    const {register,handleSubmit,formState:{errors}} = useForm<RegisterRequest>({
        resolver:yupResolver(yupRegister)
    })
    
    const [telEmailStyle,setTelEmailStyle] = useState<number>(32)
    const [listTel,setListTel] = useState<JSX.Element[]>([<input key="0" placeholder="Telephone" {...register(`telephone0`)}/>])
    const [listEmail,setListEmail] = useState<JSX.Element[]>([<input key="0" placeholder="Email" {...register(`email0`)}/>])

    const requestRegister = (data:RegisterRequest) => {
        
        const emailArray = [data.email0,data.email1,data.email2].filter((e)=> e !== undefined)
        
        const telephoneArray = [data.telephone0,data.telephone1,data.telephone2].filter((e)=> e !== undefined)
        
        
        const newData:RegisterRequestAxios = {
            name:data.name,
            password:data.password,
            email:emailArray,
            telephone:telephoneArray
        }
        
        Api.post("users/register/",newData).then((res)=>{
            toast.success("Cadastro Realizado Com Sucesso")
            url.push("/login")
        }).catch((err)=>{
            toast.error(err.response.data)
        })
    }
    
    let widthContainer = `${telEmailStyle}rem`
    
    const addInputTelephone = (tel:number) => {
        if (tel === 1){setListTel([...listTel,<input key="1" placeholder="Telephone"{...register("telephone1")}></input>])}
        else{setListTel([...listTel,<input key="2" placeholder="Telephone"{...register("telephone2")}></input>])}
        
        if(listTel.length === 3){setListTel([...listTel])};
        
        if(telEmailStyle >= 33){setTelEmailStyle(40)}
        else{setTelEmailStyle(telEmailStyle + 3)}
    }

    const addInputEmail = (email:number) => {
        if (email === 1){setListEmail([...listEmail,<input key="1" placeholder="Email"{...register("email1")}></input>])}
        else{setListEmail([...listEmail,<input key="2" placeholder="Email"{...register("email2")}></input>])}
        
        if(listEmail.length === 3){setListEmail([...listEmail])};
        
        if(telEmailStyle >= 33){setTelEmailStyle(40)}
        else{setTelEmailStyle(telEmailStyle + 4)}
    }

    return(
        <Container width={widthContainer}>
            <h2>Cadastro</h2>
            <Form onSubmit={handleSubmit(requestRegister)}>
                <span>Name</span>
                <input placeholder="Name"{...register("name")}/>
                {errors.name && <p>{errors.name.message}</p>}
                <span>Password</span>
                <input placeholder="Password" type="Password" {...register("password")}/>
                {errors.password && <p>{errors.password.message}</p>}
                <span>Email</span>
                {listEmail}
                {errors.email0 && <p>{errors.email0.message}</p>}
                <button type="button" onClick={(e)=>{addInputEmail(listEmail.length)}}>+</button>
                <span>Telephone</span>
                {listTel}
                {errors.telephone0 && <p>{errors.telephone0.message}</p>}
                <button type="button" onClick={(e)=>{addInputTelephone(listTel.length)}}>+</button>
                <button type="submit">Cadastro</button>
            </Form>
        </Container>
    )
}
export default FormRegister
