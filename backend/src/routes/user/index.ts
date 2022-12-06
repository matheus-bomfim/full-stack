import { Router } from "express"; 
import createUserController from "../../controllers/User/createUser.controller";
import createContactController from "../../controllers/contact/createContact.controller";
import authenticationMiddleware from "../../middlewares/authorization.middleware";
import listUserController from "../../controllers/User/listUser.controller";
import handleSchemaUserCreate from "../../middlewares/handleSchemaUser.middleware";
import UserSchema from "../../schemas/schemaUser.schema";
import listContactController from "../../controllers/contact/listContact.controller";
import listUserOwnerController from "../../controllers/User/listUserOwner.controller";
import handleSchemaContactCreate from "../../middlewares/handleSchemaContact.middleware";
import ContactSchema from "../../schemas/schemaContact.schema";
import deleteContactController from "../../controllers/contact/deleteContact.controller";

const ClientRoute = Router()

ClientRoute.get("/contacts/",authenticationMiddleware,listContactController)
ClientRoute.post("/contacts/",handleSchemaContactCreate(ContactSchema),authenticationMiddleware,createContactController)
ClientRoute.delete("/contacts/:id",authenticationMiddleware,deleteContactController)

ClientRoute.post("/register/",handleSchemaUserCreate(UserSchema),createUserController)
ClientRoute.get("/",authenticationMiddleware,listUserController)
ClientRoute.get("/owner",authenticationMiddleware,listUserOwnerController)

export default ClientRoute