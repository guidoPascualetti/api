import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express"
import {Request, Response} from "express"
import  {RegisterDTO} from "./dto/request/register.dto"
import { Database } from "./database"
const app = express();

app.use(express.json())
Database.initialize()

app.get("/", async (req:Request, res:Response) => {
    console.log("/")
   res.status(200).json({message: "Hello World!"})
})
app.get("/fa", async (req:Request, res:Response) => {
    console.log("/fa")
   res.status(200).json({message: "Hello World!"})
})
app.post("/register", async (req:Request, res:Response) => {
    
    const body: RegisterDTO = req.body
    
    // validate the body

    // validate if the email is already being used

    // store the user in the database
    console.log(body.email)
    res.status(200).json({message: "Hello World!"})
})

const port = 4040
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

AppDataSource.initialize()
    .then(async () => {
        console.log("DB initialized")
    })
    .catch(error => console.log(error))
