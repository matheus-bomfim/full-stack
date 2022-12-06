import { ReactNode } from "react";
import LogOut from "./LoginHeader/logOut";

interface IChildren{
    children:ReactNode
}

const Providers = ({children}:IChildren) => {
    return(
        <LogOut>
            {children}
        </LogOut>
    )
}

export default Providers