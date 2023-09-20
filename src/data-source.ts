import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    // host: "localhost",
    // port: 5432,
    // username: "test",
    // password: "test",
    database: "./",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
