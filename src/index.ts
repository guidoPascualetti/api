import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express"
import {Request, Response} from "express"
import  {RegisterDTO} from "./dto/request/register.dto"
import PasswordHash from "./security/passwordHash"

const app = express();

app.use(express.json())

app.get("/", async (req:Request, res:Response) => {
    const users = await AppDataSource.manager.find(User)

   res.status(200).json({users})
})

app.post("/register", async (req:Request, res:Response) => {
    
    const body: RegisterDTO = req.body
    
    // validate the body
     


    // validate if the email is already being used

    // store the user in the database
    const user = new User()
    user.username = body.username
    user.email = body.email
    user.password = await PasswordHash.hash(body.password)
    user.age = body.age
    await AppDataSource.manager.save(user)
    


    res.status(200).json({user})
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


// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
