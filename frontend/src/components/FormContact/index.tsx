import { useForm } from "react-hook-form"
import Api from "../../services/api"
import { Container, Form } from "./style"
import {toast} from "react-toastify"
import { useState } from "react"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

interface ContactRequest{
    name:string
    email0:string
    email1:string
    email2:string
    telephone0:string
    telephone1:string
    telephone2:string
}

interface ContactRequestAxios{
    name:string
    email:Array<string>
    telephone:Array<string>
}
const FormContact = () => {
    const yupContact = yup.object().shape({
        name:yup.string().required("Name é Obrigatório"),
        email0:yup.string().required("Pelo Menos um Email é Obrigatório"),
        telephone0:yup.string().required("Pelo Menos um Telephone é Obrigatório"),
    })

    const {register,handleSubmit,formState:{errors},resetField} = useForm<ContactRequest>({
        resolver:yupResolver(yupContact)
    })
    
    const [telEmailStyle,setTelEmailStyle] = useState<number>(32)
    const [listTel,setListTel] = useState<JSX.Element[]>([<input key="0" placeholder="Telephone" {...register(`telephone0`)}/>])
    const [listEmail,setListEmail] = useState<JSX.Element[]>([<input key="0" placeholder="Email" {...register(`email0`)}/>])

    const requestContact = (data:ContactRequest) => {
        
        const emailArray = [data.email0,data.email1,data.email2].filter((e)=> e !== undefined)
        
        const telephoneArray = [data.telephone0,data.telephone1,data.telephone2].filter((e)=> e !== undefined)
        
        
        const newData:ContactRequestAxios = {
            name:data.name,
            email:emailArray,
            telephone:telephoneArray
        }
        
        const token = localStorage.getItem("token")

        Api.post("/users/contacts/",newData,{
            headers: {
                'Authorization': token 
              }
        }).then((res)=>{
            toast.success("Contato Cadastrado Com Sucesso")
            resetField("name");resetField("email0");resetField("telephone0")
            setListEmail([<input key="0" placeholder="Email" {...register(`email0`)}/>])
            setListTel([<input key="0" placeholder="Telephone" {...register(`telephone0`)}/>])
            setTelEmailStyle(32)
        }).catch((err)=>{
            toast.error("Algo deu Errado, Tente Mais Tarde")
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
            <h2>Cadastro de Contato</h2>
            <Form onSubmit={handleSubmit(requestContact)}>
                <span>Name</span>
                <input placeholder="Name"{...register("name")}/>
                {errors.name && <p>{errors.name.message}</p>}
                <span>Email</span>
                {listEmail}
                {errors.email0 && <p>{errors.email0.message}</p>}
                <button type="button" onClick={(e)=>{addInputEmail(listEmail.length)}}>+</button>
                <span>Telephone</span>
                {listTel}
                {errors.telephone0 && <p>{errors.telephone0.message}</p>}
                <button type="button" onClick={(e)=>{addInputTelephone(listTel.length)}}>+</button>
                <button type="submit">Cadastrar</button>
            </Form>
        </Container>
    )
}

export default FormContact