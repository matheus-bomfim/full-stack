import { HeaderStyle } from "./style"
import {useHistory} from "react-router-dom"
import { useContext } from "react"
import { LogOutContext } from "../../Provider/LoginHeader/logOut"
const Header = () => {
    const url = useHistory()
    const {login,setLogin} = useContext(LogOutContext)
    return(
        <HeaderStyle>
            <h1>Agenda</h1>
            <ul>
                <li onClick={()=>{localStorage.getItem("token") ? url.push("/") : url.push("/login")}}>
                    Home
                </li>
                {login ? 
                <li onClick={()=>{url.push("/login")}}>
                    Login
                </li>    
                :
                <li onClick={()=>{setLogin(false);localStorage.setItem("login","false");localStorage.removeItem("token")}}>
                    Logout
                </li>
                }
            </ul>
        </HeaderStyle>
    )
}

export default Header