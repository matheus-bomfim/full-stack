import { Express } from "express";
import ClientRoute from "./user";
import loginRoute from "./login";

const Routes = (app:Express) => {
    app.use("/users",ClientRoute)
    app.use("/login",loginRoute)
}

export default Routes