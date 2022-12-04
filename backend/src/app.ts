import express from "express"
import "express-async-errors"
import cors from "cors"
import HandleErrorMiddleware from "./middlewares/errorHandler.middleware"
import Routes from "./routes/routes"
const app = express()

app.use(express.json())
app.use(cors())
Routes(app)
app.use(HandleErrorMiddleware)

export default app