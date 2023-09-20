import { Connection, Repository,createConnection } from 'typeorm';
import { User } from './entity/User';
export class Database {
    public static connection: Connection;
    public static userReposiotry: Repository<User>;

    public static async initialize() {
        this.connection = await createConnection();
        this.userReposiotry = this.connection.getRepository(User);
     
    }



}