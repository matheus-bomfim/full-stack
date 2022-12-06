import {Switch,Route,useHistory} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesPages = () => {
    const url = useHistory()
    if(!localStorage.getItem("token")){
        url.push("/login")
    }
    return(
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/login" exact>
                <Login/>
            </Route>
            <Route path="/register" exact>
                <Register/>
            </Route>
        </Switch>
    )
}
export default RoutesPages